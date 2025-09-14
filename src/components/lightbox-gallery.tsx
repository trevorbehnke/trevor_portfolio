"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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

export function LightboxGallery({
  items,
  aspectClassName = "aspect-[16/9]",
  thumbContainerClassName = "rounded-md overflow-hidden border",
  className,
  projectTitle,
}: LightboxGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const hasOpen = openIndex !== null
  const current = typeof openIndex === "number" ? items[openIndex] : null

  useEffect(() => {
    if (!hasOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setOpenIndex((idx) => (idx === null ? 0 : (idx + 1) % items.length))
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((idx) => (idx === null ? 0 : (idx - 1 + items.length) % items.length))
      } else if (e.key === "Escape") {
        setOpenIndex(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [hasOpen, items.length])

  function openAt(i: number) {
    setOpenIndex(i)
  }
  function next() {
    setOpenIndex((idx) => (idx === null ? 0 : (idx + 1) % items.length))
  }
  function prev() {
    setOpenIndex((idx) => (idx === null ? 0 : (idx - 1 + items.length) % items.length))
  }

  return (
    <>
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

      <Dialog open={hasOpen} onOpenChange={(v) => setOpenIndex(v ? openIndex : null)}>
        {current && (
          <DialogContent className="bg-transparent border-0 shadow-none p-0 sm:max-w-[80rem] max-w-[95vw]" showCloseButton>
            <DialogTitle className="sr-only">{current.alt || current.caption}</DialogTitle>
            <div className={`relative ${aspectClassName} w-full`}>
              <Image src={current.src} alt={current.alt || "Screenshot"} fill className="object-contain" />
            </div>
            <div className="flex items-center justify-between mt-2 gap-3">
              <div className="text-sm text-muted-foreground">{current.caption}</div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary" onClick={prev} aria-label="Previous image">Prev</Button>
                <Button size="sm" variant="secondary" onClick={next} aria-label="Next image">Next</Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

