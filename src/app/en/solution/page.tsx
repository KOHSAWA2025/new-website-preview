import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "An application layer built on top of ZOOOO to compute functional cellular responses under intervention.",
};

export default function EnSolutionPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Solution
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          We use the ZOOOO model developed by os’ lab to compute cellular
          response under intervention.
        </p>
      </div>

      <Section title="Example">
        <h2 className="whitespace-pre-line text-balance text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
          {"Compute the cell.\nDiscover the drug."}
        </h2>
        <p>
          Using the virtual cell application built on top of ZOOOO,
          os’ lab collaborated with
          ODA PHARMACEUTICAL CO., LTD to support compound screening
          under severe time constraints.
        </p>
        <p className="mt-6">
          By evaluating functional cellular responses in silico,
          multiple effective components were identified
          before extensive experimental iteration.
        </p>
        <p className="mt-6">
          This approach significantly reduced development time
          and contributed to the successful development
          of several high-performing pharmaceutical products.
        </p>
      </Section>
    </div>
  );
}
