import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden rounded-lg border shadow-card">
      <div className="relative aspect-[16/9]">
        <Image src={project.cover} alt="" fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.slice(0, 4).map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
        <div className="mt-4">
          <Link href={`/work/${project.slug}`} className="text-brand-700 dark:text-brand-400 underline underline-offset-4">
            Case study →
          </Link>
        </div>
      </div>
    </Card>
  )
}

