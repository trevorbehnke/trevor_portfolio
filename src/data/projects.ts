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
  // Project 1
  {
    title: "BlogSocializer — Multi-tenant microservices",
    slug: "blogsocializer",
    summary:
      "Launched in 6 weeks with Stripe billing and CI/CD. Next.js app with Node services, Postgres, and background jobs.",
    role: "Architect & Full Stack Engineer",
    timeframe: "2023-2025",
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
      live: "https://BlogSocializer.com",
      repo: "https://github.com/trevorbehnke/blogsocializer",
    },
    cover: "/images/projects/blogsocializer/bsr_cover.png",
    images: [
      "/images/projects/blogsocializer/screen-1.svg",
      "/images/projects/blogsocializer/screen-2.svg",
    ],
    metrics: [
      { label: "Signups", value: "300+" },
      { label: "Build time", value: "6 weeks" },
    ],
    featured: true,
  },
  // Project 2
  {
    title: "U.S. EPA National Rivers & Streams Assessment 2018-19 Dashboard",
    slug: "nrsa",
    summary:
      "Built a reusable React/Tailwind component library, reducing UI build time by ~40%.",
    role: "Software Engineer",
    timeframe: "2022",
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Radix"],
    links: { 
      live: "https://riverstreamassessment.epa.gov/dashboard",
      repo: "https://github.com/yourhandle/design-system" },
    cover: "/images/projects/nrsa/nrsa-cover.png",
    images: ["/images/projects/nrsa/screen-1.svg"],
  },
  // Project 3
  {
    title: "Image State Comparison Bot",
    slug: "image-comparison-bot",
    summary:
      "Improved Core Web Vitals to 90+ by optimizing images, code-splitting, and caching.",
    role: "Software Engineer",
    timeframe: "2022",
    stack: ["Next.js", "React", "Vercel", "Lighthouse"],
    links: { 
      live: "https://riverstreamassessment.epa.gov/dashboard",
      repo: "https://github.com/yourhandle/design-system" },
    cover: "/images/projects/image-bot/bot-cover.png",
    images: ["/images/projects/image-bot/screen-1.svg"],
  },
  // Project 4
  {
    title: "DayChart - Full Stack Productivity Web App",
    slug: "daychart",
    summary:
      "Automated visual regression testing using Puppeteer and image diffing to catch UI bugs before release.",
    role: "Frontend‑leaning Full Stack",
    timeframe: "2023",
    stack: ["Playwright", "Puppeter", "Node.js", "Heroku"],
    links: { 
      live: "https://vercel.daychart.app",
      repo: "https://github.com/yourhandle/design-system" },
    cover: "/images/projects/daychart/daychart-cover.png",
    images: ["/images/projects/daychart/screen-1.svg"],
  },
]
