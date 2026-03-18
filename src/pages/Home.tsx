import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'

function Section({ children }: { children: React.ReactNode }) {
  return <section className="border-b border-white/10">{children}</section>
}

function SectionInner({ children }: { children: React.ReactNode }) {
  return <div className="container-x py-16 md:py-24">{children}</div>
}

export function HomePage() {
  const { t } = useI18n()
  const c = t.home

  return (
    <div>
      {/* HERO */}
      <Section>
        <SectionInner>
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <div className="kicker">{c.hero.kicker}</div>
                <h1 className="display mt-6">{c.hero.headline}</h1>
                <div className="headline mt-4 text-white/85">{c.hero.subtext}</div>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {c.hero.statements.map((s, idx) => (
                  <Reveal key={s} delay={0.06 * idx}>
                    <div className="hairline rounded-lg p-5">
                      <div className="kicker">0{idx + 1}</div>
                      <div className="mt-4 text-[14px] leading-[1.55] text-white/80">{s}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
              <Reveal delay={0.12}>
                <div className="hairline rounded-lg p-6">
                  <div className="kicker">{t.ui.keyMessageKicker}</div>
                  <div className="mt-5 text-[16px] leading-[1.45] text-white/85">
                    {c.hero.headline}
                  </div>
                  <div className="mt-3 text-[16px] leading-[1.45] text-white/85">
                    {c.hero.subtext}
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <Link
                      to="/platform"
                      className="btn-primary"
                    >
                      {c.finalCta.primary}
                      <span className="text-white/60">→</span>
                    </Link>
                    <Link
                      to="/use-cases"
                      className="btn-secondary"
                    >
                      {c.finalCta.secondary}
                      <span className="text-white/50">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionInner>
      </Section>

      {/* PLATFORM INTRO */}
      <Section>
        <SectionInner>
          <div className="grid-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <div className="kicker">{c.platformIntro.kicker}</div>
                <h2 className="headline mt-6">{c.platformIntro.headline}</h2>
                <p className="subtext mt-6">{c.platformIntro.subtext}</p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {c.platformIntro.pillars.map((p, idx) => (
                  <Reveal key={p.title} delay={0.06 * idx}>
                    <div className="hairline rounded-lg p-6 h-full">
                      <div className="kicker">{t.ui.moduleKicker}</div>
                      <div className="mt-4 text-[16px] font-semibold tracking-tighter">{p.title}</div>
                      <div className="mt-3 text-[13px] leading-[1.6] text-white/70">{p.subtext}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </SectionInner>
      </Section>

      {/* MECHANISM VS PREDICTION */}
      <Section>
        <SectionInner>
          <Reveal>
            <div className="kicker">{c.mechanismVsPrediction.kicker}</div>
            <h2 className="headline mt-6">{c.mechanismVsPrediction.headline}</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="hairline rounded-lg p-8">
                <div className="kicker">{c.mechanismVsPrediction.left.title}</div>
                <ul className="mt-6 space-y-3 text-white/80 text-[15px]">
                  {c.mechanismVsPrediction.left.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-white/35">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-lg p-8 border border-white/20 bg-white/[0.03]">
                <div className="kicker">{c.mechanismVsPrediction.right.title}</div>
                <ul className="mt-6 space-y-3 text-white text-[15px]">
                  {c.mechanismVsPrediction.right.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-white/35">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </SectionInner>
      </Section>

      {/* SYSTEMS STRIP */}
      <Section>
        <SectionInner>
          <Reveal>
            <div className="kicker">{c.systemsStrip.kicker}</div>
            <h2 className="headline mt-6">{c.systemsStrip.headline}</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {c.systemsStrip.items.map((it, idx) => (
              <Reveal key={it.title} delay={0.05 * idx}>
                <div className="hairline rounded-lg p-6 h-full">
                  <div className="text-[16px] font-semibold tracking-tighter">{it.title}</div>
                  <div className="mt-3 text-[13px] leading-[1.6] text-white/70">{it.subtext}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionInner>
      </Section>

      {/* FINAL CTA */}
      <section>
        <div className="container-x py-16 md:py-24">
          <div className="grid-12 items-end">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <h2 className="headline">{c.finalCta.headline}</h2>
                <p className="subtext mt-6">{c.finalCta.subtext}</p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/platform"
                    className="btn-primary"
                  >
                    {c.finalCta.primary}
                    <span className="text-white/60">→</span>
                  </Link>
                  <Link
                    to="/use-cases"
                    className="btn-secondary"
                  >
                    {c.finalCta.secondary}
                    <span className="text-white/50">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
