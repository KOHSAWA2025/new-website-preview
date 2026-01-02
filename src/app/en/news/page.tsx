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
  title: "News",
  description: "Factual updates from os’ lab co., ltd.",
};

const items = [
  {
    slug: "release-zoooo-betacell-expert-7b-v0-4-baseline",
    date: "2026-01-02",
    title: "Release of ZOOOO-BetaCell-Expert-7B-v0.4 Baseline Model",
    category: "product",
  },
  {
    slug: "release-zoooo-betacell-expert-7b-v0-1",
    date: "2026-01-02",
    title: "Release: ZOOOO-BetaCell-Expert-7B-v0.1",
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
    title: "New Year’s Message\nEntering 2026 under New Leadership",
    category: "society",
  },
  {
    slug: "new-years-message-2025",
    date: "2025-01-01",
    title: "New Year’s Message: Shaping a Future Society Together with AI",
    category: "society",
  },
  {
    slug: "discussing-japans-ai-future-with-diet-member-eisuke-mori",
    date: "2024-11-22",
    title: "Discussing Japan’s AI Future with Diet Member Eisuke Mori",
    category: "society",
  },
] satisfies NewsItem[];

const sortedItems: NewsItem[] = [...items].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
);

export default function EnNewsPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          News
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          Factual updates from os’ lab co., ltd.
        </p>
      </div>

      <Section title="Updates">
        <ol className="space-y-10">
          {sortedItems.map((item) => (
            <li key={item.slug}>
              <p className="text-xs tracking-[0.22em] text-neutral-600">
                {item.date}
              </p>
              <p className="mt-2">
                <Link
                  href={`/en/news/${item.slug}`}
                  className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
                >
                  <span className="whitespace-pre-line break-words">{item.title}</span>
                </Link>
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Category: {item.category === "research"
                  ? "Research"
                  : item.category === "product"
                    ? "Product"
                    : "Society"}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
