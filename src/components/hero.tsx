'use client'
import Link from "next/link"
import Image from "next/image"
import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons"

export function Hero() {
    function copyEmail() {
    navigator.clipboard.writeText(site.email)
    toast.success("Email copied to clipboard")
  }
  return (
    <section className="relative min-h-[calc(100vh-56px)] isolate flex items-center">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl text-foreground">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trevor Behnke — Frontend‑leaning Full Stack Engineer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            I design and build performant web apps with React/Next.js, and ship production-ready APIs when needed.
          </p>
          <div className="mt-4 flex gap-3 text-[1.5rem]">
            <Link href={site.socials.github} target="_blank" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="footer-icon
              " />
            </Link>
            <Link href={site.socials.linkedin} target="_blank" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon
              " />
            </Link>
            <button
              type="button"
              aria-label="Email"
              onClick={copyEmail}
              className="hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon
              " />
            </button>
            <Link href="/resume/Trevor_Behnke_Resume.pdf" aria-label="Resume">
              <FontAwesomeIcon icon={faFileLines} className="footer-icon
              " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
