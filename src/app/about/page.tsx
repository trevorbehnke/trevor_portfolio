export default function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p>
        I’m Trevor Behnke, a frontend‑leaning full stack engineer focused on building
        fast, accessible web apps. I enjoy shaping product UX, performance, and
        developer experience.
      </p>
      <p>
        Tools I reach for: React/Next.js, TypeScript, Tailwind, Node, Postgres,
        Vercel, and modern observability.
      </p>
      <div className="mt-4 h-40 w-40 rounded-full bg-muted/30 border" aria-label="Headshot placeholder" />
    </div>
  )
}

