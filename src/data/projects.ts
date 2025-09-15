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
  analysis?: {
    background?: string
    contribution?: string
    learned?: string
  }
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
    analysis: {
      background:
        'Chose a monorepo with shared UI and type packages to accelerate feature delivery. Considered microfrontends, but team size and release cadence favored a simpler deployment model.'+
        'Chose a monorepo with shared UI and type packages to accelerate feature delivery. Considered microfrontends, but team size and release cadence favored a simpler deployment model.',
      contribution:
        'Led architecture, CI/CD, and billing integration. Collaborated with a designer for UI polish. AI assisted in generating test data and some boilerplate.'+
        'Led architecture, CI/CD, and billing integration. Collaborated with a designer for UI polish. AI assisted in generating test data and some boilerplate.',
      learned:
        'Investing early in typed APIs and background jobs paid off. Next: tenant analytics funnels and a migration to queue-backed webhooks.'+
        'Investing early in typed APIs and background jobs paid off. Next: tenant analytics funnels and a migration to queue-backed webhooks.',
    },
  },
  // Project 2
  {
    title: "U.S. EPA National Rivers & Streams Assessment",
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
    analysis: {
      background:
        'Abstracted common UI patterns into a reusable component library. Weighed CSS-in-JS but picked Tailwind tokens for performance and team familiarity.',
      contribution:
        'Built the component library and docs, paired with the team to roll it out across views. Coordinated accessibility sweeps with QA.',
      learned:
        'Design tokens simplified theming and reduced regressions. Next: expand story coverage and add visual regression to CI.',
    },
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
    analysis: {
      background:
        'Used Playwright for capture and pixel-diff thresholds to reduce flaky alerts. Considered Percy, but custom flow was more flexible for our stack.',
      contribution:
        'Implemented diffing pipeline and Slack notifications. Partnered with QA to tune thresholds and suppress noise.',
      learned:
        'Automated diffs caught regressions early; the key was curating stable test states. Next: parallelize captures and cache baselines per branch.',
    },
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
    analysis: {
      background:
        'Modeled tasks as immutable events to enable analytics without complex joins. Considered Kanban-first UX but prioritized speed and calendaring.',
      contribution:
        'Wore multiple hats: data model, UI flows, and deployment. AI assisted in initial schema sketches and copy suggestions.',
      learned:
        'Simple primitives scaled better than expected. Next: offline sync and mobile-friendly drag interactions.',
    },
  },
]
