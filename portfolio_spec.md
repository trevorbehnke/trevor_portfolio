**Project: trevor\_portfolio (trevorab.com)**

**Primary goal**

- Ship a static, fast, accessible portfolio that presents me as a “Frontend‑leaning Full Stack Engineer,” with 2–4 projects and one detailed case study. v1 must be minimal, polished, and easy to extend.

**Non-goals (v1)**

- No database, no auth, no CMS, no comments, no server-side forms.

**Tech stack**

- Next.js 15+ (App Router) + TypeScript

- Tailwind CSS 4+

- shadcn/ui components (Radix under the hood)

- Icons: lucide-react

- Fonts: Geist Sans + Geist Mono via next/font

- Hosting: Vercel

- Analytics: Vercel Analytics (stub)

- SEO: next-sitemap; @vercel/og for OG images

**Commands to scaffold (include in README)**

- npx create-next-app\@latest trevor-portfolio --typescript --eslint --tailwind --app --src-dir --import-alias "@/\*"

- cd trevor-portfolio

- npx shadcn\@latest init (dark mode: class)

- npx shadcn add button card badge tabs tooltip dialog dropdown-menu navigation-menu separator toast

- Install deps for sitemap and OG: npm i next-sitemap @vercel/og lucide-react

- Optional analytics: npm i @vercel/analytics

**Information architecture (routes)**

- / (Home): Hero, featured projects grid (4), “What I do” trio, CTAs (Work, Resume, About, Contact).

- /work: All projects grid.

- /work/\[slug]: Project detail (case study).

- /about: Bio, skills/tools, values, headshot placeholder.

- /contact or /resume: Big email button (mailto), resume.pdf link; location/time zone and availability.

- /404: Helpful not-found.

**Design system and theming**

- Dark mode: class strategy; default to system, include toggle.

