import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ソリューション",
  description:
    "ZOOOOを基盤として構築された応用レイヤーにより、介入下の機能的な細胞応答を計算します。",
};

export default function JaSolutionPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          ソリューション
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          当社が開発する基盤モデルZOOOOを用い、介入に対する細胞応答を計算します。
        </p>
      </div>

      <Section title="事例">
        <h2 className="whitespace-pre-line text-balance text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
          {"細胞を計算する。\n薬を発見する。"}
        </h2>
        <p>
          ZOOOOを基盤として構築された仮想細胞（応用レイヤー）を用い、オーズラボ株式会社は
          織田製薬株式会社と協業し、厳しい時間制約のもとで
          化合物スクリーニングを支援しました。
        </p>
        <p className="mt-6">
          in silicoで機能的な細胞応答を評価することで、
          大規模な実験反復に入る前に、複数の有効成分を同定しました。
        </p>
        <p className="mt-6">
          このアプローチにより開発期間が大幅に短縮され、
          複数の高性能な医薬品の開発成功に貢献しました。
        </p>
      </Section>
    </div>
  );
}
