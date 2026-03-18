import { useI18n } from '../i18n/useI18n'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  const { t } = useI18n()
  const c = t.about

  return (
    <div>
      <section className="border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.hero.kicker}</div>
            <h1 className="display mt-6">{c.hero.headline}</h1>
            <p className="subtext mt-6 max-w-[70ch]">{c.hero.subtext}</p>
          </Reveal>
        </div>
      </section>

      {/* 1) Company Overview */}
      <section className="border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="grid-12 items-start">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="kicker">{c.overview.kicker}</div>
              <h2 className="headline mt-6">{c.overview.headline}</h2>
              <div className="mt-6 hairline rounded-lg p-6">
                <div className="text-[16px] font-semibold tracking-tighter">{c.overview.companyNameEn}</div>
                <div className="mt-2 text-[14px] text-white/75">{c.overview.companyNameJa}</div>
                <div className="mt-5 text-[12px] font-mono tracking-[0.18em] uppercase text-accent/80">
                  {c.overview.positioning}
                </div>
              </div>
            </Reveal>

            <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Reveal>
                  <div className="hairline rounded-lg p-7 h-full">
                    <div className="kicker">{t.ui.factsKicker}</div>
                    <div className="mt-6 space-y-4">
                      {c.overview.facts.map((f) => (
                        <div key={f.label} className="grid grid-cols-12 gap-4">
                          <div className="col-span-12 sm:col-span-4 text-[12px] text-white/55">{f.label}</div>
                          <div className="col-span-12 sm:col-span-8 text-[14px] text-white/85">{f.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <div className="hairline rounded-lg p-7 h-full">
                    <div className="kicker">{c.overview.leadership.label}</div>
                    <div className="mt-6 space-y-4">
                      {c.overview.leadership.people.map((p) => (
                        <div key={p.role} className="grid grid-cols-12 gap-4">
                          <div className="col-span-12 sm:col-span-4 text-[12px] text-white/55">{p.role}</div>
                          <div className="col-span-12 sm:col-span-8 text-[14px] text-white/85">{p.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Mission / Philosophy */}
      <section className="border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="grid-12 items-start">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="kicker">{c.mission.kicker}</div>
              <h2 className="headline mt-6">{c.mission.headline}</h2>
            </Reveal>
            <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {c.mission.statements.map((s, idx) => (
                  <Reveal key={s} delay={0.05 * idx}>
                    <div className="hairline rounded-lg p-7 h-full">
                      <div className="kicker">
                        {t.ui.statementKicker} 0{idx + 1}
                      </div>
                      <div className="mt-5 text-[14px] leading-[1.7] text-white/85">{s}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.08}>
                <div className="mt-8 hairline rounded-lg p-7">
                  <div className="kicker">{t.ui.foundationKicker}</div>
                  <div className="mt-6 space-y-4">
                    {c.mission.paragraphs.map((p) => (
                      <p key={p} className="text-[14px] leading-[1.8] text-white/80">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3) CEO Message */}
      <section className="border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.ceoMessage.kicker}</div>
            <h2 className="headline mt-6">{c.ceoMessage.headline}</h2>
            <div className="mt-8 hairline rounded-lg p-8 md:p-10">
              <div className="kicker">{c.ceoMessage.title}</div>
              <div className="mt-6 space-y-5">
                {c.ceoMessage.paragraphs.map((p) => (
                  <p key={p} className="text-[14px] leading-[1.9] text-white/80">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10 text-[13px] text-white/85">{c.ceoMessage.signature}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4) What We Do */}
      <section>
        <div className="container-x py-16 md:py-24">
          <div className="grid-12 items-start">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="kicker">{c.whatWeDo.kicker}</div>
              <h2 className="headline mt-6">{c.whatWeDo.headline}</h2>
              <p className="subtext mt-6">{c.whatWeDo.subtext}</p>
            </Reveal>
            <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
              <div className="hairline rounded-lg p-8">
                <div className="kicker">ZOOOO</div>
                <div className="mt-6 space-y-3">
                  {c.whatWeDo.bullets.map((b) => (
                    <div key={b} className="flex gap-3 text-[14px] text-white/85">
                      <span className="text-accent/80">—</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
