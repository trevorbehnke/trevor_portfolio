import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCircleInfo, faUserGear, faLightbulb, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { ProjectMedia } from "@/components/project-media"
import { Reveal } from "@/components/reveal"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const hasMultiple = projects.length > 1
  const nextProject = hasMultiple ? projects[(currentIndex + 1) % projects.length] : null

  return (
    <article className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground mt-1">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2 items-center text-sm">
          <span className="text-foreground/70 italic">{project.role}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-foreground/70">{project.timeframe}</span>
            <span className="text-muted-foreground">•</span>
          <div className="flex flex-wrap gap-2 ml-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </div>
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border p-3">
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className="text-lg font-semibold">{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      <ProjectMedia
        title={project.title}
        cover={project.cover}
        coverCaption={project.coverCaption}
        images={project.images}
      />

      {/* <section>
        <h2 className="text-2xl font-semibold mb-2">Architecture</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>High-level overview of services and data flow.</li>
          <li>Key tradeoffs and technology choices.</li>
        </ul>
        <div className="mt-3 h-40 rounded-md border bg-muted/20 flex items-center justify-center text-sm text-muted-foreground">
          Diagram placeholder
        </div>
      </section> */}

      
      {/* Analysis: Two-column spec grid */}
      {(project.analysis?.background || project.analysis?.contribution || project.analysis?.learned) && (
        <section className="w-full divide-y">
          {project.analysis?.background && (
            <Reveal delayMs={0}>
              <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-center py-3 md:py-4">
              <div className="flex items-center gap-2 text-base tracking-wide text-primary font-medium">
                <FontAwesomeIcon icon={faCircleInfo} className="size-6 text-primary" aria-hidden />
                Background
              </div>
                <div className="text-muted-foreground leading-relaxed max-w-prose">{project.analysis.background}</div>
              </div>
            </Reveal>
          )}

          {project.analysis?.contribution && project.analysis.contribution.length > 0 && (
            <Reveal delayMs={120}>
              <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-center py-3 md:py-4">
              <div className="flex items-center gap-2 text-base tracking-wide text-primary font-medium">
                <FontAwesomeIcon icon={faUserGear} className="size-6 text-primary" aria-hidden />
                Contribution
              </div>
                <ul className="text-muted-foreground leading-relaxed max-w-prose list-disc pl-5 space-y-1">
                  {project.analysis.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {project.analysis?.learned && project.analysis.learned.length > 0 && (
            <Reveal delayMs={240}>
              <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-center py-3 md:py-4">
              <div className="flex items-center gap-2 text-base tracking-wide text-primary font-medium">
                <FontAwesomeIcon icon={faLightbulb} className="size-6 text-primary" aria-hidden />
                Learned
              </div>
                <ul className="text-muted-foreground leading-relaxed max-w-prose list-disc pl-5 space-y-1">
                  {project.analysis.learned.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </section>
      )}

      <section className="pt-2 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-3">
          {(project.deployed && project.links.live) ? (
            <Button
              asChild
              variant="default"
              className="inline-flex items-center gap-2 hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103"
            >
              <a href={project.links.live} target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden />
                <span>Live</span>
              </a>
            </Button>
          ) : (
            <Button variant="default" disabled className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden />
              <span>Live</span>
            </Button>
          )}
          {(project.private || project.links.repo) && (
            project.private ? (
              <Button
                variant="default"
                disabled
                className="inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faGithub} target="_blank" aria-hidden />
                <span>Private</span>
              </Button>
            ) : (
              <Button
                asChild
                variant="default"
                className="inline-flex items-center gap-2 hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103"
              >
                <a href={project.links.repo!} target="_blank">
                  <FontAwesomeIcon icon={faGithub} aria-hidden />
                  <span>Repo</span>
                </a>
              </Button>
            )
          )}
        </div>

        {nextProject && (
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2 hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103"
            aria-label={`Next case study: ${nextProject.title}`}
          >
            <Link href={`/work/${nextProject.slug}`} rel="next">
              <span>Next Case Study</span>
              <FontAwesomeIcon icon={faArrowRight} aria-hidden />
            </Link>
          </Button>
        )}
      </section>
    </article>
  )
}
