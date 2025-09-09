export type Project = {
  title: string
  slug: string
  summary: string
  role: string
  timeframe: string
  stack: string[]
  links: { live?: string; repo?: string }
  cover: string
  images: string[]
  metrics?: { label: string; value: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "SaaS MVP — Multi-tenant microservices",
    slug: "saas-mvp",
    summary:
      "Launched in 6 weeks with Stripe billing and CI/CD. Next.js app with Node services, Postgres, and background jobs.",
    role: "Frontend‑leaning Full Stack",
    timeframe: "2024",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node",
      "Postgres",
      "Stripe",
      "Vercel",
    ],
    links: {
      live: "https://example.com",
      repo: "https://github.com/yourhandle/saas-mvp",
    },
    cover: "/images/projects/saas-mvp/cover.svg",
    images: [
      "/images/projects/saas-mvp/screen-1.svg",
      "/images/projects/saas-mvp/screen-2.svg",
    ],
    metrics: [
      { label: "Signups", value: "300+" },
      { label: "Build time", value: "6 weeks" },
    ],
    featured: true,
  },
  {
    title: "Design System & Component Library",
    slug: "design-system",
    summary:
      "Built a reusable React/Tailwind component library, reducing UI build time by ~40%.",
    role: "Frontend Engineer",
    timeframe: "2024",
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Radix"],
    links: { repo: "https://github.com/yourhandle/design-system" },
    cover: "/images/projects/design-system/cover.svg",
    images: ["/images/projects/design-system/screen-1.svg"],
  },
  {
    title: "Performance Optimization Initiative",
    slug: "perf-initiative",
    summary:
      "Improved Core Web Vitals to 90+ by optimizing images, code-splitting, and caching.",
    role: "Frontend‑leaning Full Stack",
    timeframe: "2023",
    stack: ["Next.js", "React", "Vercel", "Lighthouse"],
    links: { repo: "https://github.com/yourhandle/perf-initiative" },
    cover: "/images/projects/perf-initiative/cover.svg",
    images: ["/images/projects/perf-initiative/screen-1.svg"],
  },
]
