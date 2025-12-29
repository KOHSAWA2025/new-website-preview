import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ZOOOO",
  description:
    "ZOOOO is a structure- and constraint-centered reasoning framework built around internal consistency.",
};

export default function EnTechnologyZooooPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          ZOOOO
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          A reasoning framework centered on structure, constraints, and internal consistency.
        </p>
      </div>

      <Section title="Conceptual background">
        <p>
          ZOOOO is a reasoning framework centered on structure, constraints, and internal
          consistency. It does not treat scale as a goal, and it does not define success as maximum
          predictive accuracy.
        </p>
        <p className="mt-6">
          Correlation-driven learning has fundamental limits in complex systems. In such systems,
          behavior is not a list of isolated effects. It is defined by structure, constraints,
          interactions, and coherent evolution over time.
        </p>
        <p className="mt-6">
          ZOOOO was proposed to address these limits: not by adding more correlations, but by
          building a model that must remain consistent with what a system is allowed to be.
        </p>
      </Section>

      <Section title="Core philosophical stance">
        <p>
          ZOOOO is not designed to win benchmarks or prediction tasks. The central question is:
          can a system build a structurally grounded, internally consistent understanding under
          constraints?
        </p>
        <p className="mt-6">
          Data is a boundary condition imposed by reality, not the answer. The goal is to
          construct a self-consistent internal structure that can be reasoned over and evolved.
        </p>
        <p className="mt-6">
          This shifts the emphasis from “predicting what comes next” to “reasoning about how a
          system holds together.”
        </p>
      </Section>

      <Section title="Research grounding">
        <p>
          The approach is grounded in how complex systems are studied in physics and applied
          mathematics: continuum systems, geometry, non-equilibrium processes, and complex
          dynamics.
        </p>
        <p className="mt-6">
          System behavior is constrained by global structure, not only by local interaction
          details. ZOOOO brings this structural reasoning into general-purpose models.
        </p>
      </Section>

      <Section title="Connection to virtual cell">
        <p>
          ZOOOO is not purely theoretical. Virtual Cell is the first real-world instantiation of
          ZOOOO in life sciences.
        </p>
        <p className="mt-6">
          It has been used within real R&amp;D workflows through collaboration with Oda
          Pharmaceuticals. Virtual Cell does not replace experiments. It serves as an
          intermediate reasoning layer between experiments and mechanistic understanding.
        </p>
        <p className="mt-6">
          We present ZOOOO as an evolving foundational framework, not a final solution.
        </p>
      </Section>
    </div>
  );
}

