import type { Locale } from "@/lib/i18n";
import Link from "next/link";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="py-10">
      <div className="flex flex-col gap-3 border-t border-black/10 pt-8 text-xs leading-6 text-neutral-700">
        <p className="tracking-wide">© {new Date().getFullYear()} os’ lab co., ltd</p>
        <p className="tracking-wide">
          <Link
            href={`/${locale}/privacy`}
            className="underline decoration-black/20 hover:text-neutral-950"
          >
            {locale === "ja" ? "プライバシーポリシー" : "Privacy Policy"}
          </Link>
        </p>
        <p className="max-w-3xl">
          {locale === "ja"
            ? "オーズラボ株式会社は医療のための基盤モデルを構築します。ZOOOOは当社が開発する基盤モデルです。相関ではなく、幾何・保存則・ダイナミクスといった制約から学習します。"
            : "os’ lab co., ltd builds foundation models for medicine. The ZOOOO model is our foundation model developed by os’ lab. We learn from constraints—geometry, conservation, and dynamics—not from correlation alone."}
        </p>
      </div>
    </footer>
  );
}
