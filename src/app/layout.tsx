import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightSide Solutions - Professional Virtual Assistant Services",
  description: "Scale your business with expert virtual assistant services. Administrative support, email management, CRM management, lead generation, and more for business owners, realtors, and contractors.",
  keywords: "virtual assistant, administrative support, email management, CRM management, lead generation, business support, remote assistant",
  authors: [{ name: "BrightSide Solutions" }],
  creator: "BrightSide Solutions",
  publisher: "BrightSide Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brightsidesolutions.com"),
  openGraph: {
    title: "BrightSide Solutions - Professional Virtual Assistant Services",
    description: "Scale your business with expert virtual assistant services. Administrative support, email management, CRM management, lead generation, and more.",
    url: "https://brightsidesolutions.com",
    siteName: "BrightSide Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSide Solutions - Professional Virtual Assistant Services",
    description: "Scale your business with expert virtual assistant services.",
    creator: "@brightsidesolutions",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
