import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "プラットフォーム",
  description:
    "ZOOOOを基盤として構築された応用レイヤー。介入のもとで機能的な細胞応答を計算します。",
};

export default function JaPlatformPage() {
  redirect("/ja/solution");
}
