# Portfolio Frontend Overhaul — Agentic AI Prompt

## Role & Context

You are a senior frontend engineer and UI/UX designer specializing in modern developer portfolio websites. You are tasked with overhauling the frontend of an already functional Next.js portfolio site to elevate it from "functional but amateur" to "polished and professional" — the kind of site that makes hiring managers pause and explore.

The site owner is a frontend-leaning full-stack engineer targeting hiring managers at mid-to-senior level engineering roles. The design should strike a balance between **creative expression** and **clean professionalism** — visually distinctive enough to be memorable, but restrained enough that a hiring manager takes the owner seriously as an engineer, not just a designer.

---

## Technical Stack & Constraints

- **Framework:** Next.js 15 with TypeScript (App Router)
- **Styling:** Tailwind CSS v4 with CSS variables for theming
- **UI Primitives:** shadcn/ui, Radix UI
- **Icons:** FontAwesome
- **Deployment:** Vercel
- **Current accent color system:** Teal brand scale defined in `tailwind.config.ts` with CSS variable mapping in `globals.css`

### Performance Requirements (Non-Negotiable)

- Lighthouse Performance score must remain **90+** on both mobile and desktop
- No heavy animation libraries (no GSAP, no Lottie, no Three.js)
- All animations must use **CSS transitions/animations** or lightweight approaches (Framer Motion is acceptable *only* if tree-shaken and used sparingly)
- Images must use Next.js `<Image>` with proper `sizes`, `priority`, and format optimization
- No layout shift (CLS must stay near 0)
- Prefer `will-change` and `transform`/`opacity` for GPU-accelerated animations only
- Lazy-load all below-fold content

---

