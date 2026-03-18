import { BasicPage } from './BasicPage'
import { useI18n } from '../i18n/useI18n'
import { SystemSubpageTemplate } from '../components/SystemSubpageTemplate'

export function SupplySystemsPage() {
  const { t } = useI18n()
  const c = t.systemsSubpages.supply

  return (
    <BasicPage kicker={c.hero.kicker} headline={c.hero.headline} subtext={c.hero.subtext}>
      <SystemSubpageTemplate page={c} />
    </BasicPage>
  )
}
