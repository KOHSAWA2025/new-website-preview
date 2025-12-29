import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "技術",
  description:
    "os’ labが開発する基盤モデルZOOOO：制約を起点に構造誘起ダイナミクスを扱う。",
};

export default function JaTechnologyPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          技術
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          多くの生物モデルは相関を学びます。細胞は相関で動いていません。
        </p>
      </div>

      <Section title="制約を先に置く">
        <p>
          構造・保存則・ダイナミクスを、モデルが整合的であり続けるための制約として扱います。
        </p>
      </Section>

      <section className="py-[72px] sm:py-[88px]">
        <div className="max-w-[720px]">
          <h2 className="text-xs font-medium tracking-[0.32em] text-neutral-600">
            <Link
              href="/ja/technology/zoooo"
              className="underline decoration-black/20 hover:text-neutral-950"
            >
              ZOOOO
            </Link>
          </h2>
          <div className="mt-7 text-[15px] leading-8 text-neutral-900 sm:text-base">
            <p>ZOOOO は、構造・制約・内部整合性を中心に据えた推論フレームワークです。</p>
            <p className="mt-6">
              予測タスクに勝つためではなく、複雑系が取り得る形と整合的であり続けることを重視します。
            </p>
            <p className="mt-6">
              <Link
                href="/ja/technology/zoooo"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                詳細
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Section title="何をモデル化するか">
        <p>
          構造に誘起されるダイナミクスを扱います。構造が変わるとき、細胞状態がどう変化するか。
        </p>
      </Section>

      <section className="py-[72px] sm:py-[88px]">
        <div className="max-w-[720px]">
          <h2 className="text-xs font-medium tracking-[0.32em] text-neutral-600">
            <Link
              href="/ja/technology/virtual-cells"
              className="underline decoration-black/20 hover:text-neutral-950"
            >
              VIRTUAL CELLS
            </Link>
          </h2>
          <div className="mt-7 text-[15px] leading-8 text-neutral-900 sm:text-base">
            <p>
              仮想細胞は、明示的な制約のもとで構造に根ざして推論するシステムです。
            </p>
            <p className="mt-6">ZOOOO の最初の実装領域として位置づけられます。</p>
            <p className="mt-6">
              <Link
                href="/ja/technology/virtual-cells"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                詳細
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
