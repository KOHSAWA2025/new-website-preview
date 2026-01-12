import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";

type NewsItem = {
  slug: string;
  date: string;
  title: string;
  category: "research" | "product" | "society";
};

export const metadata: Metadata = {
  title: "お知らせ",
  description: "オーズラボ株式会社からの事実ベースの更新情報。",
};

const items = [
  {
    slug: "stage-based-user-feedback-summary-metabolic-support-food",
    date: "2026-01-12",
    title:
      "血糖関連の代謝健康のサポートを目的とした食品グレード製品に関する段階別ユーザーフィードバック要約",
    category: "product",
  },
  {
    slug: "research-preview-zoooo-betacell-expert-8b-v0-6-1",
    date: "2026-01-10",
    title: "ZOOOO-BetaCell-Expert-8B v0.6.1（研究プレビュー）公開のお知らせ",
    category: "research",
  },
  {
    slug: "release-zoooo-betacell-expert-7b-v0-4-baseline",
    date: "2026-01-02",
    title: "ZOOOO-BetaCell-Expert-7B-v0.4 ベースラインモデル公開のお知らせ",
    category: "product",
  },
  {
    slug: "release-zoooo-betacell-expert-7b-v0-1",
    date: "2026-01-02",
    title: "公開：ZOOOO-BetaCell-Expert-7B-v0.1",
    category: "product",
  },
  {
    slug: "publication-support-field-neural-representation-learner-framework",
    date: "2025-11-26",
    title:
      "Support field neural representation learner framework for learning stability landscapes in molecular geometry",
    category: "research",
  },
  {
    slug: "publication-multi-modal-topology-aware-gnn-for-cpi",
    date: "2025-09-05",
    title:
      "Multi-Modal Topology-Aware Graph Neural Network for Robust Chemical–Protein Interaction Prediction",
    category: "research",
  },
  {
    slug: "publication-tcocpin-reveals-topological-characteristics",
    date: "2025-05-18",
    title:
      "TCoCPIn reveals topological characteristics of chemical protein interaction networks for novel feature discovery",
    category: "research",
  },
  {
    slug: "new-years-message-2026",
    date: "2026-01-01",
    title: "新年のご挨拶\n新体制のもとで迎える 2026 年に向けて",
    category: "society",
  },
  {
    slug: "new-years-message-2025",
    date: "2025-01-01",
    title: "新春のご挨拶\n「AIと共に切り拓く未来社会への挑戦」",
    category: "society",
  },
  {
    slug: "meeting-with-diet-member-eisuke-mori",
    date: "2024-11-22",
    title: "森英介議員との会談で描く日本のAI未来図",
    category: "society",
  },
] satisfies NewsItem[];

const sortedItems: NewsItem[] = [...items].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
);

export default function JaNewsPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          お知らせ
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          オーズラボ株式会社からの更新情報（事実のみ）。
        </p>
      </div>

      <Section title="更新">
        <ol className="space-y-10">
          {sortedItems.map((item) => (
            <li key={item.slug}>
              <p className="text-xs tracking-[0.22em] text-neutral-600">
                {item.date}
              </p>
              <p className="mt-2">
                <Link
                  href={`/ja/news/${item.slug}`}
                  className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
                >
                  <span className="whitespace-pre-line break-words">{item.title}</span>
                </Link>
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                分類：{item.category === "research"
                  ? "研究・学術"
                  : item.category === "product"
                    ? "プロダクト"
                    : "社会・政策"}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
