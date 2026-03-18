import { Reveal } from './Reveal'
import type { SystemSubpage } from '../content/site'

function SectionTitle({ kicker, headline }: { kicker: string; headline: string }) {
  return (
    <Reveal>
      <div className="kicker">{kicker}</div>
      <h2 className="headline mt-6">{headline}</h2>
    </Reveal>
  )
}

export function SystemSubpageTemplate({ page }: { page: SystemSubpage }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* System Overview */}
      <section>
        <div className="grid-12 items-start">
          <div className="col-span-12 lg:col-span-4">
            <SectionTitle kicker={page.overview.kicker} headline={page.overview.headline} />
          </div>
          <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
            <Reveal delay={0.06}>
              <div className="hairline rounded-lg p-8 md:p-9">
                <p className="text-[14px] leading-[1.9] text-white/80">{page.overview.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section>
        <div className="grid-12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionTitle kicker={page.capabilities.kicker} headline={page.capabilities.headline} />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {page.capabilities.blocks.map((b, idx) => (
            <Reveal key={b.title} delay={0.05 * idx}>
              <div className="hairline rounded-lg p-7 h-full">
                <div className="text-[18px] font-semibold tracking-tighter">{b.title}</div>
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
      </section>

      {/* System Layering */}
      <section>
        <div className="grid-12 items-start">
          <div className="col-span-12 lg:col-span-4">
            <SectionTitle kicker={page.layering.kicker} headline={page.layering.headline} />
          </div>
          <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
            <div className="hairline rounded-lg p-7">
              <div className="space-y-5">
                {page.layering.layers.map((l, idx) => (
                  <Reveal key={l.title} delay={0.04 * idx}>
                    <div className="grid grid-cols-12 gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                      <div className="col-span-12 md:col-span-4 text-[12px] font-mono tracking-[0.16em] uppercase text-white/60">
                        {l.title}
                      </div>
                      <div className="col-span-12 md:col-span-8 text-[14px] leading-[1.8] text-white/80">
                        {l.subtext}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section>
        <div className="grid-12 items-start">
          <div className="col-span-12 lg:col-span-4">
            <SectionTitle kicker={page.outcome.kicker} headline={page.outcome.headline} />
          </div>
          <div className="col-span-12 lg:col-span-8 mt-10 lg:mt-0">
            <Reveal delay={0.06}>
              <div className="rounded-lg p-8 md:p-9 border border-white/20 bg-white/[0.03]">
                <p className="text-[14px] leading-[1.9] text-white/85">{page.outcome.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Optional: Interaction Layer */}
      {page.interactionLayer ? (
        <section>
          <Reveal>
            <div className="hairline rounded-lg p-8 md:p-9">
              <div className="kicker">{page.interactionLayer.kicker}</div>
              <div className="mt-4 text-[18px] font-semibold tracking-tighter">{page.interactionLayer.headline}</div>
              <div className="mt-3 text-[13px] leading-[1.6] text-white/70">{page.interactionLayer.subtext}</div>

              <ul className="mt-6 space-y-2 text-[13px] text-white/80">
                {page.interactionLayer.bullets.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-white/35">—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      ) : null}
    </div>
  )
}
