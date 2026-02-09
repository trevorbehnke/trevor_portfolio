import { projects } from "@/data/projects"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import Image from "next/image"
import { site } from "@/data/site"
import { TechStack } from "@/components/tech-stack"
import { Approach } from "@/components/approach-card"
import { buttonVariants, Button } from "@/components/ui/button"
import { faCode, faServer, faTruckFast, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Callout } from "@/components/callout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)

  return (
    <div className="space-y-32 pb-24">
      {/* Hero section */}
      <Hero />

      {/* Work section*/}
      <section id="work" className="scroll-mt-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 space-y-12">
          <SectionHeader
            title="Featured Work"
            subtitle="A selection of projects that showcase my passion for building robust, user-centric applications."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {grid.map((p, i) => (
              <div key={p.slug} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack section */}
      <section id="tools" className="scroll-mt-24 bg-muted/30 py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 space-y-12">
          <SectionHeader
            title="Tools of the Trade"
            subtitle="My preferred stack for building reliable, scalable, and maintainable software."
          />
          <TechStack />
        </div>
      </section>

      {/* Approach section*/}
      <section id="approach" className="scroll-mt-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 space-y-12">
          <SectionHeader
            title="My Approach"
            subtitle="How I navigate the software development lifecycle, from concept to deployment."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Approach
              title="Frontend"
              blurb="Building intuitive, accessible, and performant interfaces."
              icon={faCode}
              points={[
                "Component-driven development",
                "Accessibility first (WAI-ARIA)",
                "Performance optimization (CWV)",
              ]}
            />
            <Approach
              title="Backend"
              blurb="Designing robust APIs and scalable data architectures."
              icon={faServer}
              points={[
                "RESTful & GraphQL APIs",
                "Secure authentication flows",
                "Database design & optimization",
              ]}
            />
            <Approach
              title="DevOps"
              blurb="Ensuring reliability through automation and monitoring."
              icon={faTruckFast}
              points={[
                "CI/CD pipelines",
                "Infrastructure as Code",
                "Observability & Logging",
              ]}
            />
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="scroll-mt-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 space-y-12">
          <SectionHeader title="About Me" subtitle="Driven by curiosity, tailored by experience." />
          <div className="grid gap-12 md:grid-cols-[2fr_1fr] items-start">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I approach engineering the same way I approach life — with curiosity, creativity, and a drive to understand how things work at a deeper level. I like to take things apart, study them from the inside out, and then rebuild them in a way that’s better than before.
              </p>
              <p>
                I gravitate toward complex challenges because they push me to grow. Leveraging modern tooling allows me to simplify the complicated, turning big problems into elegant solutions.
              </p>
              <p>
                Beyond code, I’m a musician, an outdoor enthusiast, and a lifelong learner. These passions keep me grounded and inspire my creative process.
              </p>
            </div>
            <div className="relative aspect-square w-48 md:w-full overflow-hidden rounded-2xl border-2 border-muted rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300 shadow-2xl mx-auto">
              <Image
                src="/images/me.webp"
                alt="Trevor Behnke"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="scroll-mt-24 pb-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-3xl bg-brand-900/5 border border-brand-200/50 dark:border-brand-800/50 p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to build something great?</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base relative overflow-hidden group">
                <a href={`mailto:${site.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Say Hello</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-background" asChild>
                <Link href="/resume/Trevor_Behnke_Senior_Full-Stack_Engineer_Resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
