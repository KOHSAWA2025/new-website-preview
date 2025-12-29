import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Virtual Cells",
  description:
    "Virtual Cells are a structurally grounded reasoning system under explicit constraints.",
};

export default function EnTechnologyVirtualCellsPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          VIRTUAL CELLS
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          A way to reason about cellular behavior as a coherent system under constraints.
        </p>
      </div>

      <Section title="Overview" uppercase={false}>
        <p>
          <span className="font-medium text-neutral-900">Why Virtual Cells matter.</span> In biology,
          experiments are fragmented and models are often isolated. Data exists, but coherence is
          missing.
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">Definition.</span> A Virtual Cell is not a
          simulation, and not a data-fitting model. It is a structurally grounded reasoning system
          that operates under explicit constraints.
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">Real-world validation.</span> This Virtual
          Cell is real and already built. It is the first instantiation of ZOOOO. It has been
          validated through collaboration with Oda Pharmaceuticals and contributed to successful
          product development. It does not replace experiments.
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">Conceptual impact.</span> It enables
          reasoning at the level of the whole cell. Chemical, genetic, and environmental
          perturbations can be evaluated in terms of how they propagate through structure and
          appear as functional responses.
        </p>

        <p className="mt-6">
          <span className="font-medium text-neutral-900">Positioning.</span> This is not a finished
          product. We treat it as the first realized domain of a broader ZOOOO-based framework,
          extensible to other complex systems where structure is the bottleneck.
        </p>
      </Section>
    </div>
  );
}
