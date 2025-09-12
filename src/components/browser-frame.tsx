import Image from "next/image"
import { cn } from "@/lib/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"

type BrowserFrameProps = {
  src: string
  alt?: string
  url?: string
  title?: string
  className?: string
  aspectClassName?: string
}

function getDisplayUrl(input?: string) {
  if (!input) return ""
  try {
    const u = new URL(input)
    const host = u.hostname.replace(/^www\./, "")
    const path = u.pathname === "/" ? "" : u.pathname
    return `${host}${path}`
  } catch {
    // Bare domain or path-like string — show as provided without protocol
    return input.replace(/^https?:\/\//, "").replace(/^www\./, "")
  }
}

export function BrowserFrame({
  src,
  alt = "",
  url,
  title,
  className,
  aspectClassName = "aspect-[16/10]",
}: BrowserFrameProps) {
  const displayUrl = getDisplayUrl(url)
  return (
    <figure className={cn("rounded-lg border bg-background", className)}>
      {/* Top bar */}
      <div className="h-10 px-3 flex items-center gap-3 border-b rounded-t-lg bg-gradient-to-b from-muted/50 to-background">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full" style={{ background: "#ff5f56" }} />
          <span className="size-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="size-3 rounded-full" style={{ background: "#27c93f" }} />
        </div>

        {/* Nav controls */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <span aria-hidden className="inline-flex items-center justify-center rounded-md hover:bg-muted/60 size-6">
            <FontAwesomeIcon icon={faChevronLeft} className="size-4" />
          </span>
          <span aria-hidden className="inline-flex items-center justify-center rounded-md hover:bg-muted/60 size-6">
            <FontAwesomeIcon icon={faChevronRight} className="size-4" />
          </span>
          <span aria-hidden className="inline-flex items-center justify-center rounded-md hover:bg-muted/60 size-6">
            <FontAwesomeIcon icon={faArrowsRotate} className="size-4" />
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="rounded-md border bg-muted/40 text-muted-foreground text-xs px-2 py-1 truncate">
            {displayUrl || title || "example.com"}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className={cn("relative w-full overflow-hidden rounded-b-lg", aspectClassName)}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </figure>
  )
}
