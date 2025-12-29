import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "社長メッセージ",
  description: "構造が機能を計算する。私たちは構造を計算する。",
};

export default function JaPresidentPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="whitespace-pre-line text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {"構造が機能を計算する。\n私たちは構造を計算する。"}
        </h1>
      </div>

      <Section title="メッセージ">
        <p>
          私は、原因の中心にあるのは構造だと考えています。機能は、構造が制約のもとに置かれたときに現れる結果です。
        </p>
        <p className="mt-6">
          医療では細部の議論が増えがちです。しかし現実はもっと単純です。生物は計算します。細胞は信号を統合し、守るべき量を守り、状態の中を移動します。
        </p>
        <p className="mt-6">
          計算が避けられないなら、次はそれを正直に扱えるモデルを作れるかどうかです。制約を破れば破綻するモデル。構造が変われば出力も変わるモデル。
        </p>
        <p className="mt-6">
          だから、私たちは今この会社をつくりました。ようやく「ラベル」ではなく「状態」を学べる道具が揃ってきた。ただし狙いを誤ってはいけない。制約から始めるべきです。
        </p>
        <p className="mt-6">
          代表取締役社長 大澤顕治
        </p>

      </Section>
    </div>
  );
}
