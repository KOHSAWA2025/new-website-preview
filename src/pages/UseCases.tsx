import { useI18n } from '../i18n/useI18n'
import { BasicPage } from './BasicPage'
import { Reveal } from '../components/Reveal'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 border-t border-white/10">
      <div className="col-span-12 md:col-span-3">
        <div className="kicker">{label}</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="text-[14px] leading-[1.7] text-white/80">{value}</div>
      </div>
    </div>
  )
}

export function UseCasesPage() {
  const { t } = useI18n()
  const c = t.useCases

  return (
    <BasicPage kicker={c.hero.kicker} headline={c.hero.headline} subtext={c.hero.subtext}>
      <div className="space-y-8">
        {c.cases.map((uc, idx) => (
          <Reveal key={uc.title} delay={0.05 * idx}>
            <div className="hairline rounded-lg p-7">
              <div className="kicker">
                {t.ui.caseKicker} 0{idx + 1}
              </div>
              <div className="mt-4 text-[20px] font-semibold tracking-tighter">{uc.title}</div>
              <div className="mt-6">
                <Row label={t.ui.useCase.problem} value={uc.problem} />
                <Row label={t.ui.useCase.approach} value={uc.approach} />
                <Row label={t.ui.useCase.outcome} value={uc.outcome} />
              </div>

              <div className="mt-5 text-[12px] leading-[1.6] text-white/55">
                {idx === 0 ? t.ui.useCaseNotes.partnerConsent : t.ui.useCaseNotes.anonymized}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </BasicPage>
  )
}
