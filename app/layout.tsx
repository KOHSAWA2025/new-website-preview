import type { Metadata } from 'next'
import type { Locale } from '../src/content/site'
import '../src/index.css'
import { I18nProvider } from '../src/i18n/I18nProvider'
import { PageShell } from '../src/components/PageShell'
import { cookies } from 'next/headers'

async function readCookieLocale(): Promise<Locale | undefined> {
  const store = await cookies()
  const v = store.get('oslab.locale')?.value
  if (v === 'en' || v === 'ja') return v
  return undefined
}

export const metadata: Metadata = {
  title: "Os' Lab — Decision Intelligence Platform",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Server-render with a stable locale to avoid hydration mismatch.
  // Client will then sync to localStorage in I18nProvider after hydration.
  const initialLocale: Locale = (await readCookieLocale()) ?? 'en'

  return (
    <html lang={initialLocale === 'ja' ? 'ja' : 'en'}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider initialLocale={initialLocale}>
          <PageShell>{children}</PageShell>
        </I18nProvider>
      </body>
    </html>
  )
}
