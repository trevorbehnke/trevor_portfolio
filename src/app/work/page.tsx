import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"

export default function WorkPage() {
  return (
    <div className="space-y-4">
      <SectionHeader title="All Work" subtitle="Case studies and selected projects" />
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}

