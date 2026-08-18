import ragResilientHybridCrag from "./posts/rag-resilient-hybrid-crag.md?raw";
import ragLangchainLanggraph from "./posts/rag-langchain-langgraph.md?raw";
import ragPostgresPgvector from "./posts/rag-postgres-pgvector.md?raw";

export interface BlogPostType {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const posts: BlogPostType[] = [
  {
    slug: "rag-resilient-hybrid-crag",
    title: "RAG in Depth: Resilient Hybrid Pipelines with Smart Routing, Local Fallbacks, and Corrective RAG (CRAG)",
    date: "2026-08-18",
    content: ragResilientHybridCrag,
  },
  {
    slug: "rag-langchain-langgraph",
    title: "RAG in Depth: LangChain and LangGraph",
    date: "2026-08-15",
    content: ragLangchainLanggraph,
  },
  {
    slug: "rag-postgres-pgvector",
    title: "RAG in Depth: Vector Search with PostgreSQL & pgvector",
    date: "2026-08-11",
    content: ragPostgresPgvector,
  },
];

export default posts;
