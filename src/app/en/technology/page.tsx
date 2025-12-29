import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Constraint-first modeling: the ZOOOO foundation model developed by os’ lab.",
};

export default function EnTechnologyPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Technology
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          Most biological models learn correlations. Cells do not operate on
          correlations.
        </p>
      </div>

      <Section title="Constraints first">
        <p>
          We treat structure, conservation, and dynamics as constraints—conditions a model must
          remain consistent with.
        </p>
      </Section>

      <section className="py-[72px] sm:py-[88px]">
        <div className="max-w-[720px]">
          <h2 className="text-xs font-medium tracking-[0.32em] text-neutral-600">
            <Link
              href="/en/technology/zoooo"
              className="underline decoration-black/20 hover:text-neutral-950"
            >
              ZOOOO
            </Link>
          </h2>
          <div className="mt-7 text-[15px] leading-8 text-neutral-900 sm:text-base">
            <p>
              ZOOOO is a reasoning framework centered on structure, constraints, and internal
              consistency.
            </p>
            <p className="mt-6">
              It is not built to win prediction tasks. It is built to remain consistent with what
              a complex system is allowed to be.
            </p>
            <p className="mt-6">
              <Link
                href="/en/technology/zoooo"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                Details
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Section title="What we model">
        <p>
          We focus on structure-induced dynamics: how cellular state evolves when structure
          changes.
        </p>
      </Section>

      <section className="py-[72px] sm:py-[88px]">
        <div className="max-w-[720px]">
          <h2 className="text-xs font-medium tracking-[0.32em] text-neutral-600">
            <Link
              href="/en/technology/virtual-cells"
              className="underline decoration-black/20 hover:text-neutral-950"
            >
              VIRTUAL CELLS
            </Link>
          </h2>
          <div className="mt-7 text-[15px] leading-8 text-neutral-900 sm:text-base">
            <p>
              Virtual Cell is a structurally grounded reasoning system under explicit constraints.
            </p>
            <p className="mt-6">
              It is the first instantiation of ZOOOO in life sciences.
            </p>
            <p className="mt-6">
              <Link
                href="/en/technology/virtual-cells"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                Details
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
