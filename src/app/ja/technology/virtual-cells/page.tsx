import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "仮想細胞",
  description: "仮想細胞は、明示的な制約のもとで構造に根ざして推論するための枠組みです。",
};

export default function JaTechnologyVirtualCellsPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          VIRTUAL CELLS
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          制約のもとで細胞を「ひとつの系」として捉え、整合的に推論するための枠組み。
        </p>
      </div>

      <Section title="Overview" uppercase={false}>
        <p>
          <span className="font-medium text-neutral-900">なぜ仮想細胞が重要か。</span>
          実験は断片化し、モデルは孤立しがちです。データは存在しても、全体としての整合性が欠けます。
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">定義。</span>
          仮想細胞はシミュレーションでもデータ当てはめモデルでもありません。
          明示的な制約のもとで、構造に根ざして推論するシステムとして定義します。
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">実運用での検証。</span>
          これは概念ではなく、すでに構築された実体です。仮想細胞は ZOOOO の最初の実装であり、
          織田製薬株式会社 との協業を通じて検証され、製品開発の成功に貢献してきました。
          ただし、実験を置き換えるものではありません。
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">概念的インパクト。</span>
          細胞全体のレベルで推論できることが重要です。化学的・遺伝的・環境的な摂動が、構造の中をどう伝播し、
          機能的応答として現れるかを評価します。
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">位置づけ。</span>
          仮想細胞は完成品ではありません。
          ZOOOO を基盤とする、より広いフレームワークの中で最初に実現された領域として位置づけています。
          構造がボトルネックとなる他の複雑系にも拡張可能な考え方です。
        </p>
      </Section>
    </div>
  );
}
