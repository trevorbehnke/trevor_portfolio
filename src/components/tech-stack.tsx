"use client"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faFlaskVial, faCode } from "@fortawesome/free-solid-svg-icons"

type Tech = {
  id: string
  label: string
  level: "Advanced" | "Intermediate" | "Beginner"
  brand: string
  icon?: any
  textIcon?: string
}

const DEFAULT_TECHS: Tech[] = [
  { id: "react", label: "React", level: "Advanced", brand: "#61DAFB", icon: faReact },
  { id: "typescript", label: "TypeScript", level: "Advanced", brand: "#3178C6", textIcon: "TS" },
  { id: "node", label: "Node.js", level: "Advanced", brand: "#339933", icon: faNodeJs },
  { id: "javascript", label: "JavaScript", level: "Advanced", brand: "#F7DF1E", icon: faJs },
  { id: "jest", label: "Jest", level: "Advanced", brand: "#C21325", icon: faFlaskVial },
  { id: "sql", label: "SQL", level: "Intermediate", brand: "#0064A5", icon: faDatabase },
  { id: "css", label: "CSS3", level: "Advanced", brand: "#1572B6", icon: faCss3Alt },
  { id: "html", label: "HTML5", level: "Advanced", brand: "#E34F26", icon: faHtml5 },
  { id: "git", label: "Git", level: "Advanced", brand: "#F05032", icon: faGitAlt },
  { id: "testing", label: "Testing", level: "Advanced", brand: "#8E8E93", icon: faFlaskVial },
  { id: "next", label: "Next.js", level: "Advanced", brand: "#000000", textIcon: "NEXT" },
  { id: "tailwind", label: "Tailwind", level: "Advanced", brand: "#38BDF8", textIcon: "TW" },
]

export function TechStackShowcase({ techs = DEFAULT_TECHS }: { techs?: Tech[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  // Reveal on scroll with stagger
  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-tech]")!)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true")
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    )
    cards.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Dismiss tooltip on outside tap
  useEffect(() => {
    if (activeIdx == null) return
    const onDocClick = (e: MouseEvent | TouchEvent) => {
      const root = sectionRef.current
      if (!root) return
      if (!(e.target instanceof Node)) return
      if (!root.contains(e.target)) setActiveIdx(null)
    }
    document.addEventListener("pointerdown", onDocClick)
    return () => document.removeEventListener("pointerdown", onDocClick)
  }, [activeIdx])

  return (
    <section
      ref={sectionRef}
      className="space-y-4"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <h2 id="tech-stack-heading" className="text-xl font-semibold">Tech I work with</h2>
        <p className="text-sm text-muted-foreground">A snapshot of tools I use regularly across the stack.</p>
      </div>
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <ul
          className="hex-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          role="list"
        >
          {techs.map((t, i) => (
            <li key={t.id} className="flex justify-center">
              <button
                type="button"
                data-tech
                data-idx={i}
                aria-label={`${t.label} — ${t.level}`}
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveIdx(null)
                }}
                className="tech-hex group relative grid place-items-center w-28 h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 cursor-pointer outline-none focus-ring"
                style={{
                  // @ts-ignore custom properties
                  "--hex-accent": t.brand,
                  "--stagger": `${i * 60}ms`,
                }}
                data-active={activeIdx === i}
              >
                <div className="hex-inner grid place-items-center size-full">
                  {t.icon ? (
                    <FontAwesomeIcon
                      icon={t.icon}
                      className="icon pointer-events-none text-[28px] md:text-[32px] lg:text-[36px]"
                    />
                  ) : (
                    <span className="icon pointer-events-none text-[18px] md:text-[20px] lg:text-[22px] font-semibold tracking-wide">
                      {t.textIcon}
                    </span>
                  )}
                </div>
                <span
                  role="tooltip"
                  className="tooltip"
                  data-visible={activeIdx === i}
                >
                  {t.label} — {t.level}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

