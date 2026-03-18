import type { Metadata } from 'next'
import '../src/index.css'
import { I18nProvider } from '../src/i18n/I18nProvider'
import { PageShell } from '../src/components/PageShell'

export const metadata: Metadata = {
  title: "Os' Lab — Decision Intelligence Platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        <I18nProvider>
          <PageShell>{children}</PageShell>
        </I18nProvider>
      </body>
    </html>
  )
}
