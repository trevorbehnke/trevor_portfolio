import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-muted-foreground">Let’s talk about your project or team.</p>
      <div className="flex gap-3">
        <a className="inline-flex items-center justify-center rounded-md border px-4 py-2 bg-primary text-primary-foreground focus-ring" href="mailto:trevor@trevorab.com">Email me</a>
        <Link className="underline underline-offset-4" href="/resume/resume.pdf">Download Resume</Link>
      </div>
      <div className="text-sm text-muted-foreground">Location: City, State (TZ) — Availability: Open to opportunities</div>
    </div>
  )
}

