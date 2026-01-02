import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Message from the CEO",
  description: "A message from CEO Kenji OHSAWA.",
};

export default function EnPresidentPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="whitespace-pre-line text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {"Message from the CEO"}
        </h1>
      </div>

      <Section title="Message">
        <p>
          【New Year’s Message】
        </p>
        <p className="mt-6">
          I have always believed that the true core of causality lies in structure itself.
          What we call function is simply the result that structure must exhibit under given constraints.
          In medicine and the life sciences, people often become absorbed in an endless discussion of details.
          But the real world is simpler—and more unforgiving.
        </p>
        <p className="mt-6">
          Life computes.
          Cells integrate signals, conserve what must be conserved, and continuously migrate through state space.
          If computation itself cannot be avoided, then the real question becomes:
          do we have a model that can treat this computation as it is—faithfully and honestly?
        </p>
        <p className="mt-6">
          A model that fails once constraints are broken;
          a model whose output must change when structure changes;
          a model that can find and output regularities from pure chaos.
        </p>
        <p className="mt-6">
          Over the past year, os’ lab made a genuine leap.
          Building on the ZOOOO model that we proposed independently, and through deep collaboration with Oda Pharmaceuticals’ PPN technology,
          we jointly completed the construction of a virtual cell system.
          This system does not remain at the level of concept or demonstration.
          It has already concretely participated in and advanced the R&amp;D of multiple new, effective chronic-disease products,
          and has successfully reached the real world.
        </p>
        <p className="mt-6">
          To my knowledge, this is among the very few cases in the industry—and arguably the first—
          in which AI participated as a primary research agent and successfully produced real-world products.
          This result not only validates our technical path,
          but also demonstrates that modeling from structure and constraints can hold in the real world.
        </p>
        <p className="mt-6">
          It is in this context that I have moved from my long-standing role as CTO, responsible for core technology,
          to assume the position of CEO of os’ lab.
          I would like to express my sincere gratitude to Professor Shinichi Matsumoto for his guidance and support,
          and to the board for recognizing and trusting my past work.
        </p>
        <p className="mt-6">
          This change in role has also forced me to reconsider a question:
          what kind of company should os’ lab become?
        </p>
        <p className="mt-6">
          We must confront world-class competition,
          and benchmark ourselves against the most advanced research and engineering organizations in the United States.
          Only then can we honestly understand our position,
          rather than remain satisfied with local advantages.
        </p>
        <p className="mt-6">
          In recent years, discussions about “surpassing SOTA” and “surpassing certain giants” have been everywhere.
          But we also see clearly that optimizing a model with the goal of meeting metrics
          is not the same as true intelligence.
          This conceptual confusion can only slow the overall progress toward AGI.
        </p>
        <p className="mt-6">
          Therefore, os’ lab will not sacrifice long-term and difficult technical ascent for short-term KPIs.
          AGI is an exploration with an extremely high threshold and an extremely high density of intelligence.
          It is not a contest of scale,
          but the result of direction, patience, and choices.
        </p>
        <p className="mt-6">
          Today, we are finally beginning to truly have tools
          that learn not “labels,” but “states.”
        </p>
        <p className="mt-6">
          But we must remain clear-eyed at all times:
          under this technical direction,
          os’ lab will keep a small team with high intelligence density,
          and will only bring in core research and engineering talent capable of exploratory development.
        </p>
        <p className="mt-6">
          In the new year, os’ lab will continue to move forward quietly but firmly.
          Because what truly matters
          deserves to be completed seriously, slowly, and thoroughly.
        </p>
        <p className="mt-6">CEO Kenji OHSAWA</p>
      </Section>
    </div>
  );
}
