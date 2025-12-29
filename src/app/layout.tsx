import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "os’ lab co., ltd",
    template: "%s — os’ lab co., ltd",
  },
  description:
    "Compute the cell. Discover the drug. os’ lab co., ltd builds the ZOOOO foundation model for medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-transparent">
      <body
        className={`${geistSans.variable} min-h-dvh bg-transparent text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
