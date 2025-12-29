import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import shinichiPhoto from "@/pic/shinnichi.jpg";

export const metadata: Metadata = {
  title: "Shinichi MATSUMOTO",
};

export default function EnShinichiMatsumotoPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Shinichi MATSUMOTO (松本慎一)
        </h1>

        <div className="mt-8">
          <Image
            src={shinichiPhoto}
            alt="Shinichi MATSUMOTO"
            className="h-auto w-40 rounded-sm object-contain sm:w-48"
            priority
          />
        </div>
      </div>

      <Section title="Biography">
        <p>
          A surgeon-scientist leading the integration of regenerative medicine
          and medical device engineering.
        </p>
        <p className="mt-6">
          He serves as Visiting Professor at the Graduate School of Medicine,
          Kobe University, Visiting Professor at Meiji University’s
          Research and Intellectual Property Strategy Organization,
          and Research Advisor at the National Center for Global Health and Medicine.
        </p>
        <p className="mt-6">
          With the goal of curing type 1 diabetes,
          he leads the development of bioartificial islet transplantation
          using porcine islets.
          Through optimization of immune-isolation encapsulation
          and angiogenesis-inducing materials,
          his research aims to achieve islet transplantation
          without the need for immunosuppressive drugs.
        </p>
        <p className="mt-6">
          He is also engaged in automating islet isolation and evaluation processes
          using AI, as well as developing predictive models
          for post-transplant islet engraftment,
          thereby accelerating the standardization and industrialization
          of regenerative medicine.
        </p>
      </Section>

      <Section title="Role at os’ lab">
        <p>
          During the early phase of the company’s establishment in 2025,
          he served as Representative Director and CEO,
          and currently acts as a Technical Advisor.
        </p>
        <p className="mt-6">
          He supports the development of products for diabetes and gout,
          as well as functional evaluation of plant-derived compounds,
          by integrating medical expertise with data-driven analysis
          based on P.P.N. technology and AI algorithms.
        </p>
        <p className="mt-6">
          Guided by the principle of “creating future medicine
          through the fusion of biology and data,”
          he promotes scientifically grounded product development
          and social implementation,
          contributing to next-generation healthcare
          through the integration of clinical practice,
          research, and industry.
        </p>
      </Section>
    </div>
  );
}
