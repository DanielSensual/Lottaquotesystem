import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atheia-quote.vercel.app"),
  title: {
    default: "ATHEIA Brand Photoshoot",
    template: "%s | ATHEIA"
  },
  description:
    "Premium quote and pre-booking page for the ATHEIA brand photoshoot offer.",
  openGraph: {
    title: "ATHEIA Brand Photoshoot",
    description:
      "Premium quote and pre-booking page for the ATHEIA brand photoshoot offer.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ATHEIA Brand Photoshoot",
    description:
      "Premium quote and pre-booking page for the ATHEIA brand photoshoot offer."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

