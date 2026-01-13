import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of os’ lab co., ltd.",
};

export default function EnPrivacyPolicyPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          This Privacy Policy describes how os’ lab co., ltd (&quot;we&quot;, &quot;us&quot;) handles
          personal data collected through this website.
        </p>
      </div>

      <Section title="Purpose of collection">
        <p>
          We collect personal data solely for the purpose of responding to
          inquiries submitted through our Contact form and for conducting related
          email communication.
        </p>
      </Section>

      <Section title="Types of data collected">
        <p>Through the Contact form, we may collect the following data:</p>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          <li>Inquiry category</li>
          <li>Name</li>
          <li>Email address</li>
          <li>Organization (if provided)</li>
          <li>Message content</li>
          <li>Language of the page (EN or JP)</li>
          <li>Phone number (if provided)</li>
        </ul>
      </Section>

      <Section title="Method of use">
        <p>
          Personal data collected via the Contact form is used only for email
          communication necessary to respond to the inquiry.
        </p>
      </Section>

      <Section title="Data storage and retention">
        <p>
          We do not intentionally store personal data submitted through the
          Contact form beyond what is necessary for email delivery and response.
          Any retention that occurs is incidental to standard email operations.
        </p>
      </Section>

      <Section title="Third-party sharing">
        <p>
          We do not provide personal data to third parties, except where required
          by applicable laws and regulations.
        </p>
      </Section>

      <Section title="Security measures">
        <p>
          We implement reasonable technical and organizational safeguards to
          protect personal data against unauthorized access, alteration, loss, or
          leakage.
        </p>
      </Section>

      <Section title="User rights">
        <p>
          Where applicable, individuals may request access to, correction of, or
          deletion of their personal data. We will respond to such requests in a
          reasonable manner after confirming the identity of the requester.
        </p>
      </Section>

      <Section title="Contact for privacy inquiries">
        <p>
          For privacy-related inquiries, please contact:
          <br />
          <span className="text-neutral-800">contact@oslab.co.jp</span>
        </p>
      </Section>

      <Section title="Governing law and jurisdiction">
        <p>
          This Privacy Policy is governed by the laws of Japan. Any disputes
          arising in connection with this Privacy Policy shall be subject to the
          exclusive jurisdiction of the courts of Japan.
        </p>
      </Section>
    </div>
  );
}
