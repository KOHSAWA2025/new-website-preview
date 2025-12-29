import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "A ZOOOO-based application layer for computing functional cellular responses under intervention.",
};

export default function PlatformPage() {
  redirect("/en/solution");
}
