"use client"
import Link from "next/link"
import { site } from "@/data/site"
import { toast } from "sonner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"

export function Footer() {
  function copyEmail() {
    navigator.clipboard.writeText(site.email)
    toast.success("Email copied to clipboard")
  }

  const socialLinks = [
    { href: site.socials.github, icon: faGithub, label: "GitHub" },
    { href: site.socials.linkedin, icon: faLinkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="mt-20 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row md:px-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js 15, Tailwind CSS v4, and Radix UI.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              className="h-9 w-9 rounded-full text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-900/20 dark:hover:text-brand-400"
            >
              <Link href={link.href} target="_blank" aria-label={link.label}>
                <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
              </Link>
            </Button>
          ))}

          <div className="mx-2 h-4 w-px bg-border/60" aria-hidden="true" />

          <Button
            variant="ghost"
            size="icon"
            onClick={copyEmail}
            className="h-9 w-9 rounded-full text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-900/20 dark:hover:text-brand-400"
            aria-label="Copy Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9 rounded-full text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-900/20 dark:hover:text-brand-400"
          >
            <Link href="/resume/Trevor_Behnke_Senior_Full-Stack_Engineer_Resume.pdf" aria-label="Resume" target="_blank">
              <FontAwesomeIcon icon={faFileLines} className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
