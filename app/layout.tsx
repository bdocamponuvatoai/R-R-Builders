import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { JsonLd } from "@/components/site/primitives";
import { site } from "@/content/site";
import { isIndexable, siteUrl } from "@/lib/env";
import "./globals.css";

// Archivo's variable width axis drives both the condensed headlines and the expanded wordmark.
const sans = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R & R Rebuilders | Roofing & Home Repairs",
    template: "%s | R & R Rebuilders",
  },
  description: site.description,
  applicationName: site.name,
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1916,
        height: 821,
        alt: "New England home with a charcoal pitched roof in warm evening light",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f2efe7",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/images/home-hero.jpg`,
  telephone: site.tel,
  email: site.email,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh pb-16 font-sans antialiased md:pb-0">
        <a
          href="#main"
          className="fixed top-3 left-3 z-50 -translate-y-24 rounded-[3px] bg-forest-900 px-5 py-3 text-sm font-medium text-bone-50 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
