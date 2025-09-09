import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center mt-8 md:mt-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Trevor AB — Frontend‑leaning Full Stack Engineer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild><Link href="/work">View Work</Link></Button>
          <Button asChild variant="outline"><Link href="/resume/resume.pdf">Download Resume</Link></Button>
        </div>
      </div>
      <div className="aspect-[16/9] rounded-lg border shadow-card bg-muted/20" aria-label="Project preview placeholder" />
    </section>
  )
}
