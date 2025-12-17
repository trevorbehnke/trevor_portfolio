# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `src/app`; key routes include `page.tsx`, `work/[slug]/page.tsx`, and `not-found.tsx`, with the OG generator under `src/app/og`.
- Reusable UI sits in `src/components` (Radix-wrapped primitives under `src/components/ui`); use `cn` from `src/lib/utils.ts` to merge Tailwind classes.
- Content sources: `src/data/projects.ts` and `src/data/site.ts`; project assets live in `public/images/projects/<slug>/`. Global styles are in `src/app/globals.css`, with theme tokens set in `tailwind.config.ts`.
- `src/middleware.ts` handles `www → apex` redirects; sitemap config resides in `next-sitemap.config.js`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the dev server with Turbopack at `http://localhost:3000`.
- `npm run build` — type-check and produce the production bundle (Turbopack).
- `npm start` — serve the built app locally.
- `npm run lint` — run ESLint with the Next + TypeScript ruleset.

## Coding Style & Naming Conventions
- TypeScript strict mode is enabled; prefer typed props/returns and the `@/` alias for imports from `src`.
- Components are functional and exported in PascalCase; filenames stay kebab-case (e.g., `project-card.tsx`). Keep co-located styles/utilities near the feature.
- Tailwind v4 provides styling; keep class lists concise and merge conditional classes with `cn`.
- Follow the repo defaults: 2-space indent, double-quoted strings, and no semicolons (ESLint enforces).

## Testing Guidelines
- No automated suite is present; at minimum run `npm run lint` and `npm run build` before pushing to catch type and layout regressions.
- When adding coverage, prefer colocated `*.test.ts[x]` files; Vitest for utilities and Playwright for pages are good fits. Store fixtures under `__fixtures__` and test real render paths instead of shallow mocks.

## Commit & Pull Request Guidelines
- Commits are short, imperative, and lowercase (see `git log`: `update resume`, `fix dc live link`); keep subjects ≤72 chars and group related edits.
- PRs should summarize scope, list commands run, and link issues. Include before/after screenshots or a Vercel preview URL for UI changes. Call out content edits (new project entries or assets) and ensure `public/images/projects/<slug>/` contains optimized files.
