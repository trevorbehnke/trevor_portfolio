"use client"
import Link from "next/link"
import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { GitHubSolid, LinkedInSolid } from "@/components/icons/brands"

export function Footer() {
  function copyEmail() {
    navigator.clipboard.writeText(site.email)
    toast.success("Email copied to clipboard")
  }
  return (
    <footer className="border-t mt-12">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Trevor Behnke</p>
        <div className="flex items-center gap-3">
          <Link href={site.socials.github} target="_blank" aria-label="GitHub">
            <GitHubSolid className="footer-icon size-6" />
          </Link>
          <Link href={site.socials.linkedin} target="_blank" aria-label="LinkedIn">
            <LinkedInSolid className="footer-icon size-6" />
          </Link>
          <Button
            variant="outline"
            className="email-button hover:cursor-pointer transition-colors"
            onClick={copyEmail}
          >
            Email
          </Button>
          <Button variant="outline" asChild className="resume-button hover:cursor-pointer transition-colors">
            <Link href="/resume/Trevor_Behnke_Resume.pdf">Resume</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
