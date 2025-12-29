export type Locale = "en" | "ja";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}

export const navItems: Array<{ slug: string; label: { en: string; ja: string } }> =
  [
    { slug: "technology", label: { en: "Technology", ja: "技術" } },
    { slug: "solution", label: { en: "Solution", ja: "ソリューション" } },
    { slug: "news", label: { en: "News", ja: "お知らせ" } },
    { slug: "about", label: { en: "About", ja: "会社情報" } },
    { slug: "careers", label: { en: "Careers", ja: "採用" } },
    { slug: "contact", label: { en: "Contact", ja: "お問い合わせ" } },
  ];
