Retrieval-Augmented Generation (RAG) grounds LLM answers in external data instead of relying only on frozen training weights. It retrieves relevant documents, adds them to the prompt, and then generates a response.

Why it beats plain generation:

- **Less hallucination** — answers are tied to retrieved facts.
- **Fresh data** — update the knowledge base with an `INSERT`, no retraining.
- **Domain knowledge** — plug in legal, medical, or internal company documents.
- **User-specific context** — each query can pull from private data without leaking it to the model.

## 1. RAG components

A minimal RAG pipeline has nine moving parts:

1. **External knowledge source** — documents, APIs, or databases.
2. **Chunking + preprocessing** — split text into manageable pieces.
3. **Embedding model** — turns text into numerical vectors that capture meaning.
4. **Vector database** — stores embeddings and enables similarity search.
5. **Query encoder** — embeds the user's question the same way.
6. **Retriever** — fetches the most similar chunks.
7. **Prompt augmentation** — prepends retrieved chunks to the query.
8. **LLM** — generates the final grounded answer.
9. **Updater (optional)** — refreshes data and re-embeds it.

## 2. How it works

Two phases:

```
offline: External data -> Chunk -> Embed -> Store in vector DB
online:  Query -> Embed -> Retrieve top-K -> Augment prompt -> LLM -> Answer
```

Offline, you build a knowledge library. Online, the query is converted into the same vector space, nearest chunks are retrieved, and the LLM answers with that context. This is why RAG is cheaper than fine-tuning: the model's weights stay fixed; only the database changes.

## 3. Vectors and similarity search

An embedding model maps text into a high-dimensional float array. For example, OpenAI `text-embedding-3-small` outputs 1,536 numbers. Semantically similar phrases cluster together in that space.

Distance metrics decide what "closest" means:

- **Cosine similarity** — angle between vectors; the default for text. pgvector: `<=>`.
- **Euclidean (L2)** — straight-line distance. pgvector: `<->`.
- **Inner product** — dot product; equals cosine for normalized vectors. pgvector: `<#>`.

At scale, exact search becomes a full scan. Use approximate indexes:

- **HNSW** — multi-layer graph, high recall, fast queries, memory-heavy. Tuning knobs: `m`, `ef_construction`, `ef_search`.
- **IVFFlat** — k-means buckets (`lists`), scan nearest `probes`. Faster builds, lower recall, degrades as data drifts.

Default to HNSW unless memory is tight.

## 4. Vectors vs keywords

Keyword search (BM25 / Postgres `tsvector`) counts word overlap. It fails when wording diverges:

- Query: "I forgot my login password."
- Doc: "How to reset your credentials."
- **Keyword result:** zero overlap, nothing retrieved.
- **Vector result:** matched, because meanings overlap.

Keywords still win for exact tokens — error codes, SKUs, function names. Production systems use both.

## 5. PostgreSQL vs PostgreSQL + pgvector

Plain Postgres gives you lexical search with `tsvector` + GIN:

```sql
SELECT content FROM documents
WHERE tsv @@ plainto_tsquery('english', 'reset password')
ORDER BY ts_rank(tsv, plainto_tsquery('english', 'reset password')) DESC
LIMIT 5;
```

It cannot rank by meaning.

pgvector adds vector storage and similarity search to the same table:

```sql
CREATE EXTENSION vector;
ALTER TABLE documents ADD COLUMN embedding vector(1536);
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);
SELECT content FROM documents ORDER BY embedding <=> $1 LIMIT 5;
```

![Architecture comparison](/images/rag/one-db-vs-two.svg)

|             | Plain PostgreSQL       | PostgreSQL + pgvector  |
| ----------- | ---------------------- | ---------------------- |
| Data type   | `text` + `tsvector`    | `text` + `vector(n)`   |
| Index       | GIN (inverted)         | HNSW / IVFFlat (ANN)   |
| Performance | ms at millions of rows | ms at millions of rows |
| Meaning     | literal/stem only      | semantic similarity    |

The big architectural win: documents and embeddings live in the same table, under the same transaction. No sync pipeline between a Postgres instance and a separate vector database.

## 6. pgvector + hybrid search

pgvector adds:

- Types: `vector`, `halfvec` (half memory), `sparsevec`, `bit`.
- Operators: `<->` L2, `<=>` cosine, `<#>` inner product, `<+>` L1.
- Bonus: `WHERE`, `JOIN`, and transactions work natively.

Best recall comes from combining vector and keyword retrieval, then fusing with **Reciprocal Rank Fusion (RRF)**:

```sql
WITH vec AS (
  SELECT id, RANK() OVER (ORDER BY embedding <=> $1) AS rank
  FROM documents ORDER BY embedding <=> $1 LIMIT 20
),
kw AS (
  SELECT id, RANK() OVER (ORDER BY ts_rank(tsv, q) DESC) AS rank
  FROM documents, plainto_tsquery('english', $2) q
  WHERE tsv @@ q LIMIT 20
)
SELECT d.content,
  COALESCE(1.0/(60+v.rank), 0) + COALESCE(1.0/(60+k.rank), 0) AS rrf
FROM documents d
LEFT JOIN vec v USING (id)
LEFT JOIN kw k USING (id)
WHERE v.id IS NOT NULL OR k.id IS NOT NULL
ORDER BY rrf DESC LIMIT 5;
```

One SQL statement, no external ranker service.

Field defaults:

- Chunk size: 300–500 tokens, 10–15% overlap.
- HNSW: `m=16`, `ef_construction=64`, `ef_search=40–100`.
- Memory tight? Use `halfvec`.
- Never mix embeddings from different models in one column.

## Closing

For most real workloads — tens of thousands to low millions of embeddings — you don't need a separate vector database. RAG gives you grounded, fresh, domain-specific answers, and PostgreSQL with pgvector already handles the retrieval half.
