import Link from "next/link"
import Image from "next/image"
import { site } from "@/data/site"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-56px)] isolate flex items-center">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trevor Behnke — Frontend‑leaning Full Stack Engineer
          </h1>
          <p className="mt-4 text-lg text-white/85">
            I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild><Link href="/#work">View Work</Link></Button>
            <Button asChild variant="outline"><Link href="/resume/Trevor_Behnke_Resume.pdf">Download Resume</Link></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
