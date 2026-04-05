import type { Metadata } from "next";
import ConversationExportClient from "@/components/quote/ConversationExportClient";

export const metadata: Metadata = {
  title: "Conversation Export",
  description: "Paste conversation text into a clean layout and export it as a PDF.",
  alternates: {
    canonical: "/conversation-export"
  }
};

export default function ConversationExportPage() {
  return <ConversationExportClient />;
}

