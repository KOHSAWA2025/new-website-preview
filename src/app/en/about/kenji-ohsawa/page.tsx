import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import kenjiPhoto from "@/pic/kenji.png";

export const metadata: Metadata = {
  title: "Kenji OHSAWA",
};

export default function EnKenjiOhsawaPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Kenji OHSAWA (大澤顕治)
        </h1>

        <div className="mt-8">
          <Image
            src={kenjiPhoto}
            alt="Kenji OHSAWA"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="Biography">
        <p>
          After completing graduate studies in engineering,
          he worked internationally in technology consulting
          and advanced technology development.
        </p>
        <p className="mt-6">
          His work spans data-driven systems, algorithm design,
          and AI-based implementation, covering the full spectrum
          from technical execution to strategic planning.
        </p>
        <p className="mt-6">
          Across multiple domains, including medicine,
          he approaches challenges by integrating
          technical constraints with market structure,
          leading the design of highly feasible solutions.
        </p>
        <p className="mt-6">
          He is currently enrolled in a doctoral program in artificial intelligence,
          conducting interdisciplinary research across engineering,
          economics, and business strategy.
        </p>
      </Section>

      <Section title="Role at os’ lab">
        <p>
          As part of his research activities,
          he leads the design of a computational paradigm
          grounded in structural and physical constraints,
          and has played a central role in shaping
          the conceptual and architectural foundation of the ZOOOO model.
        </p>
        <p className="mt-6">
          Drawing on insights from both research and practice,
          he is responsible for advancing the societal implementation
          of ZOOOO-centered AI technologies,
          as well as driving organizational transformation
          and long-term technology strategy.
        </p>
      </Section>
    </div>
  );
}
