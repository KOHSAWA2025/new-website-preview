import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "A small team building a paradigm-level foundation model (ZOOOO) and an application layer on top of it.",
};

export default function EnCareersPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Careers
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          We keep the team small. We hire for range and judgment.
        </p>
      </div>

      <Section title="How we work">
        <p>
          We do deep work. We measure. We revise. We write clearly.
        </p>
        <p className="mt-6">
          Titles are not the point. Output and integrity are.
        </p>
      </Section>

      <Section title="Who fits">
        <p className="mt-6">
          Physicists, mathematicians, ML researchers, and computational
          biologists tend to do well here.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          No job listings on purpose. If you feel aligned, send a concise note
          with what you built and what you believe.
        </p>
      </Section>
    </div>
  );
}
