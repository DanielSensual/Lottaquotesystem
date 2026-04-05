"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CTAButton from "@/components/quote/CTAButton";
import { buildPdfDocumentTitle, conversationPdfPageStyle, formatPdfDate } from "@/lib/pdf";

function getInitialDateValue() {
  return new Date().toISOString().slice(0, 10);
}

function splitIntoParagraphs(value: string) {
  return value
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function ConversationExportClient() {
  const printableRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState("ATHEIA Client Conversation");
  const [dateValue, setDateValue] = useState(getInitialDateValue);
  const [conversationText, setConversationText] = useState("");

  const paragraphs = splitIntoParagraphs(conversationText);

  const handleDownloadPdf = useReactToPrint({
    contentRef: printableRef,
    documentTitle: () => buildPdfDocumentTitle(title || "conversation-export", dateValue),
    pageStyle: conversationPdfPageStyle
  });

  return (
    <main className="min-h-screen pb-16 pt-8 text-zinc-100 md:pt-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">Conversation Export</p>
          <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-zinc-50 md:text-6xl">
            Paste conversation text and export a clean PDF
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-300">
            Use this utility for proposal notes, client messages, or copied chat transcripts. The in-app UI stays dark, while the exported PDF is formatted on a white page with readable multi-page typography.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[400px_minmax(0,1fr)]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="space-y-5">
              <div>
                <label htmlFor="conversation-title" className="mb-2 block text-sm font-medium text-zinc-200">
                  Title
                </label>
                <input
                  id="conversation-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/20"
                  placeholder="ATHEIA Client Conversation"
                />
              </div>

              <div>
                <label htmlFor="conversation-date" className="mb-2 block text-sm font-medium text-zinc-200">
                  Date
                </label>
                <input
                  id="conversation-date"
                  type="date"
                  value={dateValue}
                  onChange={(event) => setDateValue(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/20"
                />
              </div>

              <div>
                <label htmlFor="conversation-text" className="mb-2 block text-sm font-medium text-zinc-200">
                  Conversation
                </label>
                <textarea
                  id="conversation-text"
                  value={conversationText}
                  onChange={(event) => setConversationText(event.target.value)}
                  className="min-h-[20rem] w-full rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-zinc-100 outline-none focus:border-white/20"
                  placeholder="Paste the conversation text here. Separate paragraphs with blank lines for cleaner PDF formatting."
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <CTAButton href="/atheia" variant="secondary">
                  Back to Quote
                </CTAButton>
                <CTAButton onClick={handleDownloadPdf}>Download PDF</CTAButton>
                <CTAButton onClick={() => setConversationText("")} variant="secondary">
                  Clear Text
                </CTAButton>
              </div>
            </div>
          </section>

          <div
            ref={printableRef}
            data-pdf-root="true"
            data-pdf-kind="conversation"
            className="pdf-card overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 text-stone-900"
          >
            <div className="border-b border-stone-200 px-6 py-5 md:px-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Conversation Preview</p>
              <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-stone-900">
                  {title || "Untitled Conversation"}
                </h2>
                <p className="text-sm text-stone-500">{formatPdfDate(dateValue)}</p>
              </div>
            </div>

            <article className="pdf-conversation px-6 py-8 md:px-8">
              {paragraphs.length > 0 ? (
                <div className="space-y-5">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className="whitespace-pre-line text-[15px] leading-8 text-stone-800"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-stone-300 bg-white p-6">
                  <p className="text-sm leading-7 text-stone-500">
                    Paste conversation text into the textarea to build a client-facing export. Blank lines become paragraph breaks in the PDF.
                  </p>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
