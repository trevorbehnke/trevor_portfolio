export type Project = {
  title: string
  slug: string
  summary: string
  role: string
  timeframe: string
  stack: string[]
  links: { live?: string; repo?: string }
  cover: string
  coverCaption: string
  images: { src: string; caption: string }[]
  metrics?: { label: string; value: string }[]
  featured?: boolean
  private: boolean
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
      repo: "https://github.com/trevorbehnke/bsr",
    },
    cover: "/images/projects/blogsocializer/bsr-cover.png",
    coverCaption: "Landing Page",
    images: [
      { src: "/images/projects/blogsocializer/screen-1.png", caption: "User content dashboard" },
      { src: "/images/projects/blogsocializer/screen-2.png", caption: "Admin metrics panel" },
    ],
    // metrics: [
    //   { label: "Signups", value: "300+" },
    //   { label: "Build time", value: "6 weeks" },
    // ],
    featured: true,
    private: true,
  },
  // Project 2
  {
    title: "U.S. EPA NRSA Dashboard",
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
    coverCaption: "NRSA Dashboard Overview",
    images: [
      { src: "/images/projects/nrsa/screen-1.png", caption: "NRSA Web Report Preview" },
      { src: "/images/projects/nrsa/screen-2.png", caption: "NRSA Indicator Modal Example" },
    ],
    private: true,
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
    coverCaption: "Image comparison bot—overview of results",
    images: [
      { src: "/images/projects/image-bot/screen-1.svg", caption: "State diffs with thresholds" },
      { src: "/images/projects/image-bot/screen-1.svg", caption: "Run history and artifacts" },
    ],
    private: true,
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
    coverCaption: "DayChart—timeline and focus tracking overview",
    images: [
      { src: "/images/projects/daychart/screen-1.svg", caption: "Daily plan vs. actuals" },
      { src: "/images/projects/daychart/screen-1.svg", caption: "Weekly trends and categories" },
    ],
    private: true,
  },
]
