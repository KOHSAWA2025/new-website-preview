"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, type Locale } from "@/lib/i18n";

function swapLocale(pathname: string, locale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${locale}`;

  if (parts[0] === "en" || parts[0] === "ja") {
    parts[0] = locale;
    return `/${parts.join("/")}`;
  }

  // Non-localized legacy routes.
  return `/${locale}`;
}

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const enHref = swapLocale(pathname, "en");
  const jaHref = swapLocale(pathname, "ja");

  const isEn = locale === "en";

  return (
    <header className="py-8">
      <nav className="flex items-baseline justify-between gap-8">
        <Link
          href={`/${locale}`}
          className="text-sm font-medium tracking-[0.28em] text-neutral-950"
          aria-label="os’ lab home"
        >
          {locale === "ja" ? "オーズラボ株式会社" : "os’ lab co., ltd"}
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2">
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] text-neutral-600">
            <Link
              href={enHref}
              className={
                "transition-colors hover:text-neutral-900 " +
                (isEn ? "text-neutral-900" : "text-neutral-600")
              }
              aria-label="Switch language to English"
            >
              EN
            </Link>
            <span className="text-black/20">/</span>
            <Link
              href={jaHref}
              className={
                "transition-colors hover:text-neutral-900 " +
                (!isEn ? "text-neutral-900" : "text-neutral-600")
              }
              aria-label="Switch language to Japanese"
            >
              JP
            </Link>
          </div>

          <div className="h-4 w-px bg-black/10" aria-hidden="true" />

          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              className="text-sm text-neutral-800 transition-colors hover:text-neutral-950"
            >
              {item.label[locale]}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
