import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/callout"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <article className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground mt-1">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2 items-center text-sm">
          <span className="text-foreground/70">{project.role}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-foreground/70">{project.timeframe}</span>
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

      <section>
        <figure className="space-y-1">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border shadow-card">
            <Image src={project.cover} alt="" fill className="object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground">{project.coverCaption}</figcaption>
        </figure>
      </section>

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

      <section>
        <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {project.images.map((img) => (
            <figure key={img.src} className="space-y-1">
              <div className="relative aspect-[16/9] rounded-md overflow-hidden border">
                <Image src={img.src} alt="Screenshot" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Decisions & tradeoffs</h2>
        <p className="text-muted-foreground">Brief discussion of alternatives considered and why.</p>
      </section>

      <Callout>
        Clarify specific contributions, use of AI assistance, and ownership areas.
      </Callout>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Learnings & next steps</h2>
        <p className="text-muted-foreground">What worked, what didn’t, and what to try next.</p>
      </section>

      <section className="pt-2 flex gap-3">
        {project.links.live && (
          <Button
            asChild
            variant="default"
            className="inline-flex items-center gap-2 hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103"
          >
            <a href={project.links.live}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden />
              <span>Live</span>
            </a>
          </Button>
        )}
        {(project.private || project.links.repo) && (
          project.private ? (
            <Button
              variant="default"
              disabled
              className="inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden />
              <span>Private</span>
            </Button>
          ) : (
            <Button
              asChild
              variant="default"
              className="inline-flex items-center gap-2 hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103"
            >
              <a href={project.links.repo!}>
                <FontAwesomeIcon icon={faGithub} aria-hidden />
                <span>Repo</span>
              </a>
            </Button>
          )
        )}
      </section>
    </article>
  )
}
