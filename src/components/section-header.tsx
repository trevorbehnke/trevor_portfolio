import { cn } from "@/lib/utils"

export function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      ) : null}
    </div>
  )
}
