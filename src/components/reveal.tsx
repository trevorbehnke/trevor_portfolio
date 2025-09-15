"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  delayMs?: number
  /** Direction to slide from. Only 'left' implemented for now. */
  from?: "left" | "right" | "up" | "down"
  /** Optional className to apply to the wrapper */
  className?: string
}

export function Reveal({ children, delayMs = 0, from = "left", className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // Stagger via delay
            const t = window.setTimeout(() => setVisible(true), delayMs)
            io.disconnect()
            return () => window.clearTimeout(t)
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [delayMs])

  const translateClass = !visible
    ? from === "left"
      ? "-translate-x-6"
      : from === "right"
        ? "translate-x-6"
        : from === "up"
          ? "-translate-y-6"
          : "translate-y-6"
    : "translate-x-0 translate-y-0"

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-500 ease-out will-change-transform",
        visible ? "opacity-100" : "opacity-0",
        translateClass,
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  )
}

