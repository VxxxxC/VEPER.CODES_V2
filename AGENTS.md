# AGENTS.md

Personal website ([veper.codes](https://veper.codes/)): React 19 + Vite 6 (SWC) + TypeScript + Tailwind CSS v4 + Chakra UI v3 + react-router v7. Single SPA, no backend, no monorepo.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typechecks first)
- `npm run check` — standalone typecheck (`tsc --noEmit`)
- `npm run lint` — `eslint .`
- **No tests exist** (no test framework or script). Verification = `npm run check` + `npm run lint` + `npm run build`.
- `npm run lint` currently **fails with 2 pre-existing errors + 4 warnings** (`no-empty-object-type`, `react-refresh/only-export-components`, `exhaustive-deps`). Don't "fix" unrelated files to make it pass; only ensure your changes add no new problems.

## Import aliases (defined in both `vite.config.ts` and `tsconfig.app.json`)

- `@components` → `src/components`, `@assets` → `src/assets`, `@routes` → `src/routes`, `@layouts` → `src/layouts`
- `@chakra` → `src/src` (local Chakra CLI snippet components, e.g. `@chakra/components/ui/color-mode`). **Do not confuse with the npm package `@chakra-ui/react`** — imports often use both in the same file.
- **Do not use `@/…`** — that alias is broken and unused: `vite.config.ts` points it at a nonexistent `.src` dir and the tsconfig path mapping is malformed.

## Structure notes (not obvious from filenames)

- `src/src/components/ui/` (nested `src` is intentional) holds **Chakra CLI-generated snippets** (`color-mode.tsx`, `provider.tsx`). Prefer regenerating via the Chakra CLI over hand-editing; note `provider.tsx` is unused — `main.tsx` builds its own Chakra system inline with custom `textStyles`.
- Entry chain: `index.html` → `src/main.tsx` (provider stack: `CookiesProvider` → `ChakraProvider` → `ColorModeProvider` → `RouterProvider`) → `src/router.tsx`.
- Routing: `createBrowserRouter` with `src/App.tsx` as the layout route rendering `<Outlet/>`; children are `home` (index), `works`, `projects`, `blog` under `src/routes/`. Adding a page = new file in `src/routes/` + entry in `router.tsx`.
- Blog posts are **markdown files in `src/routes/blog/posts/`**, imported as raw strings (`import x from "./posts/x.md?raw"` — `vite/client` types cover `?raw`) and registered in `src/routes/blog/posts.ts` (slug/title/date/content). New post = new `.md` + one metadata entry; rendered with `react-markdown` in `BlogPost.tsx`, styled by `src/routes/blog.css` (Chakra's reset strips all element styles, so markdown needs it).
- `src/layouts/` holds shared page layouts (`ProjectLayout`, `WorkLayout`) that route-level pages compose.

## Styling

- Tailwind v4: no config file, enabled via `@tailwindcss/vite`. Each CSS file that needs utilities must start with `@import "tailwindcss"` (see `src/App.css`, `src/routes/home.css`, `src/layouts/*.css`).
- Global styles live in **root-level `index.css`** (not `src/`), imported by `main.tsx` as `../index.css`. Dark/light theming uses CSS `light-dark()` there plus Chakra's `ColorModeProvider` (via `next-themes`).
- Components are styled primarily with Chakra style props; custom responsive text styles (`mobile`, `normal`, `header`, `body`) are defined in `main.tsx`.

## TypeScript constraints (tsconfig.app.json — enforced by `check`/`build`)

- `verbatimModuleSyntax`: type-only imports **must** use `import type` (existing code does).
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties.
- `noUnusedLocals` / `noUnusedParameters`: remove dead variables or the build fails.
- `allowImportingTsExtensions`: existing imports often include explicit `.tsx` (e.g. `import MotionDiv from "@components/MotionDiv.tsx"`); both styles resolve, match the local file's style.

## Deploy

- Vercel SPA: `vercel.json` rewrites all paths to `/` (required for client-side routes like `/works`). Keep it if changing routing.
