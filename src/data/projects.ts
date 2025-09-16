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
    contribution?: string[]
    learned?: string[]
  }
}

export const projects: Project[] = [
  // Project 1
  {
    title: "BlogSocializer — Full-Stack AI SaaS MVP",
    slug: "blogsocializer",
    summary:
      "Transforming single blog posts into multiple platform-perfect threads, posts & newsletters in seconds.",
    role: "Sole Architect & Engineer",
    timeframe: "2023-2025",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node",
      "PostgreSQL",
      "OpenAI API",
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
        "BlogSocializer was born out of a pain point I observed: writing blog content is time-intensive, and yet most of that content never reaches people active on other channels. So the idea was to build a tool that turns one long form post into multiple pieces of content automatically — whether it's a Twitter/X thread, a LinkedIn post, or a newsletter — optimized for each channel. The product aims to reduce friction, amplify reach, and let creators get more out of every post.",
      contribution: [
        'Designed and built the frontend UX & editor flows for quickly inputting content, selecting templates, and previewing output',
        'Architected the backend services to process content transformations (prompt engineering, platform-specific restructuring)',
        'Setup multi-tenant billing via Stripe, subscription tiers, and access controls',
        'Built background jobs / queues to handle generation, formatting, and delivering output reliably',
        'Implemented observability & monitoring to track usage metrics, failure rates, and system health',
      ],
      learned: [
        'The value of prompt engineering: small changes in how content is phrased or structured make big differences in output quality across platforms.',
        'Importance of scalable design patterns: anticipating load, failing gracefully, and maintaining performance when many users submit large content.',
        'UI/UX trade-offs: balancing feature richness (many options) with simplicity and speed (minimal friction).',
        'On billing & pricing: building flexible subscription models that both attract early users and sustain growth.',
        'Continuous feedback loops matter: user engagement data drives improvements in how content feels “native” on each platform.',
      ],
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
      contribution: [
        'Built reusable components and internal docs',
        'Paired with teams to migrate screens',
        'Coordinated accessibility sweeps with QA',
      ],
      learned: [
        'Design tokens reduced regressions and improved consistency',
        'Next: expand stories and add visual regression to CI',
      ],
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
      contribution: [
        'Implemented image diff pipeline and Slack alerts',
        'Tuned thresholds with QA to minimize noise',
      ],
      learned: [
        'Stable test states are key for reliable diffs',
        'Next: parallelize captures and cache baselines per branch',
      ],
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
      contribution: [
        'Designed the data model and core UI flows',
        'Managed deployment and environment setup',
        'Used AI for initial schema drafts and copy',
      ],
      learned: [
        'Simple primitives scaled well under real usage',
        'Next: offline sync and mobile-friendly drag interactions',
      ],
    },
  },
]
