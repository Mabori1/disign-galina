import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const jostFonts = localFont({
  src: [
    {
      path: "./fonts/DMSerifDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
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
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn(jostFonts.className, "scroll-smooth")}
    >
      <body
        className={cn(
          "relative flex size-full min-h-screen flex-col font-sans antialiased",
        )}
      >
        <GoogleAnalytics gaId="G-E9RQ686PDL" />
        <Header />
        <main className="mx-auto flex size-full max-w-7xl flex-1 flex-col bg-white px-5 sm:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
