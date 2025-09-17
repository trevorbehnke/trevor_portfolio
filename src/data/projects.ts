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
  deployed?: boolean
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
    deployed: true,
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
    title: "U.S. EPA National Rivers & Streams Assessment - Dashboard & Data Visualization",
    slug: "nrsa",
    summary:
      "Frontend & Data Visualization Engineering with D3.js and Core Web Fundamentals.",
    role: "Software Engineer",
    timeframe: "2022",
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "D3.js", "Grunt"],
    links: { 
      live: "https://riverstreamassessment.epa.gov/dashboard",
      repo: "https://github.com/trevorbehnke/private" },
    cover: "/images/projects/nrsa/nrsa-cover.png",
    coverCaption: "NRSA Dashboard Overview",
    images: [
      { src: "/images/projects/nrsa/screen-1.png", caption: "NRSA Web Report Preview" },
      { src: "/images/projects/nrsa/screen-2.png", caption: "NRSA Indicator Modal Example" },
    ],
    private: true,
    deployed: true,
    analysis: {
      background:
        'The U.S. Environmental Protection Agency needed a way to make complex environmental data accessible to the public. The National Rivers & Streams Assessment dashboard and associated web report present condition and indicator data from multiple sources in a clear, interactive format. This project was client-facing, with regular stakeholder meetings to ensure the dashboard aligned with EPA goals and could communicate technical findings to everyday users.',
      contribution: [
        'Built interactive visualizations using HTML, CSS, vanilla JavaScript, and D3.js without reliance on frontend frameworks',
        'Worked within and adapted legacy code, learning to navigate multiple development styles and iterations',
        'Helped compile, clean, and integrate datasets into usable, accurate dashboards',
        'Participated in client-facing sessions to understand requirements and translate them into features',
        'Collaborated with a small team in daily QA/QC cycles, iterating quickly on ideas and implementation',
        'Deployed to government servers, applying security best practices and addressing vulnerabilities with extra care',
      ],
      learned: [
        'The value of mastering core web technologies: HTML, CSS, and vanilla JS provided a solid foundation for flexible, framework-independent work',
        'Deepened expertise in D3.js for creating custom, data-driven visualizations from scratch',
        'Gained adaptability by maintaining and extending legacy code written in diverse styles over many years',
        'Developed strong collaboration skills through close teamwork and iterative QA/QC processes',
        'Learned how to communicate technical details clearly with non-technical stakeholders, bridging the gap between complex data and accessible presentation',
        'Built awareness of government-level security requirements, and how to engineer software with compliance and reliability in mind',
      ],
    },
  },
  // Project 3
  {
    title: "Image Comparison Bot - Automated QA Visual Regression Testing",
    slug: "image-comparison-bot",
    summary:
      "Proprietary, Headless Browser QA Automation for Dashboard State Validation",
    role: "Lead Designer, Architect & Engineer",
    timeframe: "2022",
    stack: ["JavaScript", "Python", "Puppeteer", "Pixelmatch", "Google Cloud Platform"],
    links: { 
      live: "n/a",
      repo: "https://github.com/trevorbehnke/Image-Comparison-Bot" },
    cover: "/images/projects/image-bot/bot-cover.png",
    coverCaption: "Image comparison bot—overview of results",
    images: [
      { src: "/images/projects/image-bot/screen-1.png", caption: "Example Dashboard Error Diff" },
      { src: "/images/projects/image-bot/screen-2.png", caption: "Raw Error States Output" },
    ],
    private: true,
    deployed: false,
    analysis: {
      background:
        'Crow Insight needed a way to ensure quality across complex data dashboards with tens of thousands of possible state combinations. Manual QA was infeasible, so a proprietary automation tool was required to reliably test every state. The Image Comparison Bot was designed to capture screenshots from two different interaction paths (URL ingestion vs. click-based navigation) and compare them pixel by pixel, flagging any differences above a set threshold. Results were compiled into detailed reports that identified errors and the exact state sequences that caused them.',
      contribution: [
        'Refactored and redesigned the project from scratch, replacing a half-built Python implementation with a more suitable JavaScript architecture',
        'Solely responsible for designing, architecting, and engineering the solution, with feedback from colleagues along the way',
        'Implemented automated state exploration (randomized and exhaustive) to capture and compare tens of thousands of dashboard views',
        'Built reporting functionality to flag pixel differences, identify error thresholds, and log reproducible sequences for manual verification',
        'Deployed the system to a GCP VM, enabling automated test runs around the clock as needed for comprehensive QA coverage',
        'Delivered a proprietary tool that significantly reduced QA overhead, improved precision, and flagged issues before production release',
      ],
      learned: [
        'How to design a custom QA automation system tailored to unique client needs',
        'The importance of choosing the right language and tools for the job — JavaScript and Puppeteer proved more effective than the original Python approach',
        'Deepened understanding of pixel-diff algorithms and how to balance sensitivity thresholds to reduce false positives',
        'Gained experience building reproducible, report-driven workflows that make complex errors easier to confirm and resolve',
        'Learned how automation can multiply QA impact — replacing an impossible manual task with a scalable, reliable, and precise solution',
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
    deployed: true,
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
