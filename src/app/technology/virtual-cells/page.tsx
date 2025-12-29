import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Virtual Cells",
  description: "Virtual Cells: a structurally grounded reasoning system under explicit constraints.",
};

export default function TechnologyVirtualCellsRedirectPage() {
  redirect("/en/technology/virtual-cells");
}

