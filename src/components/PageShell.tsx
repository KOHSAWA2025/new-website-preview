/* eslint-disable react-refresh/only-export-components */

'use client'

import type { PropsWithChildren } from 'react'
import { TopNav } from './TopNav'
import { Footer } from './Footer'

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-svh flex flex-col">
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
