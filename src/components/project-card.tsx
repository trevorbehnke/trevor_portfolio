import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"
import { BrowserFrame } from "@/components/browser-frame"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden rounded-lg border shadow-none shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] pt-0 transition-shadow hover:-translate-y-0.5">
      <BrowserFrame
        src={project.cover}
        alt={`${project.title} preview`}
        url={project.links.live}
        aspectClassName="aspect-[16/9]"
        className="rounded-none border-0"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.slice(0, 4).map((s) => (
            <Badge key={s} variant="primary">{s}</Badge>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-200 brand-underline focus-ring rounded-sm transition-colors"
          >
            Case Study
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </Card>
  )
}
