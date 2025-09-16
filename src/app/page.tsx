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
import { Callout } from "@/components/callout"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)
  return (
    <div id="hero" className="space-y-30">
      {/* Hero section */}
      <Hero />

      {/* Work section*/}
      <section id="work" className="space-y-4">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <SectionHeader title="Featured Work" subtitle="These projects represent the breadth of my work — shipping user-friendly interfaces, building reliable full-stack systems, and even creating proprietary tools like a custom quality-control platform used to automate visual regression testing." />
        </div>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid gap-6 sm:grid-cols-2">
          {grid.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      
      {/* Tech stack section */}
      <section id="tools" className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="Tools of the Trade" subtitle="My go-to toolkit balances modern frameworks with battle-tested practices, helping me build fast, secure, and maintainable software." />
        <div className="mt-4">
          <TechStack techs={DEFAULT_TECHS} />
        </div>
      </section>

      {/* Approach section*/}
      <section id="approach" className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="My Approach" subtitle="How I think about building software — from the first pixel to the last deployment."/>
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <Approach
            title="Frontend"
            blurb="Component‑driven, fast interfaces."
            icon={faCode}
            points={[
              "Build with modern design systems",
              "Prioritize a11y: keyboard, focus, semantics",
              "Optimize performance and UX",
            ]}
          />
          <Approach
            title="Backend"
            blurb="Simple, reliable APIs and data models."
            icon={faServer}
            points={[
              "Secure session handling and endpoints",
              "PostgreSQL with caching where it counts",
              "Support workflows, queues & webhooks",
            ]}
          />
          <Approach
            title="Delivery & Infra"
            blurb="Confidence in every deployment."
            icon={faTruckFast}
            points={[
              "Fit infra to the problem, not vice versa",
              "Automate with CI/CD preview environments",
              "Monitor health with observability tools",
            ]}
          />
        </div>
      </section>

      {/* About section */}
      <section id="about" className="max-w-[1100px] mx-auto px-4 md:px-6 space-y-4">
        <SectionHeader title="About Me" subtitle="Driven by Curiosity, Grounded in Craft"/>
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          <div className="space-y-3 md:col-span-2">
            <Callout>
              I approach engineering the same way I approach life — with curiosity, creativity, and a drive to understand how things work at a deeper level. I like to take things apart, study them from the inside out, and then rebuild them in a way that’s better than before. That process of deconstructing and refining is what fuels both my problem-solving and my love of continuous learning.
            </Callout>
            <Callout>
              I gravitate toward complex challenges because they push me to grow. Leveraging modern tooling allows me to simplify the complicated, turning big problems into elegant solutions. Whether I’m designing a system, building an interface, or tuning performance, I aim for results that feel modern, clean, and refined — experiences that get out of the way and just work.
            </Callout>
            <Callout>
              Beyond code, I try to bring the same spirit of curiosity and exploration into my personal life. I’ve been a musician since childhood and find joy in playing guitar, experimenting with sound, and creating something from nothing. I ride my motorcycle for the freedom of the open road, and I love spending time outdoors, where nature has a way of grounding and inspiring me. These parts of my life keep me balanced and remind me why I love building things in the first place.
            </Callout>
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
      <section id="contact" className="max-w-[1100px] mx-auto px-4 md:px-6 space-y-3">
        <SectionHeader title="Get in Touch" subtitle="Let’s connect about your project, your team, or just to swap ideas."/>
        {/* <p className="text-muted-foreground">Let’s talk about your project or team.</p> */}
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
