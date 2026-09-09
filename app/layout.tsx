import type { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  themeColor: '#080B11',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "All Panel Exch | India's Trusted Sports Exchange & Cricket ID Platform",
  description:
    "All Panel Exch provides secure online cricket IDs, sports betting exchanges, live casino, and 24/7 customer support. Fast payouts and verified accounts.",
  keywords: [
    "All Panel Exch",
    "AllPanelExch",
    "Cricket ID",
    "Sports Exchange India",
    "IPL Cricket ID",
    "Live Casino",
    "All Panel ID Provider",
    "Online Betting ID",
  ],
  authors: [{ name: "All Panel Exch Official" }],
  creator: "All Panel Exch",
  publisher: "All Panel Exch",
  metadataBase: new URL("https://allpaanelexch.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "All Panel Exch | India's Trusted Sports Exchange & Cricket ID Platform",
    description:
      "All Panel Exch provides secure online cricket IDs, sports betting exchanges, live casino, and 24/7 customer support. Fast payouts and verified accounts.",
    url: "https://allpaanelexch.org",
    siteName: "All Panel Exch",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "All Panel Exch - India's Trusted Sports Exchange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Panel Exch | India's Trusted Sports Exchange & Cricket ID Platform",
    description:
      "All Panel Exch provides secure online cricket IDs, sports betting exchanges, live casino, and 24/7 customer support.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#080B11] text-gray-100 antialiased selection:bg-amber-500 selection:text-gray-950">
        {children}
      </body>
    </html>
  );
}
