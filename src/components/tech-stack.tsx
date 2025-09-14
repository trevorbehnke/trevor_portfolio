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
        const textOnBrand = isLight(t.brand) ? '#000000' : '#ffffff'
        const hasImage = Boolean(t.image)
        return (
          <li
            key={t.id}
            className="group relative rounded-lg bg-card shadow-card transition-transform hover:-translate-y-[2px] focus-within:-translate-y-[2px]"
            style={{}}
          >
            {/* optional hover glow removed to keep site-theme neutrals */}

            <div
              className="flex items-center gap-3 p-3 focus-ring"
              style={{
                // brand-colored focus ring via inline shadow
                boxShadow: '0 0 0 0px transparent',
              }}
            >
              <div
                className="grid size-12 place-items-center rounded-md border bg-[#0D9488]/10 overflow-hidden"
                style={{}}
                aria-hidden
              >
                {hasImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image!} alt="" width={30} height={30} className="block" />
                ) : t.icon ? (
                  <FontAwesomeIcon icon={t.icon} className="text-[30px]" style={{ color: t.brand }} />
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
                {/* <span className="mt-[2px] h-[3px] w-10 rounded-full bg-accent/60" /> */}
              </div>
            </div>

            {/* brand ring on focus/hover using outline */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-lg"
              // style={{ outline: `1px solid transparent` }}
            />
            {/* <style jsx>{`
              .group:focus-within {
                outline: 1px solid var(--ring);
                outline-offset: 2px;
              }
              .group:hover {
                outline: 1px solid var(--ring);
                outline-offset: 0px;
              }
            `}</style> */}
          </li>
        )
      })}
    </ul>
  )
}
