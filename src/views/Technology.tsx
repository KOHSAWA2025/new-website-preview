import { useI18n } from '../i18n/useI18n'
import { BasicPage } from './BasicPage'
import { Reveal } from '../components/Reveal'
import Link from 'next/link'

export function TechnologyPage() {
  const { t, locale } = useI18n()
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

        {/* Added module: Virtual Cell Technology */}
        <Reveal delay={0.05 * c.items.length}>
          <Link
            href="/technology/virtual-cell"
            aria-label="Virtual Cell Technology"
            className="group block"
          >
            <div className="hairline rounded-lg p-7 h-full flex flex-col justify-between transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-[2px] group-hover:border-white/20 group-active:translate-y-0">
              <div>
                <div className="text-[18px] font-semibold tracking-tighter">
                  {locale === 'ja' ? 'バーチャル細胞技術' : 'Virtual Cell Technology'}
                </div>
                <div className="mt-3 text-[13px] leading-[1.6] text-white/70">
                  {locale === 'ja'
                    ? '内在的生物ダイナミクスに基づく機構論的細胞シミュレーション'
                    : 'Mechanistic simulation of cellular systems driven by intrinsic biological dynamics'}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[12px] font-mono tracking-[0.14em] uppercase text-[color:var(--accent)] whitespace-nowrap overflow-hidden text-ellipsis">
                  {t.ui.links.viewDetails}{'\u00A0'}→
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </BasicPage>
  )
}
