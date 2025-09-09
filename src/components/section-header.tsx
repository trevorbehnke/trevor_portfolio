export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      ) : null}
    </div>
  )
}

