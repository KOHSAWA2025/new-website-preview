import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Message from the President",
  description: "Structure computes function. We compute structure.",
};

export default function EnPresidentPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="whitespace-pre-line text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {"Structure computes function.\nWe compute structure."}
        </h1>
      </div>

      <Section title="Message">
        <p>
          I believe structure is the primary cause. Function is what the system
          becomes when structure is placed under constraints.
        </p>
        <p className="mt-6">
          In medicine, we often debate details while the bigger reality is
          simpler: biology computes. Cells integrate signals, conserve what must
          be conserved, and move through state.
        </p>
        <p className="mt-6">
          If computation is inevitable, the question is whether we can build a
          model that is honest about it. A model that fails when constraints are
          violated. A model that changes when structure changes.
        </p>
        <p className="mt-6">
          That is why this company exists now. The tools are finally strong
          enough to learn state, not just labels. But we have to aim correctly.
          We have to start from constraints.
        </p>
        <p className="mt-6">
          CEO Kenji OHSAWA
        </p>
      </Section>
    </div>
  );
}
