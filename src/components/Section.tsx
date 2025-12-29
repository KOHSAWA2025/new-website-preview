import type { ReactNode } from "react";

import { FadeIn } from "@/components/FadeIn";

export function Section({
  title,
  uppercase = true,
  children,
}: {
  title: string;
  uppercase?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="py-[72px] sm:py-[88px]">
      <FadeIn>
        <div className="max-w-[720px]">
          <h2 className="text-xs font-medium tracking-[0.32em] text-neutral-600">
            {uppercase ? title.toUpperCase() : title}
          </h2>
          <div className="mt-7 text-[15px] leading-8 text-neutral-900 sm:text-base">
            {children}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
