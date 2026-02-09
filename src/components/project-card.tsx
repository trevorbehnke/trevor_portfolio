import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"
import { BrowserFrame } from "@/components/browser-frame"
import { cn } from "@/lib/utils"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border-border/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-brand-900/10 hover:border-brand-200/50 dark:hover:border-brand-800/50">
        <div className="bg-muted/30 p-4 pb-0 transition-colors group-hover:bg-brand-50/30 dark:group-hover:bg-brand-900/10">
          <BrowserFrame
            src={project.cover}
            alt={`${project.title} preview`}
            url={project.links.live}
            aspectClassName="aspect-[16/10]"
            className="rounded-t-lg border-b-0 shadow-sm"
          />
        </div>

        <CardHeader className="p-5 pb-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
              {project.title}
            </h3>
            <span className="text-muted-foreground opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </span>
          </div>
        </CardHeader>

        <CardContent className="p-5 pt-2 flex-grow">
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="bg-muted/50 text-muted-foreground hover:bg-brand-100 hover:text-brand-700 dark:bg-muted/20 dark:hover:bg-brand-900/30 dark:hover:text-brand-300 transition-colors pointer-events-none"
              >
                {s}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs text-muted-foreground self-center px-1">+{project.stack.length - 4}</span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
