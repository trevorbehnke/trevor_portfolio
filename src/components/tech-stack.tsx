'use client'

import { DEFAULT_TECHS, type Tech } from '@/data/techs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

type Props = {
  techs?: Tech[]
}

const CATEGORIES = {
  Frontend: ['javascript', 'typescript', 'next', 'react', 'html', 'css', 'tailwind', 'figma'],
  Backend: ['python', 'node', 'express', 'sql', 'postgresql', 'supabase', 'neon', 'firebase', 'stripe'],
  Tools: ['git', 'github', 'vscode', 'vercel', 'openai', 'gcp', 'jest'],
}

export function TechStack({ techs = DEFAULT_TECHS }: Props) {
  // Helper to get techs for a category
  const getTechs = (category: keyof typeof CATEGORIES) => {
    return techs.filter((t) => CATEGORIES[category].includes(t.id))
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="Frontend" className="w-full space-y-6">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-[400px] grid-cols-3 h-10 p-1 bg-muted/50 rounded-full">
            {Object.keys(CATEGORIES).map((cat) => (
              <TabsTrigger key={cat} value={cat} className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.keys(CATEGORIES).map((cat) => (
          <TabsContent key={cat} value={cat} className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getTechs(cat as keyof typeof CATEGORIES).map((t) => (
                <li
                  key={t.id}
                  className="group relative flex items-center gap-3 rounded-xl border bg-card p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted/30 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 transition-colors">
                    {t.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.image} alt="" className="size-6 object-contain" />
                    ) : t.icon ? (
                      <FontAwesomeIcon icon={t.icon} className="size-6 text-muted-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{t.textIcon}</span>
                    )}
                  </div>
                  <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground">{t.label}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
