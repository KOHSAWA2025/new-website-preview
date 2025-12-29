import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "採用",
  description:
    "パラダイムレベルの基盤モデル（ZOOOO）と、その上の応用レイヤーをつくる少人数のチーム。",
};

export default function JaCareersPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          採用
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          私たちは少人数を保ちます。幅と判断力で採用します。
        </p>
      </div>

      <Section title="働き方">
        <p>深く考えて実装します。測って、直して、文章で残します。</p>
        <p className="mt-6">肩書きではなく、成果と誠実さを重視します。</p>
      </Section>

      <Section title="合う人">
        <p className="mt-6">
          物理、数学、機械学習、計算生物の背景を持つ方は相性が良いことが多いです。
        </p>
      </Section>

      <Section title="連絡">
        <p>
          募集要項をあえて置きません。合うと感じたら、作ったものと信じていることを短く送ってください。
        </p>
      </Section>
    </div>
  );
}
