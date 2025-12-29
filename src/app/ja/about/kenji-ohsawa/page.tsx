import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import kenjiPhoto from "@/pic/kenji.png";

export const metadata: Metadata = {
  title: "大澤顕治",
};

export default function JaKenjiOhsawaPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          大澤顕治（Kenji OHSAWA）
        </h1>

        <div className="mt-8">
          <Image
            src={kenjiPhoto}
            alt="大澤顕治"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="略歴">
        <p>
          大学院工学系研究科修了後、海外にて技術コンサルティングおよび先端技術開発に従事。
          データ駆動型システム、アルゴリズム設計、AI 技術を基盤とした実装から戦略立案までを一貫して手がける。
        </p>
        <p className="mt-6">
          医学分野をはじめとする複数領域において、技術的制約と市場構造の両面から課題を捉え、
          実現可能性の高いソリューション設計を主導。
        </p>
        <p className="mt-6">
          現在は人工知能分野の博士課程に在籍し、工学・経済学・ビジネス戦略を横断する研究に取り組んでいる。
        </p>
      </Section>

      <Section title="os’ labでの役割">
        <p>
          研究活動の一環として、構造および物理的制約に基づく計算パラダイムを設計し、
          基盤モデル ZOOOO の構想および設計思想を主導。
        </p>
        <p className="mt-6">
          研究と実務の双方で培った知見をもとに、
          ZOOOO を中核とした AI 技術の社会実装、
          ならびに組織変革・技術戦略の推進を担っている。
        </p>
      </Section>
    </div>
  );
}
