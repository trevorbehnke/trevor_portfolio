"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { LightboxGallery } from "@/components/lightbox-gallery"

type MediaImage = { src: string; caption: string }

export function ProjectMedia({
  title,
  cover,
  coverCaption,
  images,
}: {
  title: string
  cover: string
  coverCaption: string
  images: MediaImage[]
}) {
  const items = useMemo(
    () => [
      { src: cover, caption: coverCaption, alt: `${title} cover` },
      ...images.map((img, i) => ({ src: img.src, caption: img.caption, alt: `${title} screenshot ${i + 1}` })),
    ],
    [cover, coverCaption, images, title]
  )

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* Cover */}
      <section>
        <figure className="space-y-1">
          <div
            className="relative aspect-[16/9] rounded-lg overflow-hidden border shadow-card cursor-zoom-in"
            onClick={() => setOpenIndex(0)}
            role="button"
            aria-label={`${title} cover`}
          >
            <Image src={cover} alt={`${title} cover`} fill className="object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground">{coverCaption}</figcaption>
        </figure>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <figure key={img.src} className="space-y-1">
              <div
                className="relative aspect-[16/9] rounded-md overflow-hidden border cursor-zoom-in"
                onClick={() => setOpenIndex(idx + 1)}
                role="button"
                aria-label={`${title} screenshot ${idx + 1}`}
              >
                <Image src={img.src} alt={`${title} screenshot ${idx + 1}`} fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Unified lightbox for all images */}
      <LightboxGallery
        items={items}
        openIndex={openIndex}
        onOpenIndexChange={setOpenIndex}
        renderGrid={false}
        aspectClassName="aspect-[16/9]"
      />
    </>
  )
}

