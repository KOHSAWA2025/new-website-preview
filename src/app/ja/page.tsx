import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function JaHomePage() {
  return (
    <>
      <Hero
        headline={"推測をやめろ。\n計算せよ。"}
        subtitle="ZOOOOモデルによって計算されるディスカバリー"
      />

      <div className="pb-10">
        <Section title="" uppercase={false}>
          <p>
            私たちは、独自の基盤モデル ZOOOO をもとに開発した
            仮想細胞アプリケーションを通じて、
            新薬創出の現場で具体的な成果を積み重ねてきました。
          </p>

          <p className="mt-6">
            まだ若い企業ではありますが、
            ZOOOO が持つ計算パラダイムは、
            創薬にとどまらず、より広い分野へと応用できる
            可能性を持っていると考えています。
          </p>

          <p className="mt-6">
            足元の成果を大切にしながら、
            社会にとって意味のあるかたちで
            この技術を育てていくこと。
            それが、私たちの目指す方向です。
          </p>
        </Section>
      </div>
    </>
  );
}
