"use client"
import { useEffect } from "react"

export function SiteSpotlight() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReduced = typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let fadeTimer: number | undefined
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--site-spot-x", `${e.clientX}px`)
        root.style.setProperty("--site-spot-y", `${e.clientY}px`)
        root.setAttribute("data-spotlight", "on")
        if (fadeTimer) window.clearTimeout(fadeTimer)
        fadeTimer = window.setTimeout(() => {
          root.removeAttribute("data-spotlight")
        }, 800)
      })
    }
    window.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (fadeTimer) window.clearTimeout(fadeTimer)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div aria-hidden className="site-spotlight" />
}
