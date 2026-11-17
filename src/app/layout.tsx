import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivy Embone | Administrative & Construction Operations Support",
  description: "Personal portfolio of Ivy Embone, Virtual Assistant supporting administration, construction and roofing operations, CRM coordination, customer support, and lead generation.",
  keywords: "Ivy Embone, Virtual Assistant, Administrative Support, Construction Operations, Roofing Support, CRM Coordination, Lead Generation",
  authors: [{ name: "Ivy Embone" }],
  creator: "Ivy Embone",
  publisher: "Ivy Embone",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { title: "Ivy Embone | Virtual Assistant & Operations Support", description: "Practical, organized support for busy teams.", siteName: "Ivy Embone", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Ivy Embone | Virtual Assistant & Operations Support", description: "Practical, organized support for busy teams." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="h-full antialiased scroll-smooth"><head><link rel="icon" href="/favicon.ico" /></head><body className="min-h-full flex flex-col">{children}</body></html>;
}
