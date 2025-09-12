"use client"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faFlaskVial } from "@fortawesome/free-solid-svg-icons"

type Tech = {
  id: string
  label: string
  level: "Advanced" | "Intermediate" | "Beginner"
  brand: string
  icon?: IconDefinition
  textIcon?: string
}

const DEFAULT_TECHS: Tech[] = [
  { id: "javascript", label: "JavaScript", level: "Advanced", brand: "#F7DF1E", icon: faJs },
  { id: "typescript", label: "TypeScript", level: "Advanced", brand: "#3178C6", textIcon: "TS" },
  { id: "python", label: "Python", level: "Advanced", brand: "#3776AB", textIcon: "Py" },
  { id: "sql", label: "SQL", level: "Advanced", brand: "#0064A5", icon: faDatabase },
  { id: "react", label: "React", level: "Advanced", brand: "#61DAFB", icon: faReact },
  { id: "next", label: "Next.js", level: "Advanced", brand: "#000000", textIcon: "NEXT" },
  { id: "node", label: "Node.js", level: "Advanced", brand: "#339933", icon: faNodeJs },
  { id: "express", label: "Express", level: "Advanced", brand: "#000000", textIcon: "Ex" },
  { id: "postgresql", label: "PostgreSQL", level: "Advanced", brand: "#336791", textIcon: "PG" },
  { id: "html", label: "HTML5", level: "Advanced", brand: "#E34F26", icon: faHtml5 },
  { id: "css", label: "CSS3", level: "Advanced", brand: "#1572B6", icon: faCss3Alt },
  { id: "tailwind", label: "Tailwind", level: "Advanced", brand: "#38BDF8", textIcon: "TW" },
  { id: "figma", label: "Figma", level: "Advanced", brand: "#F24E1E", textIcon: "Fg" },
  { id: "git", label: "Git", level: "Advanced", brand: "#F05032", icon: faGitAlt },
  { id: "github", label: "GitHub", level: "Advanced", brand: "#181717", textIcon: "GH" },
  { id: "vscode", label: "VS Code", level: "Advanced", brand: "#007ACC", textIcon: "VS" },
  { id: "jest", label: "Jest", level: "Advanced", brand: "#C21325", icon: faFlaskVial },
  { id: "postman", label: "Postman", level: "Advanced", brand: "#FF6C37", textIcon: "PM" },
  { id: "gcp", label: "Google Cloud Platform", level: "Advanced", brand: "#4285F4", textIcon: "GCP" },
  { id: "vercel", label: "Vercel", level: "Advanced", brand: "#000000", textIcon: "V" },
  { id: "heroku", label: "Heroku", level: "Advanced", brand: "#430098", textIcon: "Hk" },
  { id: "firebase", label: "Firebase", level: "Advanced", brand: "#FFCA28", textIcon: "FB" },
  { id: "stripe", label: "Stripe", level: "Advanced", brand: "#635BFF", textIcon: "S" },
  { id: "openai", label: "OpenAI", level: "Advanced", brand: "#10A37F", textIcon: "AI" },
]

export function TechStackShowcase({ techs = DEFAULT_TECHS }: { techs?: Tech[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const tipIds = useRef<string[]>(techs.map((t) => `tip-${t.id}`))

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

  // Helper: position tooltip to avoid viewport clipping
  function setTooltipPos(idx: number) {
    const root = sectionRef.current
    if (!root) return
    const el = root.querySelector<HTMLElement>(`[data-idx="${idx}"]`)
    const tip = root.querySelector<HTMLElement>(`#${tipIds.current[idx]}`)
    if (!el || !tip) return
    // Reset
    tip.dataset.pos = "center"
    const rect = tip.getBoundingClientRect()
    if (rect.left < 8) tip.dataset.pos = "left"
    if (rect.right > window.innerWidth - 8) tip.dataset.pos = "right"
  }

  return (
    <section
      ref={sectionRef}
      className="space-y-4"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="afif-hex-main">
          <ul className="afif-hex-container" role="list">
          {techs.map((t, i) => (
            <li key={t.id} className="afif-hex-item">
              <button
                type="button"
                data-tech
                data-idx={i}
                aria-label={`${t.label} — ${t.level}`}
                aria-describedby={tipIds.current[i]}
                aria-expanded={activeIdx === i}
                onMouseEnter={() => { setActiveIdx(i); setTooltipPos(i) }}
                onMouseLeave={() => setActiveIdx((curr) => (curr === i ? null : curr))}
                onFocus={() => { setActiveIdx(i); setTooltipPos(i) }}
                onBlur={() => setActiveIdx((curr) => (curr === i ? null : curr))}
                onClick={() => { const next = activeIdx === i ? null : i; setActiveIdx(next); if (next != null) setTooltipPos(i) }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveIdx(null)
                }}
                className="tech-hex group cursor-pointer outline-none focus-ring"
                style={{
                  ["--hex-accent"]: t.brand,
                  ["--stagger"]: `${i * 60}ms`,
                  ["--float-delay"]: `${(i % 5) * 300}ms`,
                } as React.CSSProperties & {
                  "--hex-accent"?: string
                  "--stagger"?: string
                  "--float-delay"?: string
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
                  id={tipIds.current[i]}
                  data-visible={activeIdx === i}
                >
                  {t.label} — {t.level}
                </span>
              </button>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
