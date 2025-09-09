import { projects } from "@/data/projects"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const grid = [...featured, ...others].slice(0, 4)
  return (
    <div className="space-y-12">
      <Hero />
      <section className="space-y-4">
        <SectionHeader title="Featured Work" subtitle="Selected projects across frontend, full stack, and performance" />
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid gap-6 sm:grid-cols-2">
          {grid.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="max-w-[1100px] mx-auto px-4 md:px-6">
        <SectionHeader title="What I do" />
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm text-muted-foreground">React/Next.js, design systems, accessibility, performance.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Backend</h3>
            <p className="text-sm text-muted-foreground">APIs, data modeling, auth, queues, storage.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Delivery & Infra</h3>
            <p className="text-sm text-muted-foreground">Vercel, CI/CD, monitoring, metrics, DX.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
