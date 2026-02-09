import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCircleInfo, faUserGear, faLightbulb, faArrowRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { ProjectMedia } from "@/components/project-media"
import { Reveal } from "@/components/reveal"
import { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const hasMultiple = projects.length > 1
  const nextProject = hasMultiple ? projects[(currentIndex + 1) % projects.length] : null

  return (
    <article className="container max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground pl-0">
          <Link href="/#work">
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" /> Back to Work
          </Link>
        </Button>
      </div>

      <header className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">{project.summary}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm border-y border-border/40 py-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Role:</span>
            <span className="text-muted-foreground">{project.role}</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border/60" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Timeline:</span>
            <span className="text-muted-foreground">{project.timeframe}</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border/60" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="secondary" className="bg-muted/50 hover:bg-muted font-normal text-muted-foreground border-border/40 hover:border-border transition-colors cursor-default">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card/50 p-4 shadow-sm">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{m.label}</div>
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4 pt-2">
          {(project.deployed && project.links.live) ? (
            <Button size="lg" asChild className="rounded-full shadow-lg shadow-brand-500/10">
              <a href={project.links.live} target="_blank">
                Visit Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button size="lg" disabled>
              Visit Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-4 w-4" />
            </Button>
          )}

          {(project.private || project.links.repo) && (
            project.private ? (
              <Button variant="outline" size="lg" disabled className="rounded-full">
                <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> Private Repo
              </Button>
            ) : (
              <Button variant="outline" size="lg" asChild className="rounded-full">
                <a href={project.links.repo!} target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            )
          )}
        </div>
      </header>

      <ProjectMedia
        title={project.title}
        cover={project.cover}
        coverCaption={project.coverCaption}
        images={project.images}
      />

      {/* Analysis Section */}
      {(project.analysis?.background || project.analysis?.contribution || project.analysis?.learned) && (
        <section className="space-y-12 max-w-4xl mx-auto pt-12">
          {project.analysis?.background && (
            <Reveal delayMs={0}>
              <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 items-start p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-border/40 transition-colors">
                <div className="flex items-center gap-3 text-lg font-semibold text-brand-600 dark:text-brand-400">
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                    <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5" />
                  </div>
                  The Challenge
                </div>
                <div className="text-muted-foreground leading-loose text-lg">{project.analysis.background}</div>
              </div>
            </Reveal>
          )}

          {project.analysis?.contribution && project.analysis.contribution.length > 0 && (
            <Reveal delayMs={100}>
              <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 items-start p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-border/40 transition-colors">
                <div className="flex items-center gap-3 text-lg font-semibold text-brand-600 dark:text-brand-400">
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                    <FontAwesomeIcon icon={faUserGear} className="h-5 w-5" />
                  </div>
                  My Role
                </div>
                <ul className="text-muted-foreground leading-loose text-lg space-y-3">
                  {project.analysis.contribution.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 rounded-full bg-brand-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {project.analysis?.learned && project.analysis.learned.length > 0 && (
            <Reveal delayMs={200}>
              <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 items-start p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-border/40 transition-colors">
                <div className="flex items-center gap-3 text-lg font-semibold text-brand-600 dark:text-brand-400">
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                    <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5" />
                  </div>
                  Key Takeaways
                </div>
                <ul className="text-muted-foreground leading-loose text-lg space-y-3">
                  {project.analysis.learned.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 rounded-full bg-brand-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </section>
      )}

      {nextProject && (
        <div className="pt-16 pb-8 flex justify-center border-t border-border/40 mt-16">
          <Button
            asChild
            variant="ghost"
            className="group h-auto py-4 px-8 rounded-full border border-border/40 hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/10 transition-all text-lg"
          >
            <Link href={`/work/${nextProject.slug}`} className="flex flex-col items-center gap-1">
              <span className="text-sm text-muted-foreground font-normal uppercase tracking-wider">Next Project</span>
              <span className="font-bold flex items-center gap-2">
                {nextProject.title} <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      )}
    </article>
  )
}
