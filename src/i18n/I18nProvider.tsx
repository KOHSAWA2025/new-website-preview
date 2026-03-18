import React, { createContext, useMemo, useState } from 'react'
import type { Locale, SiteCopy } from '../content/site'
import { siteCopy } from '../content/site'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteCopy
}

export const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'oslab.locale'

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ja' || stored === 'en') return stored
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale())

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'ja' ? 'ja' : 'en'
  }

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      t: siteCopy[locale],
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
