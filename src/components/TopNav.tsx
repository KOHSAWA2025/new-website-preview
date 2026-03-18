import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

function LangButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'px-2 py-1 text-[12px] font-mono tracking-[0.18em] uppercase transition-colors ' +
        (active
          ? 'text-[color:var(--text)]'
          : 'text-[color:var(--text-muted)] hover:text-[color:var(--text)]')
      }
      aria-pressed={active}
    >
      {label}
    </button>
  )
}

export function TopNav() {
  const { t, locale, setLocale } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--divider)] bg-[color:var(--bg)]/85 backdrop-blur">
      <div className="container-x h-16 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <NavLink to="/" className="flex items-baseline gap-2">
            <span className="font-semibold tracking-tighter">{t.ui.brandName}</span>
            <span className="kicker hidden sm:inline">{t.ui.brandTagline}</span>
          </NavLink>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {t.nav.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                'text-[13px] tracking-[0.02em] transition-colors ' +
                (isActive
                  ? 'text-[color:var(--text)] border-b border-[color:var(--accent)] pb-1'
                  : 'text-[color:var(--text-2)] hover:text-[color:var(--text)]')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-[color:var(--divider)] rounded-md px-1 py-1 bg-[color:var(--surface)]">
            <LangButton
              label={t.ui.localeSwitch.en}
              active={locale === 'en'}
              onClick={() => setLocale('en')}
            />
            <div className="h-4 w-px bg-[color:var(--divider)]" />
            <LangButton
              label={t.ui.localeSwitch.ja}
              active={locale === 'ja'}
              onClick={() => setLocale('ja')}
            />
          </div>

          <NavLink to="/platform" className="hidden sm:inline-flex btn-primary">
            <span>{t.ui.productPlatformName}</span>
            <span className="opacity-70">→</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
