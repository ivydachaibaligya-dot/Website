import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AUREVANT | Global Business Support",
  description: "AUREVANT is a boutique virtual assistant agency providing premium global business support to US companies: executive administration, roofing and home services support, lead generation, CRM management, customer support, and digital operations.",
  keywords: "AUREVANT, virtual assistant agency, global business support, executive assistant, administrative support, roofing virtual assistant, home services support, lead generation, CRM management, appointment setting, customer support, website support",
  authors: [{ name: "AUREVANT" }],
  creator: "AUREVANT",
  publisher: "AUREVANT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AUREVANT | Global Business Support",
    description: "Your Business. Our Commitment. Premium virtual assistant support for US businesses.",
    siteName: "AUREVANT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREVANT | Global Business Support",
    description: "Your Business. Our Commitment. Premium virtual assistant support for US businesses.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