- Accent: modern teal (#0D9488 base). Provide a small ramp for light/dark usage:

**Accent palette (hex)**

- 50: #F0FDFA (soft surfaces/badges)

- 200: #99F6E4 (tints/badges)

- 400: #2DD4BF (links/focus on dark; dark-theme primary)

- 500: #14B8A6 (optional mid step)

- 600: #0D9488 (primary on light)

- 700: #0F766E (hover on light)

- 900: #134E4A (high-contrast text/accent on light)

**Tailwind config (extend theme)**

- colors.brand.{50,200,400,500,600,700,900} with the hex values above

- borderRadius: md=10px, lg=12px (soft cards/buttons)

- boxShadow\.card: 0 2px 10px rgba(0,0,0,0.08)

- Container max width \~1100–1200px

**shadcn/ui theme variables (HSL)**

- In globals.css, set CSS vars:

Light (:root)

\--primary: 174 84% 31%;           /\* #0D9488 /

\--primary-foreground: 0 0% 100%;

\--ring: 172 66% 50%;              / #2DD4BF \*/

Dark (.dark)

\--primary: 172 66% 50%;           /\* #2DD4BF /

\--primary-foreground: 0 0% 0%;    / near-black for contrast on lighter teal \*/

\--ring: 172 66% 50%;

Also expose brand shades as CSS vars (optional):

\--brand-50: #F0FDFA; --brand-200: #99F6E4; --brand-400: #2DD4BF; --brand-500: #14B8A6; --brand-600: #0D9488; --brand-700: #0F766E; --brand-900: #134E4A;

**Role mapping**

- Light: primary button bg brand-600, hover brand-700, text white; links brand-700; focus ring brand-400; badges bg brand-50.

- Dark: primary button bg brand-400 (hover 500), links 300–400, focus ring brand-400, badges brand-200/15.

**Components to implement**

- Header/Nav (sticky): name/title left; links right; active state; mobile menu via Radix navigation-menu.

- ThemeToggle (dark mode).

- Footer: email, socials, resume link, copyright.

- Hero section: split layout (copy+CTAs left; screenshot/video placeholder right).

- ProjectCard: cover, title, one-line impact, tags, CTA “Case study →”.

- Tag/Badge for stack.

- SectionHeader and Prose styles for case studies.

- Callout component for “My contribution”.

- SkipToContent link.

- Toast for copy-to-clipboard email.

**Pages: structure and content**

- Home:

  - H1 “Trevor Behnke — Frontend‑leaning Full Stack Engineer”

  - Subhead: “I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.”

  - CTAs: View Work, Download Resume

  - Featured projects: 4 cards from data

  - “What I do” 3 columns: Frontend, Backend, Delivery/Infra

- Work:

  - Grid of ProjectCard for all projects

- Work/\[slug] (case study):

  - Header: title, summary, role, timeframe, stack tags, links (live/repo)

  - Outcomes/metrics row

  - Architecture section (bullets + SVG diagram placeholder)

  - Gallery (next/image), captions

  - Decisions/tradeoffs

  - My contribution (explicit)

  - Learnings + next steps

- About:

  - 2–3 paragraphs, skills/tools, headshot placeholder

- Contact/Resume:

  - Big email button (mailto:), resume.pdf link, location/time zone, availability

- 404: Helpful messaging + link to Home

**Content model (v1: local files)**

\- src/data/site.ts:

export const site = {

name: "Trevor Behnke",

title: "Frontend‑leaning Full Stack Engineer",

description: "I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.",

email: "trevor\@trevorab.com",

location: "City, State (TZ)",

primaryDomain: "https\://trevorab.com",

socials: {

github: "https\://github.com/trevorbehnke",

linkedin: "https\://www\.linkedin.com/in/trevorbehnke",

twitter: "https\://twitter.com/yourhandle"

}

};

\- src/data/projects.ts (seed 3 projects):

export type Project = {

title: string;

slug: string;

summary: string;

role: string;

timeframe: string;

stack: string\[];

links: { live?: string; repo?: string };

cover: string;

images: string\[];

metrics?: { label: string; value: string }\[];

featured?: boolean;

};

export const projects: Project\[] = \[

{

title: "SaaS MVP — Multi-tenant microservices",

slug: "saas-mvp",

summary: "Launched in 6 weeks with Stripe billing and CI/CD. Next.js app with Node services, Postgres, and background jobs.",

role: "Frontend‑leaning Full Stack",

timeframe: "2024",

stack: \["Next.js", "React", "TypeScript", "Node", "Postgres", "Stripe", "Vercel"],

links: { live: "https\://example.com", repo: "https\://github.com/yourhandle/saas-mvp" },

cover: "/images/projects/saas-mvp/cover.png",

images: \[

"/images/projects/saas-mvp/screen-1.png",

"/images/projects/saas-mvp/screen-2.png"

],

metrics: \[

{ label: "Signups", value: "300+" },

{ label: "Build time", value: "6 weeks" }

],

featured: true

},

{

title: "Design System & Component Library",

slug: "design-system",

summary: "Built a reusable React/Tailwind component library, reducing UI build time by \~40%.",

role: "Frontend Engineer",

timeframe: "2024",

stack: \["React", "TypeScript", "Tailwind", "Storybook", "Radix"],

links: { repo: "https\://github.com/yourhandle/design-system" },

cover: "/images/projects/design-system/cover.png",

images: \["/images/projects/design-system/screen-1.png"]

},

{

title: "Performance Optimization Initiative",

slug: "perf-initiative",

summary: "Improved Core Web Vitals to 90+ by optimizing images, code-splitting, and caching.",

role: "Frontend‑leaning Full Stack",

timeframe: "2023",

stack: \["Next.js", "React", "Vercel", "Lighthouse"],

links: { repo: "https\://github.com/yourhandle/perf-initiative" },

cover: "/images/projects/perf-initiative/cover.png",

images: \["/images/projects/perf-initiative/screen-1.png"]

}

];

**SEO and social**

- Next.js metadata API configured with site.name/title/description

- Canonical URL set to https\://trevorab.com on all pages

- next-sitemap config: module.exports = { siteUrl: "https\://trevorab.com", generateRobotsTxt: true };

- OG images:

- app/og/route.ts using @vercel/og to generate dynamic images with name/title per page

**Redirects and domain hygiene**

- Default to non-www canonical (https\://trevorab.com)

- If convenient, add middleware or vercel.json redirects for www → non-www

- Placeholder for future alternates (trevorsoftware.com etc.) to 301 → primary (note in README)

**Accessibility and performance**

- Semantic landmarks, proper headings, alt text

- SkipToContent link; visible focus style using brand ring

- Keyboard-nav test across header/menu/cards/buttons

- next/image for all imagery; responsive sizes; WebP/AVIF if available

- Fonts via next/font (display swap)

- Lighthouse targets: Performance 90+, A11y 90+, Best Practices 90+, SEO 90+

**Analytics and contact**

- Include @vercel/analytics \<Analytics /> (easy to remove)

- Contact via prominent mailto link/button; simple schedule link optional

**File structure**

- app/

  - layout.tsx, page.tsx (Home), globals.css

  - work/page.tsx

  - work/\[slug]/page.tsx

  - about/page.tsx

  - contact/page.tsx (or resume/page.tsx) with resume.pdf

  - not-found.tsx

  - og/route.ts (OG image)

- src/

  - components/(ui)/… (shadcn components)

  - components/… (Header, Footer, Hero, ProjectCard, Tag, SectionHeader, ThemeToggle, SkipLink, Callout)

  - data/projects.ts

  - data/site.ts

  - lib/utils.ts

- public/

  - images/projects/... (placeholders)

  - resume.pdf

- next-sitemap.config.js

- tailwind.config.ts, postcss.config.js, tsconfig.json, [README.md](http://readme.md)

**Styling details to implement**

- Container: max-w-\[1100px] mx-auto px-4 md:px-6

- Heading scale: H1 36–40px, H2 28px, H3 22px; body 16px/1.6

- ProjectCard: rounded-lg (12px), border, shadow-card; thumbnail aspect-\[16/9]

- Focus ring utility: focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400

- Dark mode: body class toggled; respects prefers-color-scheme by default

**Hero copy and CTA (seed)**

- H1: Trevor Behnke — Frontend‑leaning Full Stack Engineer

- Subhead: I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.

- Buttons: View Work (links to /work), Download Resume (/resume/resume.pdf)

**Case study skeleton (work/\[slug])**

- Overview: problem, audience, outcome

- Role/timeframe/stack tags

- Outcomes/metrics row

- Architecture highlights (bullets) + diagram placeholder SVG

- UI gallery with captions

- Decisions/tradeoffs

- My contribution (what I did; where AI assisted; what I decided)

- Learnings + next steps

- Links: Live, Repo

**README requirements**

- Setup/run/build/deploy instructions (Vercel)

- How to add a new project (edit src/data/projects.ts; add images under public/images/projects/\<slug>)

- How to change accent color (Tailwind brand scale + CSS vars)

- How to enable/disable analytics

- v2 ideas: switch projects to MDX via Contentlayer; contact API route with Resend; dynamic OG per project thumbnail; add sitemap to CI; testimonials section

**Acceptance tests (include notes or scripts)**

- Lighthouse CI or manual report screenshot with targets met

- Keyboard nav works on header/menu/cards/buttons

- Social share preview works for Home and at least one project

- Sitemap and robots reachable; canonical tags present
