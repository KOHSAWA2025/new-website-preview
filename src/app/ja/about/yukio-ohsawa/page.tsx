import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import yukioPhoto from "@/pic/yukio.jpg";

export const metadata: Metadata = {
  title: "大澤幸生",
};

export default function JaYukioOhsawaPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          大澤幸生（Yukio OHSAWA）
        </h1>

        <div className="mt-8">
          <Image
            src={yukioPhoto}
            alt="大澤幸生"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="略歴">
        <p>
          教授
          <br />
          東京大学大学院工学系研究科 システム創成学専攻
          <br />
          東京大学大学院工学系研究科 技術経営戦略学専攻（兼担）
        </p>

        <p className="mt-6">
          データ駆動利活用に関する独自の方法論は、
          経済産業省、国土交通省をはじめとする行政機関や民間企業、
          さらには教育・研究機関において、
          国内外で幅広く導入されている。
        </p>
      </Section>

      <Section title="os’ labでの役割">
        <p>
          2025年の会社設立当初より、
          AI 技術コンサルタントとして参画し、
          研究・社会実装の両面から技術的助言を行っている。
        </p>
      </Section>
    </div>
  );
}
