import type { ReactNode } from "react";

import { LocaleShell } from "@/components/LocaleShell";
import bg from "@/pic/bg.png";

export default function JaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen text-neutral-900"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <LocaleShell locale="ja">{children}</LocaleShell>
    </div>
  );
}