## Repository Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, Analytics, metadata
│   ├── page.tsx            # Home — hero, featured work, tools, about, contact sections
│   ├── globals.css         # CSS variables, brand tokens, base styles
│   ├── work/
│   │   ├── page.tsx        # /work listing
│   │   └── [slug]/page.tsx # /work/[slug] case study detail
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   └── og/                 # OG image generation
├── components/             # Reusable UI components
├── data/
│   ├── projects.ts         # Project entries (title, slug, tags, images, featured flag)
│   └── site.ts             # Site metadata (name, title, description, socials, domain)
├── middleware.ts            # www → non-www redirect
public/
├── images/
│   ├── projects/<slug>/    # Project screenshots & covers
│   ├── tech/               # Technology logos/icons
│   ├── logo.webp
│   └── me.webp             # Headshot
├── resume/                 # Downloadable resume PDF
```

### Current Routes

| Route | Purpose |
|---|---|
| `/` | Single-page home: Hero → Featured Work → Tools → About → Contact |
| `/work` | Full project listing |
| `/work/[slug]` | Individual case study |
| `/about` | Extended about page |
| `/contact` | Contact page |

---

## Current Site Content & Sections (Home Page)

1. **Navigation:** Logo + text links (Work, Tools, About, Contact) with anchor scroll
2. **Hero:** Heading with title/subtitle, one-line value prop paragraph
3. **Featured Work:** 4 project cards (SpillHub, BlogSocializer, EPA NRSA Dashboard, Image Comparison Bot) each with cover image, title, description, tech tags, and "Case Study" link
4. **Tools of the Trade:** Flat grid of ~24 tech icons with labels (JS, TS, Python, Next.js, React, Node, etc.)
5. **My Approach:** 3-column layout — Frontend, Backend, Delivery & Infrastructure — each with bullet points
6. **About Me:** Prose paragraphs + headshot image
7. **Contact:** Email link, resume download button, availability status line
8. **Footer:** Attribution line with tech stack mentions

---

## Overhaul Scope & Directives

You have **full autonomy** to restructure components, refactor markup, and redesign layouts. Preserve all existing content and functionality — the text, projects, routes, and data sources should remain intact. Everything else is fair game.

### 1. Design System Refinement

**Color & Theming:**
- Audit the current teal brand scale and refine it. The palette should feel intentional — not just "default Tailwind teal." Consider a more sophisticated primary with a complementary accent for interactive states and highlights.
- Ensure sufficient contrast ratios (WCAG AA minimum) across all text/background combinations.
- Define a cohesive neutral scale for backgrounds, cards, and text hierarchy (not just Tailwind grays).
- If dark mode exists, ensure it's a first-class citizen — not just "invert colors." Dark mode should have its own considered palette with appropriate surface elevation.

**Typography:**
- Establish a clear type hierarchy: display (hero), heading (section titles), subheading, body, caption, and code/mono.
- Choose a font pairing (or single versatile family) that reads as "technical but approachable." Consider Inter, Geist, Space Grotesk, or similar — avoid anything overly decorative.
- Set consistent `line-height`, `letter-spacing`, and `font-weight` scales in the Tailwind config.
- Section headings should feel confident and architectural, not generic.

**Spacing & Layout:**
- Define a spacing rhythm (8px base grid) and apply it consistently across sections, cards, and gaps.
- Max content width should be intentional (e.g., `max-w-5xl` or `max-w-6xl` for readability).
- Ensure generous whitespace between sections — let the design breathe.

### 2. Navigation

- Sticky/fixed nav with a subtle backdrop blur on scroll.
- Active section indicator (highlight, underline, or dot) that updates on scroll (Intersection Observer).
- Smooth scroll behavior for anchor links.
- Mobile: Hamburger menu with a clean slide-in or overlay panel — not a janky dropdown.
- Nav should feel minimal but precise. Consider a slight visual treatment (subtle border-bottom or shadow) that appears only after scrolling past the hero.

### 3. Hero Section

- This is the most critical 3 seconds. It needs to feel immediate, confident, and polished.
- Subtle entrance animation (fade-up or stagger on heading/subtext) — keep it under 600ms total.
- Consider a minimal animated element (a subtle gradient shift, a softly pulsing accent, or a tasteful geometric pattern) that adds visual interest without being distracting.
- The hierarchy should be crystal clear: Name → Role → Value Prop → CTA (if applicable).
- Optional: a subtle scroll indicator (chevron or line) to hint that content continues below.

### 4. Featured Work / Project Cards

- This section needs the biggest upgrade. Cards should feel like portfolio pieces, not blog post previews.
- Each card should have a hover state that feels premium: subtle lift/shadow, image zoom or parallax peek, or a reveal of additional info.
- Consider a staggered layout rather than a uniform grid — a featured/primary project gets more visual real estate, with secondary projects in smaller cards.
- Tech tag chips should be styled consistently and feel integrated, not like afterthoughts.
- Transition to the case study page should feel intentional (smooth page transition or shared element animation if feasible without heavy libraries).
- Add subtle scroll-triggered entrance animations (fade-in-up with stagger delay) as cards come into view.

### 5. Tools / Tech Stack Section

- The current flat grid of icons is functional but forgettable. Elevate it.
- Options to explore: grouped by category (Frontend, Backend, DevOps, etc.) with subtle visual separation; a masonry or hex-grid layout; icons with a subtle hover glow or tooltip; or a horizontally scrolling marquee for a more dynamic feel.
- Icons should feel crisp and consistently sized. If using SVGs from different sources, normalize their visual weight.

### 6. "My Approach" Section

- The 3-column layout is solid conceptually but needs visual polish.
- Each column should feel like a distinct card or panel with clear visual boundaries.
- Consider subtle iconography or illustrations for each pillar (Frontend, Backend, Delivery).
- Bullet points should be styled — custom list markers, indentation, and spacing.
- On mobile, these should stack gracefully with clear visual separation.

### 7. About Section

- The headshot should be well-integrated — consider a slight border treatment, rounded corners, or a subtle frame/accent shape behind it.
- The prose should have comfortable line length (max 65-75 characters per line).
- Consider a two-column layout on desktop: headshot on one side, text on the other, rather than text-above-image.
- Pull out a key quote or value statement as a stylized callout to break up the prose.

### 8. Contact Section

- Should feel inviting, not like an afterthought.
- The email link and resume download should be clearly styled as primary and secondary CTAs.
- Consider a minimal visual element — a subtle background pattern, gradient, or illustration.
- The availability status ("Open to opportunities") should be visually distinct — a green dot indicator, a badge, or similar.

### 9. Footer

- Clean and minimal but complete.
- Include social links (GitHub, LinkedIn) with icon buttons.
- The tech attribution line is a nice touch — keep it but style it as understated caption text.

### 10. Global Interactivity & Micro-Animations

Apply these judiciously — the goal is "feels alive" not "feels like a tech demo":

- **Scroll-triggered entrances:** Fade-in-up with ~200ms stagger as elements enter the viewport. Use `IntersectionObserver` natively or a lightweight hook. Apply to section headings, cards, and content blocks.
- **Hover states:** Every interactive element (links, buttons, cards, icons) should have a deliberate hover transition (color shift, underline animation, subtle scale, or shadow change). No element should feel "dead" on hover.
- **Button interactions:** Buttons should have hover, focus, and active states. Consider a subtle press effect (scale down slightly on `:active`).
- **Link underline animations:** Animated underlines (grow from left, or fade in) rather than basic `text-decoration`.
- **Focus states:** Visible, styled focus rings for keyboard navigation — not the default browser outline.
- **Page transitions:** If implementing, keep them minimal (a quick fade or slide). Don't block navigation.
- **Smooth scrolling:** CSS `scroll-behavior: smooth` with proper `scroll-margin-top` for the sticky nav offset.
- **Loading states:** Skeleton placeholders for images if they're slow to load.

### 11. Responsive Design

- The site must look excellent at 3 breakpoints minimum: mobile (< 640px), tablet (640-1024px), desktop (> 1024px).
- Navigation collapses to hamburger on mobile.
- Project cards stack to single column on mobile, 2-column on tablet.
- The hero should adapt gracefully — shorter headings, tighter spacing on small screens.
- Touch targets must be at least 44x44px on mobile.
- Test that all hover-dependent interactions have tap equivalents on touch devices.

### 12. Accessibility

- Semantic HTML throughout (`<main>`, `<nav>`, `<article>`, `<section>` with proper headings).
- All images must have descriptive `alt` text.
- Color contrast must meet WCAG AA (4.5:1 for normal text, 3:1 for large text).
- Keyboard navigable: all interactive elements reachable and operable via Tab/Enter/Space.
- Skip-to-content link.
- `prefers-reduced-motion` media query must disable all animations for users who request it.
- Proper `aria-labels` on icon-only buttons and links.

---

## Implementation Guidelines

1. **Start with the design system** — colors, typography, spacing — before touching any components. Update `tailwind.config.ts` and `globals.css` first.
2. **Work section by section**, top to bottom: Nav → Hero → Work → Tools → Approach → About → Contact → Footer.
3. **Preserve all data contracts** — don't modify `src/data/projects.ts` or `src/data/site.ts` structure unless adding optional fields.
4. **Component extraction** — if a section becomes complex, extract it into its own component under `src/components/`.
5. **Test at each stage** — run `npm run build` to catch TypeScript and Next.js errors. Check the dev server visually.
6. **Commit logically** — one commit per section or logical unit of change, not one massive commit.

---

## Quality Bar

When complete, the site should:

- Feel like it was designed by someone who cares deeply about craft
- Load fast and score 90+ on Lighthouse across all categories
- Be immediately navigable and readable on any device
- Make a hiring manager think "this person has taste and attention to detail"
- Not look like a template — it should feel personal and intentional
- Avoid common AI-portfolio clichés: no floating particles, no matrix-style animations, no gratuitous 3D, no "hello world" typewriter effects

---

## What NOT to Do

- Do not add Three.js, GSAP, Lottie, or any heavy animation runtime
- Do not add a blog, CMS, or any new routes
- Do not change the deployment target or build configuration
- Do not add analytics beyond what's already present (Vercel Analytics)
- Do not introduce a CSS-in-JS solution — stay with Tailwind
- Do not over-animate. If in doubt, leave it static
- Do not use stock illustrations or generic SVG blobs from popular illustration libraries
- Do not add a chatbot, AI assistant widget, or any gimmick features