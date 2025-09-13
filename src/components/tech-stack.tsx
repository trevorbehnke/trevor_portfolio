'use client'
import { DEFAULT_TECHS, type Tech } from '@/data/techs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function hexToRgb(hex: string) {
  const cleaned = hex.replace('#', '')
  const bigint = parseInt(cleaned, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

function rgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function isLight(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  // perceived luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6
}

type Props = {
  techs?: Tech[]
}

export function TechStack({ techs = DEFAULT_TECHS }: Props) {
  return (
    <ul className="grid gap-3 sm:gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
      {techs.map((t) => {
        const bgSubtle = rgba(t.brand, 0.08)
        const ringSoft = rgba(t.brand, 0.35)
        const glow = rgba(t.brand, 0.25)
        const textOnBrand = isLight(t.brand) ? '#000000' : '#ffffff'
        const hasImage = Boolean(t.image)
        return (
          <li
            key={t.id}
            className="group relative rounded-lg border bg-card shadow-card transition-transform hover:-translate-y-[2px] focus-within:-translate-y-[2px]"
            style={{
              backgroundImage: `linear-gradient(180deg, transparent, ${bgSubtle})`,
            }}
          >
            {/* glow on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[12px] opacity-0 blur-[14px] transition-opacity group-hover:opacity-100"
              style={{ background: `radial-gradient(60% 70% at 10% 20%, ${glow}, transparent 60%)` }}
            />

            <div
              className="flex items-center gap-3 p-3 focus-ring"
              style={{
                // brand-colored focus ring via inline shadow
                boxShadow: '0 0 0 0px transparent',
              }}
            >
              <div
                className="grid size-9 place-items-center rounded-md border overflow-hidden"
                style={{ backgroundColor: rgba(t.brand, 0.12), borderColor: rgba(t.brand, 0.2) }}
                aria-hidden
              >
                {hasImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image!} alt="" width={18} height={18} className="block" />
                ) : t.icon ? (
                  <FontAwesomeIcon icon={t.icon} className="text-[18px]" style={{ color: t.brand }} />
                ) : (
                  <span
                    className="text-[11px] font-semibold leading-none px-1 rounded"
                    style={{ backgroundColor: t.brand, color: textOnBrand }}
                  >
                    {t.textIcon}
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">{t.label}</span>
                <span className="mt-[2px] h-[3px] w-10 rounded-full" style={{ backgroundColor: rgba(t.brand, 0.5) }} />
              </div>
              <span
                className="ml-auto size-2.5 shrink-0 rounded-full"
                aria-hidden
                style={{ backgroundColor: t.brand }}
              />
            </div>

            {/* brand ring on focus/hover using outline */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{ outline: `2px solid transparent` }}
            />
            <style jsx>{`
              .group:focus-within {
                outline: 2px solid ${ringSoft};
                outline-offset: 2px;
              }
              .group:hover {
                outline: 2px solid ${ringSoft};
                outline-offset: 0px;
              }
            `}</style>
          </li>
        )
      })}
    </ul>
  )
}
