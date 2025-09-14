"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

type LightboxImageProps = {
  src: string
  alt: string
  caption?: string
  /** Aspect ratio class for both thumb and modal (e.g., `aspect-[16/9]`) */
  aspectClassName?: string
  /** Classes for the thumbnail container (borders, rounding, shadows) */
  thumbContainerClassName?: string
}

export function LightboxImage({
  src,
  alt,
  caption,
  aspectClassName = "aspect-[16/9]",
  thumbContainerClassName = "rounded-md overflow-hidden border",
}: LightboxImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`relative ${aspectClassName} ${thumbContainerClassName} cursor-zoom-in`}
          aria-label={alt}
          role="button"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-0 shadow-none p-0 sm:max-w-[80rem] max-w-[95vw]" showCloseButton>
        <DialogTitle className="sr-only">{caption || alt}</DialogTitle>
        <div className={`relative ${aspectClassName} w-full`}>
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
        {caption && (
          <div className="text-center text-sm text-muted-foreground mt-2">
            {caption}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
