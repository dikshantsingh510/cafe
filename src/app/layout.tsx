import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";


import "./globals.css";

const DMSans = DM_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Cafe",
  description: "This is a challange project from devchallanges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
