import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "織田憲法",
};

export default function JaOdaKenpouPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          織田憲法（Oda Kenpou）
        </h1>
      </div>

      <Section title="略歴">
        <p>詳細は追って掲載します。</p>
      </Section>

      <Section title="os’ labでの役割">
        <p>詳細は追って掲載します。</p>
      </Section>
    </div>
  );
}
