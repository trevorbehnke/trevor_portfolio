import { projects } from "@/data/projects"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import Image from "next/image"
import { site } from "@/data/site"
import { TechStack } from "@/components/tech-stack"
import { DEFAULT_TECHS } from "@/data/techs"
import { Approach } from "@/components/approach-card"
import { faCode, faServer, faTruckFast } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)
  return (
    <div className="space-y-12">
      {/* Hero */}
      <Hero />
      {/* Work */}
      <section id="work" className="space-y-4">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <SectionHeader title="Featured Work" subtitle="Selected projects across frontend, full stack, and performance" />
        </div>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid gap-6 sm:grid-cols-2">
          {grid.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      {/* Tech stack section */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="Tech I Work With" subtitle="A snapshot of tools I use regularly across the stack" />
        <div className="mt-4">
          <TechStack techs={DEFAULT_TECHS} />
        </div>
      </section>

      {/* My Approach section*/}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="My Approach" />
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <Approach
            title="Frontend"
            blurb="Component‑driven, accessible, fast interfaces."
            icon={faCode}
            points={[
              "Design systems (shadcn, tokens, theming)",
              "A11y: keyboard, focus, semantics",
              "Performance: image/asset budgets, CLS/INP",
            ]}
          />
          <Approach
            title="Backend"
            blurb="Simple, robust APIs and data models."
            icon={faServer}
            points={[
              "Type‑safe endpoints, auth/session",
              "Postgres first, caching when needed",
              "Queues, webhooks, background jobs",
            ]}
          />
          <Approach
            title="Delivery & Infra"
            blurb="Ship confidently with modern tooling."
            icon={faTruckFast}
            points={[
              "Vercel + edge where it fits",
              "CI/CD, preview envs, feature flags",
              "Observability: metrics, tracing, alerts",
            ]}
          />
        </div>
      </section>

      {/* About section */}
      <section id="about" className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 space-y-4">
        <SectionHeader title="About" />
        <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start">
          <div className="h-40 w-40 rounded-full border overflow-hidden relative">
            <Image
              src="/images/me.jpg"
              alt="Headshot"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
          <div className="space-y-3">
            <p>
              I’m Trevor Behnke, a frontend‑leaning full stack engineer focused on
              building fast, accessible web apps. I enjoy shaping product UX,
              performance, and developer experience.
            </p>
            <p>
              Tools I reach for: React/Next.js, TypeScript, Tailwind, Node,
              Postgres, Vercel, and modern observability.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Resume section (moved from /contact) */}
      <section id="contact" className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 space-y-3">
        <SectionHeader title="Get in touch" />
        <p className="text-muted-foreground">Let’s talk about your project or team.</p>
        <div className="flex gap-3">
          <a
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 bg-primary text-primary-foreground focus-ring"
            href={`mailto:${site.email}`}
          >
            Email me
          </a>
          <Link className="underline underline-offset-4" href="/resume/resume.pdf">Download Resume</Link>
        </div>
        <div className="text-sm text-muted-foreground">Location: {site.location} — Availability: Open to opportunities</div>
      </section>
    </div>
  )
}
