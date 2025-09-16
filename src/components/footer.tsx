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
        <div className="space-y-1">
          <p className="text-sm text-foreground">Website by&nbsp;
            <span className="font-bold gradient-underline"> Trevor Behnke</span>
          </p>
          <p className="text-sm text-muted-foreground italic"> Built using 
            <span className="font-bold"> Next.js </span> w/ 
            <span className="font-bold"> TypeScript</span>, 
            <span className="font-bold"> Tailwind </span> & 
            <span className="font-bold"> Radix</span>. Deployed on 
            <span className="font-bold"> Vercel</span>. Programmed in 
            <span className="font-bold"> VS Code</span>.
          </p>
          {/* <p className="text-sm text-foreground">Repo available&nbsp;
            <a className="gradient-underline" href="https://github.com/trevorbehnke/trevor_portfolio" target="_blank">here</a>.
          </p> */}
        </div>

        <div className="flex items-center gap-3 text-[1.5rem] justify-end md:justify-start">
          <Link href={site.socials.github} target="_blank" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="footer-icon transition-transform hover:scale-110" />
          </Link>
          <Link href={site.socials.linkedin} target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon transition-transform hover:scale-110" />
          </Link>
          <button
            type="button"
            aria-label="Email"
            onClick={copyEmail}
            className="hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon transition-transform hover:scale-110" />
          </button>
          <Link href="/resume/Trevor_Behnke_Resume.pdf" aria-label="Resume">
            <FontAwesomeIcon icon={faFileLines} className="footer-icon transition-transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
