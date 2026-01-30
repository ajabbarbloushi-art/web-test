import type { Metadata } from "next";
import { inter, instrumentSerif } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AINAR | AI & Sustainability",
  description: "Where AI meets sustainability to transform communities behaviors.",
};

import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, instrumentSerif.variable, "antialiased")}>
      <body className="bg-background text-foreground">
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
