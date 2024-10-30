import type { Metadata } from "next";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { fontInter } from "@/config/font";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontInter.variable} font-inter min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
