"use client"
import Link from "next/link"
import { site } from "@/data/site"
import { toast } from "sonner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons"

export function Footer() {
  function copyEmail() {
    navigator.clipboard.writeText(site.email)
    toast.success("Email copied to clipboard")
  }
  return (
    <footer className="border-t mt-12">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Trevor Behnke</p>
        <div className="flex items-center gap-3 text-[1.5rem]">
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
    </footer>
  )
}
