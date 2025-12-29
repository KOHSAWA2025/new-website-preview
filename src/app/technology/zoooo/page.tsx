import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ZOOOO",
  description: "ZOOOO: a structure- and constraint-centered reasoning framework.",
};

export default function TechnologyZooooRedirectPage() {
  redirect("/en/technology/zoooo");
}

