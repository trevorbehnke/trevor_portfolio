This is a Next.js 15 + TypeScript + Tailwind v4 portfolio.

## Setup & Development
- Install deps: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build` → Start: `npm start`
- Lint: `npm run lint`

Deploy on Vercel. Canonical is non‑www (`trevorab.com`); `src/middleware.ts` redirects `www → non‑www`.

## Content & Pages
- Projects live in `src/data/projects.ts` (seeded with 3 examples). Images under `public/images/projects/<slug>/`.
- Site meta in `src/data/site.ts` (name, title, description, socials, domain).
- Routes: `/`, `/work`, `/work/[slug]`, `/about`, `/contact`, custom `not-found.tsx`, OG image at `/og`.

## Styling & Accent Color
- Tailwind config defines `brand` colors (teal scale) and `shadow-card`.
- CSS variables in `src/app/globals.css` map brand → theme tokens.
- To change accent: update `tailwind.config.ts` `colors.brand.*` and matching CSS vars (`--primary`/`--ring` and optional `--brand-*`).

## Add a New Project
1. Add an entry to `src/data/projects.ts` (see type and examples).
2. Add images to `public/images/projects/<slug>/` (cover + any screens).
3. Mark `featured: true` to surface on the home grid.

## Analytics
- Vercel Analytics is included via `<Analytics />` in `src/app/layout.tsx`. Remove or comment out if not needed.

## Sitemap & SEO
- Configured via `next-sitemap.config.js`. Generate in CI or locally as desired. Metadata and canonical are set in `layout.tsx`.
