import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import yukioPhoto from "@/pic/yukio.jpg";

export const metadata: Metadata = {
  title: "Yukio OHSAWA",
};

export default function EnYukioOhsawaPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Yukio OHSAWA (大澤幸生)
        </h1>

        <div className="mt-8">
          <Image
            src={yukioPhoto}
            alt="Yukio OHSAWA"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="Biography">
        <p>
          Professor
          <br />
          Department of Systems Innovation,
          <br />
          Graduate School of Engineering, The University of Tokyo
          <br />
          (also affiliated with Technology Management for Innovation)
        </p>

        <p className="mt-6">
          His original methodologies for data-driven utilization
          have been adopted internationally by government ministries,
          including METI and MLIT, as well as by private enterprises
          and educational and research institutions.
        </p>
      </Section>

      <Section title="Role at os’ lab">
        <p>
          Since the company’s establishment in 2025,
          he has served as an AI technology consultant,
          providing technical guidance from both
          research and social implementation perspectives.
        </p>
      </Section>
    </div>
  );
}
