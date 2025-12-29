import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ZOOOO",
  description:
    "ZOOOOは、構造・制約・内部整合性を中心に据えた推論フレームワークです。",
};

export default function JaTechnologyZooooPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          ZOOOO
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          構造・制約・内部整合性を中心に据えた推論フレームワーク。
        </p>
      </div>

      <Section title="Conceptual background" uppercase={false}>
        <p>
          ZOOOO は、構造、制約、内部整合性を中心に据えた推論フレームワークです。
          データ規模の拡大を目的とせず、予測精度の最大化を成功の定義にも置きません。
        </p>
        <p className="mt-6">
          相関駆動の学習には、複雑系において原理的な限界があります。
          複雑系は、孤立した効果の集合としてではなく、構造、制約、相互作用、そして時間に沿った整合的な
          振る舞いとして定義されます。
        </p>
        <p className="mt-6">
          ZOOOO は、この限界に対して、相関を積み上げるのではなく、「系が取り得る形」と整合的であり続ける
          内部構造を構成することで応答するために提案されました。
        </p>
      </Section>

      <Section title="Core philosophical stance" uppercase={false}>
        <p>
          ZOOOO は、ベンチマークや予測タスクで勝つために設計されていません。
          中心にある問いは、「制約のもとで、構造に根ざした内部整合的な理解を構築できるか」です。
        </p>
        <p className="mt-6">
          データは現実が与える境界条件であり、答えそのものではありません。
          目標は、推論でき、更新できる自己整合的な内部構造を構成することにあります。
        </p>
        <p className="mt-6">
          これは、「次に起こることを当てる」から「系がどのように成り立っているかを考える」への転換です。
        </p>
      </Section>

      <Section title="Research grounding" uppercase={false}>
        <p>
          この考え方は、物理学・応用数学における複雑系の扱いに基づきます。
          連続体、幾何、非平衡過程、複雑ダイナミクス。
          そこで重要なのは、局所相互作用の詳細だけでなく、全体構造によって振る舞いが拘束されるという視点です。
        </p>
        <p className="mt-6">
          ZOOOO は、この構造的推論を、汎用モデルへと持ち込みます。
        </p>
      </Section>

      <Section title="Connection to virtual cell" uppercase={false}>
        <p>
          ZOOOO は純粋に理論的な枠組みに留まりません。
          仮想細胞（Virtual Cell）は、生命科学における ZOOOO の最初の実装例です。
        </p>
        <p className="mt-6">
          Oda Pharmaceuticals との協業を通じて、実際の R&amp;D ワークフローの中で用いられてきました。
          仮想細胞は実験を置き換えるものではありません。
          実験と機序理解のあいだに置かれる、中間の推論レイヤーとして機能します。
        </p>
        <p className="mt-6">
          ZOOOO は、完成された解ではなく、進化し続ける基盤的フレームワークとして提示されます。
        </p>
      </Section>
    </div>
  );
}

