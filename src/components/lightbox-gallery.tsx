"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export type LightboxItem = {
  src: string
  caption: string
  alt?: string
}

type LightboxGalleryProps = {
  items: LightboxItem[]
  aspectClassName?: string
  thumbContainerClassName?: string
  className?: string
  projectTitle?: string
}

type ControlledProps = {
  openIndex?: number | null
  onOpenIndexChange?: (idx: number | null) => void
  renderGrid?: boolean
}

export function LightboxGallery({
  items,
  aspectClassName = "aspect-[16/9]",
  thumbContainerClassName = "rounded-md overflow-hidden border",
  className,
  projectTitle,
  openIndex: controlledOpenIndex,
  onOpenIndexChange,
  renderGrid = true,
}: LightboxGalleryProps & ControlledProps) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState<number | null>(null)
  const openIndex = controlledOpenIndex !== undefined ? controlledOpenIndex : uncontrolledIndex
  const setOpenIndex = onOpenIndexChange ?? setUncontrolledIndex

  const hasOpen = openIndex !== null
  const current = typeof openIndex === "number" ? items[openIndex] : null

  useEffect(() => {
    if (!hasOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        const nextIndex = openIndex === null ? 0 : (openIndex + 1) % items.length
        setOpenIndex(nextIndex)
      } else if (e.key === "ArrowLeft") {
        const prevIndex = openIndex === null ? 0 : (openIndex - 1 + items.length) % items.length
        setOpenIndex(prevIndex)
      } else if (e.key === "Escape") {
        setOpenIndex(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [hasOpen, items.length, openIndex, setOpenIndex])

  function openAt(i: number) {
    setOpenIndex(i)
  }
  function next() {
    const nextIndex = openIndex === null ? 0 : (openIndex + 1) % items.length
    setOpenIndex(nextIndex)
  }
  function prev() {
    const prevIndex = openIndex === null ? 0 : (openIndex - 1 + items.length) % items.length
    setOpenIndex(prevIndex)
  }

  return (
    <>
      {renderGrid && (
        <div className={`grid sm:grid-cols-2 gap-4 ${className ?? ""}`}>
          {items.map((img, i) => (
            <figure key={img.src} className="space-y-1">
              <div
                className={`relative ${aspectClassName} ${thumbContainerClassName} cursor-zoom-in`}
                role="button"
                aria-label={img.alt || `${projectTitle ?? "Image"} ${i + 1}`}
                onClick={() => openAt(i)}
              >
                <Image src={img.src} alt={img.alt || "Screenshot"} fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <Dialog open={hasOpen} onOpenChange={(v) => setOpenIndex(v ? openIndex : null)}>
        {current && (
          <DialogContent className="bg-transparent border-0 shadow-none p-0 sm:max-w-[100rem] max-w-[95vw]" showCloseButton={false}>
            <DialogTitle className="sr-only">{current.alt || current.caption}</DialogTitle>
            <div className={`relative ${aspectClassName} w-full`}>
              <Image src={current.src} alt={current.alt || "Screenshot"} fill className="object-contain" />
            </div>
            <div className=" flex justify-center">
              <span className="grid grid-cols-[auto_1fr_auto] items-center rounded-md bg-background/80 backdrop-blur-sm text-foreground text-sm px-2 py-1 shadow-xs w-[40ch]">
                <Button size="sm" variant="ghost" className="cursor-pointer" onClick={prev} aria-label="Previous image">
                  <FontAwesomeIcon icon={faChevronLeft} aria-hidden />
                  <span className="sr-only">Prev</span>
                </Button>
                <span className="text-foreground text-center truncate px-2">{current.caption}</span>
                <Button size="sm" variant="ghost" className="cursor-pointer" onClick={next} aria-label="Next image">
                  <FontAwesomeIcon icon={faChevronRight} aria-hidden />
                  <span className="sr-only">Next</span>
                </Button>
              </span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
