import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  description:
    "os’ lab co., ltd corporate information.",
};

export default function AboutPage() {
  redirect("/en/about");
}
