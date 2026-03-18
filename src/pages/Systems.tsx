import { useI18n } from '../i18n/useI18n'
import { BasicPage } from './BasicPage'
import { Reveal } from '../components/Reveal'
import { Link } from 'react-router-dom'

function hrefForSystemTitle(title: string) {
  // Match by visible card title in either locale.
  if (title === 'Public Systems' || title === '公共システム') return '/systems/public'
  if (title === 'Biological Systems' || title === '生体システム') return '/systems/biological'
  if (title === 'Security Systems' || title === 'セキュリティシステム') return '/systems/security'
  if (title === 'Financial Systems' || title === '金融システム') return '/systems/financial'
  if (title === 'Supply Systems' || title === '供給システム') return '/systems/supply'
  return undefined
}

export function SystemsPage() {
  const { t } = useI18n()
  const c = t.systems

  return (
    <BasicPage kicker={c.hero.kicker} headline={c.hero.headline} subtext={c.hero.subtext}>
      <div className="systems-grid">
        {c.items.map((it, idx) => (
          <Reveal key={it.title} delay={0.05 * idx}>
            <Link
              to={hrefForSystemTitle(it.title) ?? '/systems'}
              aria-label={`${it.title} — ${t.ui.links.viewCapabilities}`}
              className="group block"
            >
              <div className="hairline rounded-lg p-7 h-full flex flex-col transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-[2px] group-hover:border-white/20 group-active:translate-y-0">
                <div>
                  <div className="text-[18px] font-semibold tracking-tighter min-h-[48px] flex items-end">{it.title}</div>
                  <div className="mt-3 text-[13px] leading-[1.6] text-white/70 min-h-[96px] line-clamp-4">{it.subtext}</div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {it.signals.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 px-2.5 py-1 text-[12px] text-white/70 group-hover:border-white/15 group-hover:text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                  <span
                    className="text-[12px] font-mono tracking-[0.14em] uppercase text-white/55 group-hover:text-white/80 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {t.ui.links.viewCapabilities}{'\u00A0'}→
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </BasicPage>
  )
}
