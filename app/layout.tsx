import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const jostFonts = localFont({
  src: [
    {
      path: "./fonts/Jost-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Jost-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Jost-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Ledger-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Disign Project",
  description: "Студия дизайна Галины Макеевой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={jostFonts.className}>
      <body className={cn("relative font-sans antialiased")}>
        <GoogleAnalytics gaId="G-E9RQ686PDL" />
        <Header />
        {children}
      </body>
    </html>
  );
}
