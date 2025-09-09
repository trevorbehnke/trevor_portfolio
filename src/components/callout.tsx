import { ReactNode } from "react"

export function Callout({ title = "My contribution", children }: { title?: string; children?: ReactNode }) {
  return (
    <aside className="border-l-4 border-brand-600 bg-brand-50/60 dark:bg-brand-200/15 p-4 rounded-md">
      <h4 className="font-semibold mb-1">{title}</h4>
      <div className="text-sm text-muted-foreground">{children}</div>
    </aside>
  )
}

