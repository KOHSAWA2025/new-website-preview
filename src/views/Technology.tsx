import { useI18n } from '../i18n/useI18n'
import { BasicPage } from './BasicPage'
import { Reveal } from '../components/Reveal'

export function TechnologyPage() {
  const { t } = useI18n()
  const c = t.technology

  return (
    <BasicPage kicker={c.hero.kicker} headline={c.hero.headline} subtext={c.hero.subtext}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {c.items.map((it, idx) => (
          <Reveal key={it.title} delay={0.05 * idx}>
            <div className="hairline rounded-lg p-7 h-full">
              <div className="text-[18px] font-semibold tracking-tighter">{it.title}</div>
              <div className="mt-3 text-[13px] leading-[1.6] text-white/70">{it.subtext}</div>
              <ul className="mt-6 space-y-2 text-[13px] text-white/80">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-white/35">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </BasicPage>
  )
}
