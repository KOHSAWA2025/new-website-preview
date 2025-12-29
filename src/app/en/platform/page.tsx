import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "A ZOOOO-based application layer built by os’ lab to compute functional cellular response under intervention.",
};

export default function EnPlatformPage() {
  redirect("/en/solution");
}
