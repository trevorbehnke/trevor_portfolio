import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { cn } from "@/lib/utils"

type ApproachCardProps = {
  title: string
  blurb?: string
  points?: string[]
  icon: IconDefinition
  className?: string
}

export function Approach({ title, blurb, points = [], icon, className }: ApproachCardProps) {
  return (
    <Card className={cn(
      "h-full border-border/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-200/50 dark:hover:border-brand-800/50",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="mb-4 inline-flex items-center justify-center rounded-lg size-10 bg-brand-50 text-brand-600 ring-1 ring-brand-100 dark:bg-brand-900/20 dark:text-brand-400 dark:ring-brand-800">
          <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </CardHeader>

      <CardContent>
        {blurb && (
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {blurb}
          </p>
        )}

        {points.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand-500 shrink-0" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
