import { Reveal } from '../components/Reveal'

export function BasicPage({
  kicker,
  headline,
  subtext,
  children,
}: {
  kicker: string
  headline: string
  subtext: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <section className="border-b border-[color:var(--divider)]">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{kicker}</div>
            <h1 className="display mt-6">{headline}</h1>
            <p className="subtext mt-6 max-w-[64ch]">{subtext}</p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-x py-16 md:py-24">{children}</div>
      </section>
    </div>
  )
}
