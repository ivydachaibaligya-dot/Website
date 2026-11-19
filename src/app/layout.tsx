import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iaurevant.com"),
  title: "Philippines-Based Virtual Assistant | Roofing & Business Support | Ivy Embone",
  description: "Ivy Embone is a Philippines-based virtual assistant supporting U.S. roofing teams and businesses with administrative coordination, CRM support, website management, and lead generation.",
  keywords: "Ivy Embone, Philippines Virtual Assistant, Virtual Assistant Philippines, Roofing Virtual Assistant, Roofing Operations Support, Administrative Virtual Assistant, CRM Support, Website Management, Lead Generation",
  authors: [{ name: "Ivy Embone" }],
  creator: "Ivy Embone",
  publisher: "Ivy Embone",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { title: "Philippines-Based Virtual Assistant | Roofing & Business Support | Ivy Embone", description: "Administrative support, U.S. roofing operations coordination, CRM assistance, website management, and lead generation from Ivy Embone in the Philippines.", siteName: "Ivy Embone", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Philippines-Based Virtual Assistant | Roofing & Business Support | Ivy Embone", description: "Administrative support, U.S. roofing operations coordination, CRM assistance, website management, and lead generation from Ivy Embone in the Philippines." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="h-full antialiased scroll-smooth"><head><link rel="icon" type="image/svg+xml" href="/favicon.svg" /></head><body className="min-h-full flex flex-col">{children}</body></html>;
}
