import type { Metadata, Viewport } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ScrollUp } from "@/components/layout/ScrollUp";

/**
 * Kumbh Sans is the whole site's typeface — headings and body alike (Plan.md §5).
 * It's a variable font, so a single import covers the full 300–800 weight range
 * the components lean on (semibold/bold/extrabold) with no per-weight requests.
 */
const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Codex — Excellent IT Services for Your Success",
    template: "%s · Codex",
  },
  description:
    "Codex builds the platforms, security and infrastructure modern teams run on — reliable systems delivered with clarity.",
  keywords: ["Codex", "IT services", "cyber security", "web development"],
  openGraph: {
    title: "Codex — Excellent IT Services for Your Success",
    description:
      "Codex builds the platforms, security and infrastructure modern teams run on.",
    siteName: "Codex",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3c72fc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${kumbhSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <CustomCursor />
        <SiteHeader />
        <div id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </div>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
