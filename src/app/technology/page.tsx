import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Structure-induced computation: constraints over correlations, with geometry, conservation, and dynamics.",
};

export default function TechnologyPage() {
  redirect("/en/technology");
}
