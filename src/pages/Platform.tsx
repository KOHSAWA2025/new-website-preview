import { useI18n } from '../i18n/useI18n'
import { Reveal } from '../components/Reveal'

export function PlatformPage() {
  const { t } = useI18n()
  const c = t.platform

  return (
    <div>
      {/* Intro */}
      <section className="border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.hero.kicker}</div>
            <h1 className="display mt-6">{c.hero.headline}</h1>
            <p className="subtext mt-6 max-w-[70ch]">{c.hero.subtext}</p>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section>
        <div className="container-x py-16 md:py-24">
          <div className="grid-12 items-start">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="kicker">{c.philosophy.kicker}</div>
              <div className="mt-5 text-[18px] leading-[1.4] tracking-tighter text-white/90">
                {c.philosophy.headline}
              </div>
              <div className="mt-3 text-[14px] leading-[1.7] text-white/65">{c.philosophy.subtext}</div>
            </Reveal>

            <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {c.blocks.map((b, idx) => (
                  <Reveal key={b.title} delay={0.06 * idx}>
                    <div className="hairline rounded-lg p-7 h-full">
                      <div className="kicker">{t.ui.moduleKicker}</div>
                      <div className="mt-4 text-[18px] font-semibold tracking-tighter">{b.title}</div>
                      <div className="mt-3 text-[13px] leading-[1.6] text-white/70">{b.subtext}</div>
                      <ul className="mt-6 space-y-2 text-[13px] text-white/80">
                        {b.bullets.map((x) => (
                          <li key={x} className="flex gap-3">
                            <span className="text-white/35">—</span>
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
