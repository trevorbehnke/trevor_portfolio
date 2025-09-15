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
import { Button, buttonVariants } from "@/components/ui/button"
import { faCode, faServer, faTruckFast } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <Hero />

      {/* Work section*/}
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

      {/* Approach section*/}
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
        <SectionHeader title="About Me" />
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          <div className="space-y-3 md:col-span-2">
            <p>
              I’m Trevor Behnke, a frontend‑leaning full stack engineer focused on
              building fast, accessible web apps. I enjoy shaping product UX,
              performance, and developer experience.
            </p>
            <p>
              Tools I reach for: React/Next.js, TypeScript, Tailwind, Node,
              Postgres, Vercel, and modern observability.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum nemo assumenda minus adipisci molestiae. Culpa ab molestiae nesciunt architecto beatae necessitatibus, qui illo eos, animi aspernatur optio, explicabo sunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum nemo assumenda minus adipisci molestiae. Culpa ab molestiae nesciunt architecto beatae necessitatibus, qui illo eos, animi aspernatur optio, explicabo sunt.</p>
          </div>
          <div className="rounded-full border overflow-hidden md:col-span-1 w-full max-w-[200px] md:max-w-[200px] place-self-center">
            <Image
              src="/images/me.jpg"
              alt="Headshot"
              width={200}
              height={200}
              className="object-cover object-center rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Contact/Resume section (moved from /contact) */}
      <section id="contact" className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 space-y-3">
        <SectionHeader title="Get in touch" />
        <p className="text-muted-foreground">Let’s talk about your project or team.</p>
        <div id="contact-buttons" className="flex gap-3">
          <Button asChild variant="default" className="hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103">
            <a href={`mailto:${site.email}`}>Email</a>
          </Button>
          <Link
            className={
              `${buttonVariants({ variant: 'link' })} self-center inline-flex items-center transition-colors hover:opacity-80`
            }
            href="/resume/Trevor_Behnke_Resume.pdf"
          >
            Download Resume
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">Location: {site.location} — Availability: Open to opportunities</div>
      </section>
    </div>
  )
}
