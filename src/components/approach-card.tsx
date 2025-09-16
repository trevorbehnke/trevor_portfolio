import { Card } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type ApproachCardProps = {
  title: string
  blurb?: string
  points?: string[]
  icon: IconDefinition
  className?: string
}

export function Approach({ title, blurb, points = [], icon, className }: ApproachCardProps) {
  return (
    <Card
      className={
        [
          "relative rounded-lg border p-4 h-full transition-transform",
          "before:absolute before:inset-x-0 before:top-0 before:h-0.5",
          "before:bg-gradient-to-r before:from-brand-600/40 before:to-brand-400/40",
          "hover:-translate-y-0.5",
          "shadow-none shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow",
          className,
        ].join(" ")
      }
    >
      <div className="inline-flex items-center justify-center rounded-md size-9 bg-brand-50 text-brand-700 ring-1 ring-black/5 shadow-sm dark:bg-brand-400/15 dark:text-brand-300">
        <FontAwesomeIcon icon={icon} className="text-[18px]" />
      </div>
      <h3 className="mt-3 text-base font-semibold">
        <span className="gradient-underline">{title}</span>
      </h3>
      {blurb ? (
        <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      ) : null}
      {points.length ? (
        <ul className="mt-3 text-sm list-disc pl-5 space-y-1.5">
          {points.map((p) => (
            <li key={p} className="text-foreground/90 dark:text-foreground/95">{p}</li>
          ))}
        </ul>
      ) : null}
    </Card>
  )
}
