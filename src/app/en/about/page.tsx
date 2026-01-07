import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Corporate information for os’ lab co., ltd.",
};

export default function EnAboutPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          About
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          Corporate information
        </p>
      </div>

      <Section title="Company overview">
        <div className="space-y-4">
          <p>
            <span className="text-neutral-700">Establishment</span>
            <br />
            January 2025
          </p>
          <p>
            <span className="text-neutral-700">Address</span>
            <br />
            Twin Towers South 17F, 1-13-1 Umeda, Kita-ku, Osaka
          </p>
          <p>
            <span className="text-neutral-700">Phone</span>
            <br />
            06-7777-3966 (Main)
          </p>
        </div>
      </Section>

      <Section title="Leadership & advisors">
        <div className="space-y-6">
          <div>
            <p className="text-neutral-900">Chairman Jin TAKATSUKASA</p>
          </div>

          <div>
            <p className="text-neutral-700">President & CEO</p>
            <p className="mt-2">
              <Link
                href="/en/about/kenji-ohsawa"
                className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
              >
                Kenji OHSAWA
              </Link>
            </p>
          </div>

          <div>
            <p className="text-neutral-700">Technical Advisors</p>
            <p className="mt-2">
              <Link
                href="/en/about/shinichi-matsumoto"
                className="text-neutral-900 underline decoration-black/20 hover:text-neutral-950"
              >
                Shinichi MATSUMOTO
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10">
          <Link
            href="/en/about/president"
            className="text-neutral-800 underline decoration-black/20 hover:text-neutral-950"
          >
            Message from the CEO
          </Link>
        </p>
      </Section>
    </div>
  );
}
