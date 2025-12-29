import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "A small elite team building a paradigm-level foundation model (ZOOOO) and an application layer on top of it.",
};

export default function CareersPage() {
  redirect("/en/careers");
}
