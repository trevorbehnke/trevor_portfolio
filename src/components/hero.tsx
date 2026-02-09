'use client'
import Link from "next/link"
import { site } from "@/data/site"
import { toast } from "sonner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faFileLines, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-blob opacity-50 dark:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container max-w-5xl px-4 md:px-6 relative z-10 text-center">
        <div className="space-y-6 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-1000 ease-out fill-mode-both">

          {/* Badge / Greeting */}
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50/50 px-3 py-1 text-sm font-medium text-brand-800 backdrop-blur-sm dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            v1.0 &middot; Available for new projects
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Trevor Behnke
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-bold">
              <span className="text-brand-600 dark:text-brand-400">Frontend-leaning</span> Full Stack Engineer
            </span>
          </h1>

          {/* Value Prop */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            I build accessible, pixel-perfect web experiences with modern architecture.
            Focused on performance, scalability, and shipping products that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-lg shadow-brand-500/20" asChild>
              <Link href="/#work">
                View Work <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-muted" asChild>
              <Link href="/resume/Trevor_Behnke_Senior_Full-Stack_Engineer_Resume.pdf" target="_blank">
                <FontAwesomeIcon icon={faFileLines} className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </div>

          {/* Socials - Minimal */}
          <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground">
            <Link href={site.socials.github} target="_blank" className="hover:text-foreground transition-colors">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={site.socials.linkedin} target="_blank" className="hover:text-foreground transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
      </div>
    </section>
  )
}
