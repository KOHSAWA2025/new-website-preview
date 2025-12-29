import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Kenpou ODA",
};

export default function EnOdaKenpouPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Kenpou ODA (織田憲法)
        </h1>
      </div>

      <Section title="Biography">
        <p>Details will be added.</p>
      </Section>

      <Section title="Role at os’ lab">
        <p>Details will be added.</p>
      </Section>
    </div>
  );
}
