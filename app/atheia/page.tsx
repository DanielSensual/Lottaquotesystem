import type { Metadata } from "next";
import AtheiaQuotePageClient from "@/components/quote/AtheiaQuotePageClient";

export const metadata: Metadata = {
  title: "ATHEIA Brand Photoshoot",
  description:
    "Premium quote and pre-booking page for the ATHEIA brand photoshoot offer.",
  alternates: {
    canonical: "/atheia"
  }
};

export default function AtheiaPage() {
  return <AtheiaQuotePageClient />;
}

