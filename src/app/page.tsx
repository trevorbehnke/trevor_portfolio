import { projects } from "@/data/projects"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import { TechStackShowcase } from "@/components/tech-stack"
import Link from "next/link"
import Image from "next/image"
import { site } from "@/data/site"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)
  return (
    <div className="space-y-12">
      <Hero />
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
      {/* Tech stack showcase */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6">
        <TechStackShowcase />
      </section>
      <section className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="What I do" />
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm text-muted-foreground">React/Next.js, design systems, accessibility, performance.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Backend</h3>
            <p className="text-sm text-muted-foreground">APIs, data modeling, auth, queues, storage.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Delivery & Infra</h3>
            <p className="text-sm text-muted-foreground">Vercel, CI/CD, monitoring, metrics, DX.</p>
          </div>
        </div>
      </section>

      {/* About section (moved from /about) */}
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
