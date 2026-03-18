/* eslint-disable react-refresh/only-export-components */

'use client'

import React, { createContext, useMemo, useState } from 'react'
import type { Locale, SiteCopy } from '../content/site'
import { siteCopy } from '../content/site'
import { useEffect } from 'react'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteCopy
}

export const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'oslab.locale'

function isLocale(v: unknown): v is Locale {
  return v === 'en' || v === 'ja'
}

export function I18nProvider({
  children,
  initialLocale = 'en',
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  // IMPORTANT: do not read localStorage during initial render.
  // It causes hydration mismatches when the server renders EN but the client bootstraps as JA.
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next)
      document.cookie = `${STORAGE_KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`
      document.documentElement.lang = next === 'ja' ? 'ja' : 'en'
    }
  }

  useEffect(() => {
    // Sync from storage after hydration.
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (isLocale(stored) && stored !== locale) {
      setLocaleState(stored)
      document.cookie = `${STORAGE_KEY}=${stored}; Path=/; Max-Age=31536000; SameSite=Lax`
      document.documentElement.lang = stored === 'ja' ? 'ja' : 'en'
    } else {
      document.documentElement.lang = locale === 'ja' ? 'ja' : 'en'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      t: siteCopy[locale],
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
