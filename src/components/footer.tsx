"use client"
import Link from "next/link"
import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function Footer() {
  function copyEmail() {
    navigator.clipboard.writeText(site.email)
    toast.success("Email copied to clipboard")
  }
  return (
    <footer className="border-t mt-12">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Trevor AB</p>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline"><a href={`mailto:${site.email}`}>Email</a></Button>
          <Button variant="ghost" onClick={copyEmail}>Copy email</Button>
          <Link href={site.socials.github} className="underline underline-offset-4">GitHub</Link>
          <Link href={site.socials.linkedin} className="underline underline-offset-4">LinkedIn</Link>
          <Link href="/resume/resume.pdf" className="underline underline-offset-4">Resume</Link>
        </div>
      </div>
    </footer>
  )
}
