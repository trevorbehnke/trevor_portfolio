# Repository Guidelines

## Project Structure & Modules
- `src/app` — App Router pages: `page.tsx` (Home), `work/`, `work/[slug]`, `not-found.tsx`, `og/route.ts`, `globals.css`.
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
- Icons: always use the current font awesome icons package for icons.

## Pages & Content
- IA: Home (hero, featured grid, “Approach”), Work/[slug] (case study), About, Contact (mailto + resume), 404, OG image route.
- Content lives in `src/data/site.ts` and `src/data/projects.ts` (seeded per spec). Images under `public/images/projects/<slug>/`.

## Project Data Model
- `Project` fields (in `src/data/projects.ts`):
  - `title`, `slug`, `summary`, `role`, `timeframe`, `stack: string[]`
  - `links: { live?: string; repo?: string }`
  - `cover: string`, `coverCaption: string`, `images: { src: string; caption: string }[]`
  - `metrics?: { label: string; value: string }[]`, `featured?: boolean`
  - `private: boolean` (true → Repo button disabled with “Private”)
  - `deployed?: boolean` (true + `links.live` → Live button enabled; otherwise disabled)
  - `analysis?: { background?: string; contribution?: string[]; learned?: string[] }`
- Order in `projects` determines “Next Case Study” navigation; keep slugs unique.

## Case Study Page (`/work/[slug]`)
- Header: title, summary, role, timeframe, stack badges, optional metrics grid.
- Media: unified lightbox for cover + gallery; uses `ProjectMedia` + `LightboxGallery`.
  - Captions shown under thumbnails and inside lightbox; overlay has subtle blur.
- Analysis section (two‑column spec layout):
  - Background: single paragraph.
  - Contribution & Learned: bullet lists rendered from arrays.
  - Labels + icons use `text-primary` and respect theme.
- Bottom actions: Live/Repo on the left, “Next Case Study” on the right (wraps on small screens).

## Components & Patterns
- UI primitives in `src/components/ui` (shadcn style: Tailwind + `cva` + Radix): `Button`, `Badge`, `Card`, `Dialog`, `NavigationMenu`.
- Dialog: always include a `DialogTitle` (sr‑only ok). For right‑side sheets, override centering transforms; use data‑state slide‑in/out utilities.
- Lightbox: `LightboxGallery` and `ProjectMedia` unify images; caption chip for contrast; keyboard arrows supported; close button present.
- Reveal: `src/components/reveal.tsx` handles scroll‑in animations (fade + slight slide). Honors `prefers-reduced-motion`.

## Navigation
- Desktop: `NavigationMenu` in header. Mobile: `MobileNav` uses `Dialog` as right‑side sheet with blurred overlay, 44px tap targets, subtle brand styling.
- Mobile drawer: prevent auto‑focus on open/close to avoid iOS scroll bounce.
- Mobile links: gradient underline on hover, subtle icon, optional active state (left rule, text-primary).

## Anchors & Scrolling
- Section ids: `work`, `tools`, `approach`, `about`, `contact`.
- Sticky header offset:
  - Global: `--header-h: 56px`; set `scroll-padding-top: var(--header-h)` on `html, body`.
  - Per‑section: add `scroll-mt-[var(--header-h)]` to each target section.

## Theming & Tokens
- Tailwind v4; CSS vars in `globals.css`. Use `text-primary`, `ring`, brand ramp (`--brand-*`), `shadow-card`, rounded `md=10px`, `lg=12px`.
- Utilities: `gradient-underline`, `focus-ring`. Container: `max-w-[1100px] mx-auto px-4 md:px-6`.

## Images
- Prefer `next/image` with explicit `width`/`height` for avatars/small assets; `fill` inside fixed‑aspect wrappers for media.
- If an image fails optimization in prod, set `unoptimized` for that instance. Assets live under `public/images/...`.

## Buttons & Links
- Live button: disabled when `!deployed` or missing `links.live`.
- Repo button: disabled with “Private” when `private === true`.
- Keep hover ring/scale consistent across actions.

## Accessibility
- Dialogs have `DialogTitle` and a visible close control; focus trapped; ESC closes.
- Lists use semantic `ul > li` for bullet content; maintain 44px mobile hit targets.

## Build & Tooling
- Next 15 + Turbopack. Use `npm run build` for prod; `tsc --noEmit` for fast CI/type checks when bundling is restricted.
- Some environments may block optimizer/ports; avoid networked build steps in restricted sandboxes.

## Accessibility & Performance
- Provide `<a href="#content">` skip link; visible focus via brand ring (`focus-ring` utility). Use `next/image` for media.
- Targets: Lighthouse ≥90 across Perf/A11y/BP/SEO. Canonical set to non‑www (`trevorab.com`); sitemap/robots via next‑sitemap.

## Commits & PRs
- Commits: imperative, scoped when useful (e.g., `work: add case study layout`).
- PRs: include description, screenshots for UI, confirm dev server runs and lint passes. Note any SEO/IA changes.
