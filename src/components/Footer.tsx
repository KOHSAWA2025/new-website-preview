import { useI18n } from '../i18n/useI18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-[color:var(--divider)]">
      <div className="container-x py-10">
        <div className="grid-12 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="kicker">{t.ui.brandName}</div>
            <div className="mt-3 text-[color:var(--text-2)] text-[13px] leading-[1.6]">{t.footer.note}</div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-8 md:mt-0">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-end text-[13px] text-[color:var(--text-muted)]">
              <span>{t.ui.footer.locations}</span>
              <span>{t.ui.footer.decisionSystems}</span>
              <span>Zoooo Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
