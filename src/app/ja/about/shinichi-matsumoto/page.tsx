import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import shinichiPhoto from "@/pic/shinnichi.jpg";

export const metadata: Metadata = {
  title: "松本慎一",
};

export default function JaShinichiMatsumotoPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          松本慎一（Shinichi Matsumoto）
        </h1>

        <div className="mt-8">
          <Image
            src={shinichiPhoto}
            alt="松本慎一"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="略歴">
        <p>
          再生医療と医療デバイス工学の融合を牽引する外科医科学者。
          神戸大学大学院医学研究科客員教授、
          明治大学研究・知財戦略機構客員教授、
          国立国際医療研究センター研究アドバイザーを務める。
        </p>

        <p className="mt-6">
          1型糖尿病の根治を目指し、
          医療用ブタ膵島を用いた
          「バイオ人工膵島移植」の研究開発を主導。
          免疫隔離カプセル化技術および
          血管新生誘導材料の最適化により、
          免疫抑制剤を必要としない膵島移植の実現を目指している。
        </p>

        <p className="mt-6">
          また、膵島移植の臨床応用に向け、
          AI による膵島分離・評価プロセスの自動化や、
          移植後の膵島生着予測モデルの開発にも取り組み、
          再生医療の標準化および産業化を加速させている。
        </p>
      </Section>

      <Section title="os’ labでの役割">
        <p>
          2025年の会社設立初期に代表取締役社長を務め、
          現在は技術顧問として参画。
          P.P.N. 技術と AI アルゴリズムを活用した
          植物由来成分の機能性評価や、
          糖尿病・痛風向け製品開発において、
          医学的知見とデータ解析の両面から支援を行っている。
        </p>

        <p className="mt-6">
          「生体とデータの融合による未来医療の創出」を信条に、
          科学的根拠に基づく製品開発と社会実装を推進し、
          臨床・研究・産業の三位一体による
          次世代ヘルスケアの実現に貢献している。
        </p>
      </Section>
    </div>
  );
}
