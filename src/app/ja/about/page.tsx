import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "会社情報",
  description: "オーズラボ株式会社の会社情報。",
};

export default function JaAboutPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          会社情報
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          法人情報
        </p>
      </div>

      <Section title="会社概要">
        <div className="space-y-4">
          <p>
            <span className="text-neutral-700">設立</span>
            <br />
            2025年1月
          </p>
          <p>
            <span className="text-neutral-700">所在地</span>
            <br />
            大阪市北区梅田1－13－1
            <br />
            ツインタワーズ・サウス17階
          </p>
          <p>
            <span className="text-neutral-700">電話</span>
            <br />
            06-7777-3966（代）
          </p>
        </div>
      </Section>

      <Section title="役員・顧問">
        <div className="space-y-6">
          <div>
            <p className="text-neutral-700">CEO</p>
            <p className="mt-2">
              <Link
                href="/ja/about/kenji-ohsawa"
                className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
              >
                大澤顕治
              </Link>
            </p>
          </div>
          <div>
            <p className="text-neutral-700">技術顧問</p>
            <p className="mt-2">
              <Link
                href="/ja/about/shinichi-matsumoto"
                className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
              >
                松本慎一
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10">
          <Link
            href="/ja/about/president"
            className="text-neutral-800 underline decoration-black/20 hover:text-neutral-950"
          >
            CEOメッセージ
          </Link>
        </p>
      </Section>
    </div>
  );
}
