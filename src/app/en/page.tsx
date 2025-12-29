import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function EnHomePage() {
  return (
    <>
      <Hero
        headline={"Stop guessing.\nCompute it."}
        subtitle="Discovery, computed by the ZOOOO model."
      />

      <div className="pb-10">
        <Section title="" uppercase={false}>
          <p>
            Through virtual cell applications built on our proprietary
            ZOOOO foundation model,
            we have already achieved tangible results
            in the field of drug discovery.
          </p>

          <p className="mt-6">
            While we are still a young company,
            we believe the computational paradigm behind ZOOOO
            has the potential to extend beyond drug discovery
            into broader domains where structure matters.
          </p>

          <p className="mt-6">
            By staying grounded in real outcomes
            and building step by step,
            we aim to grow this technology
            in ways that are genuinely useful to society.
          </p>
        </Section>
      </div>
    </>
  );
}
