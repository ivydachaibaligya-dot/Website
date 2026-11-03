import type { Metadata } from "next";
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
  title: "Ivy | Roofing Operations Virtual Assistant",
  description: "Expert Virtual Assistant specializing in roofing operations, administrative support, and business management for US-based roofing companies. Industry knowledge, reliability, and proven results.",
  keywords: "virtual assistant, roofing operations, administrative support, CRM management, lead generation, appointment setting, roofing industry, business support",
  authors: [{ name: "Ivy" }],
  creator: "Ivy",
  publisher: "Ivy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ivy | Roofing Operations Virtual Assistant",
    description: "Expert Virtual Assistant specializing in roofing operations and administrative support for US-based roofing companies.",
    siteName: "Ivy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy | Roofing Operations Virtual Assistant",
    description: "Expert Virtual Assistant specializing in roofing operations and administrative support.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
