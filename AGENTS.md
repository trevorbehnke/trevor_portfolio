# Repository Guidelines

## Project Structure & Modules
- `src/app` — App Router pages: `page.tsx` (Home), `work/`, `work/[slug]`, `about/`, `contact/`, `not-found.tsx`, `og/route.ts`, `globals.css`.
- `src/components` — App components: `Header`, `Footer`, `Hero`, `ProjectCard`, `SectionHeader`, `ThemeToggle`, `SkipToContent`, `Callout`; shadcn primitives in `components/ui`.
- `src/data` — Local content source: `site.ts`, `projects.ts`.
- `src/lib` — Utilities (e.g., `utils.ts`). `public/` — assets (`images/...`, `resume/resume.pdf`).

## Build, Run, Lint
- `npm run dev` — Start dev server.
- `npm run build` — Production build.
- `npm start` — Serve production build.
- `npm run lint` — ESLint (Next core-web-vitals + TS).
- Sitemap: configure via `next-sitemap.config.js` (run generator as needed in CI).

## Coding Style & Naming
- TypeScript, strict. 2‑space indent, single quotes. Components in PascalCase; hooks `useX`.
- Imports use `@/*` paths. Keep components small and colocate styles.
- Tailwind v4 with custom theme: `brand` colors (50,200,400,500,600,700,900), `shadow-card`, rounded `md=10px`, `lg=12px`. Prefer container `max-w-[1100px] mx-auto px-4 md:px-6`.
- Theming: `globals.css` defines CSS vars. Light: `--primary: 174 84% 31%`, `--ring: 172 66% 50%`. Dark: `--primary: 172 66% 50%`, `--primary-foreground: 0 0% 0%`. Brand ramp exposed as `--brand-*`.

## Pages & Content
- IA: Home (hero, featured grid, “What I do”), Work (all projects), Work/[slug] (case study skeleton), About, Contact (mailto + resume), 404, OG image route.
- Content lives in `src/data/site.ts` and `src/data/projects.ts` (seeded per spec). Images under `public/images/projects/<slug>/`.

## Accessibility & Performance
- Provide `<a href="#content">` skip link; visible focus via brand ring (`focus-ring` utility). Use `next/image` for media.
- Targets: Lighthouse ≥90 across Perf/A11y/BP/SEO. Canonical set to non‑www (`trevorab.com`); sitemap/robots via next‑sitemap.

## Commits & PRs
- Commits: imperative, scoped when useful (e.g., `work: add case study layout`).
- PRs: include description, screenshots for UI, confirm dev server runs and lint passes. Note any SEO/IA changes.
