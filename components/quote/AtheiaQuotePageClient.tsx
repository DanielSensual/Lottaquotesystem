"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CTAButton from "@/components/quote/CTAButton";
import PricingCard from "@/components/quote/PricingCard";
import QuoteCard from "@/components/quote/QuoteCard";
import Section from "@/components/quote/Section";
import StudioOptionCard from "@/components/quote/StudioOptionCard";
import VisualStyleCard from "@/components/quote/VisualStyleCard";
import { atheiaQuoteData } from "@/lib/atheiaQuoteData";
import { buildPdfDocumentTitle, quotePdfPageStyle } from "@/lib/pdf";

function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

export default function AtheiaQuotePageClient() {
  const printableRef = useRef<HTMLDivElement>(null);
  const [advancedEditsSelected, setAdvancedEditsSelected] = useState(false);
  const [selectedStudioId, setSelectedStudioId] = useState<string | null>(null);

  const selectedStudio =
    atheiaQuoteData.studioSection.options.find((option) => option.id === selectedStudioId) ?? null;
  const subtotal =
    atheiaQuoteData.pricing.baseShoot.price +
    (advancedEditsSelected ? atheiaQuoteData.pricing.advancedEdits.price : 0) +
    (selectedStudio?.price ?? 0);

  const totalLabel =
    selectedStudio && selectedStudio.price == null ? `${formatUsd(subtotal)} + studio rental` : formatUsd(subtotal);

  const handleDownloadPdf = useReactToPrint({
    contentRef: printableRef,
    documentTitle: () => buildPdfDocumentTitle(atheiaQuoteData.title),
    pageStyle: quotePdfPageStyle
  });

  return (
    <main className="min-h-screen pb-16 pt-8 text-zinc-100 md:pt-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-5 flex justify-end gap-3" data-pdf-hide="true">
          <CTAButton href="/conversation-export" variant="secondary">
            Conversation Export
          </CTAButton>
          <CTAButton onClick={handleDownloadPdf} variant="secondary">
            {atheiaQuoteData.cta.downloadLabel}
          </CTAButton>
        </div>

        <div ref={printableRef} data-pdf-root="true" data-pdf-kind="quote" className="space-y-6">
          <section className="pdf-card pdf-hero overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-6 md:p-8">
            <div className="pdf-hero-grid grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
              <div className="space-y-6">
                <p className="pdf-accent text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                  {atheiaQuoteData.heroEyebrow}
                </p>
                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold leading-none tracking-[-0.06em] text-zinc-50 md:text-7xl">
                    {atheiaQuoteData.title}
                  </h1>
                  <p className="pdf-muted max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                    {atheiaQuoteData.intro}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {atheiaQuoteData.mainOffer.supportingPoints.map((point) => (
                    <div
                      key={point}
                      className="pdf-pill rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3" data-pdf-hide="true">
                  <CTAButton href={atheiaQuoteData.cta.href}>{atheiaQuoteData.cta.label}</CTAButton>
                  <CTAButton onClick={handleDownloadPdf} variant="secondary">
                    {atheiaQuoteData.cta.downloadLabel}
                  </CTAButton>
                </div>
              </div>

              <aside className="pdf-card rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <p className="pdf-accent text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                  Main Offer
                </p>
                <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.05em] text-zinc-50">
                  {atheiaQuoteData.mainOffer.duration}
                </h2>
                <p className="pdf-muted mt-4 text-sm leading-7 text-zinc-400">
                  {atheiaQuoteData.mainOffer.summary}
                </p>
                <div className="pdf-divider mt-6 h-px w-full bg-white/10" />
                <div className="mt-6 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center justify-between gap-4">
                    <span className="pdf-muted">Base Shoot</span>
                    <span>{atheiaQuoteData.pricing.baseShoot.priceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="pdf-muted">Advanced Edits</span>
                    <span>{atheiaQuoteData.pricing.advancedEdits.priceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="pdf-muted">Studio Rental</span>
                    <span>Optional / varies</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <Section
            id="included"
            eyebrow="What’s Included"
            title="What the client gets"
            description="The offer covers premium brand content creation for digital storefronts, campaigns, and social delivery without unnecessary complexity."
          >
            <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
              <p className="pdf-accent text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                Shoot Scope
              </p>
              <p className="pdf-muted mt-4 max-w-3xl text-base leading-8 text-zinc-300">
                This is a 2-hour brand photoshoot. It includes 2 photographers, minimum 2 models, 1–2 locations, lifestyle + product + detail shots, and standard editing included.
              </p>
            </div>

            <div className="pdf-three-column grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {atheiaQuoteData.included.map((item, index) => (
                <QuoteCard key={item.id} eyebrow={`0${index + 1}`} title={item.label} description={item.detail} />
              ))}
            </div>
          </Section>

          <Section
            id="visual-direction"
            eyebrow="Visual Direction"
            title="Creative direction options"
            description="Three premium editorial routes the client can react to immediately, each designed to make the final imagery feel controlled, intentional, and brand-led."
          >
            <div className="pdf-three-column grid gap-5 lg:grid-cols-3">
              {atheiaQuoteData.visualDirections.map((direction) => (
                <VisualStyleCard
                  key={direction.id}
                  title={direction.title}
                  description={direction.description}
                  details={direction.details}
                  image={direction.image}
                />
              ))}
            </div>
          </Section>

          <Section
            id="pricing"
            eyebrow="Pricing"
            title="Simple pricing structure"
            description="The pricing is intentionally direct: a base shoot, an optional polished retouching add-on, and studio costs handled separately."
          >
            <div className="pdf-two-column grid gap-4 lg:grid-cols-2">
              <PricingCard
                title={atheiaQuoteData.pricing.baseShoot.title}
                priceLabel={atheiaQuoteData.pricing.baseShoot.priceLabel}
                description={atheiaQuoteData.pricing.baseShoot.description}
                featured
              />
              <PricingCard
                title={atheiaQuoteData.pricing.advancedEdits.title}
                priceLabel={atheiaQuoteData.pricing.advancedEdits.priceLabel}
                description={atheiaQuoteData.pricing.advancedEdits.description}
                selected={advancedEditsSelected}
                actionLabel={advancedEditsSelected ? "Included in estimate" : "Add to estimate"}
                onAction={() => setAdvancedEditsSelected((currentValue) => !currentValue)}
              />
            </div>
          </Section>

          <Section
            id="studio-option"
            eyebrow="Optional Studio Add-On"
            title={atheiaQuoteData.studioSection.title}
            description={atheiaQuoteData.studioSection.description}
          >
            <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
              <p className="pdf-accent text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                Studio Note
              </p>
              <p className="pdf-muted mt-4 text-sm leading-7 text-zinc-300">
                Studio rental is not included in the base price.
              </p>
              <p className="pdf-soft mt-3 text-sm leading-7 text-zinc-500">
                {atheiaQuoteData.studioSection.setupHourNote}
              </p>
            </div>

            <div className="pdf-two-column grid gap-4 lg:grid-cols-2">
              {atheiaQuoteData.studioSection.options.map((option) => (
                <StudioOptionCard
                  key={option.id}
                  name={option.name}
                  priceLabel={option.priceLabel}
                  description={option.description}
                  setupNote={option.setupNote}
                  selected={selectedStudioId === option.id}
                  onSelect={() =>
                    setSelectedStudioId((currentValue) => (currentValue === option.id ? null : option.id))
                  }
                />
              ))}
            </div>
          </Section>

          <Section
            id="estimated-total"
            eyebrow="Estimated Total"
            title={atheiaQuoteData.estimatedTotal.title}
            description={atheiaQuoteData.estimatedTotal.description}
          >
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
              <div className="pdf-card rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <ul className="space-y-4">
                  {atheiaQuoteData.estimatedTotal.formula.map((item) => (
                    <li
                      key={item}
                      className="pdf-muted flex items-start justify-between gap-4 border-b border-white/8 pb-4 text-sm leading-6 text-zinc-300 last:border-b-0 last:pb-0"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="pdf-card rounded-[1.75rem] border border-white/10 bg-zinc-100 p-6 text-zinc-950">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500">
                  Current Estimate
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{totalLabel}</p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-600">Base shoot</span>
                    <span>{atheiaQuoteData.pricing.baseShoot.priceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-600">Advanced edits</span>
                    <span>
                      {advancedEditsSelected ? atheiaQuoteData.pricing.advancedEdits.priceLabel : "Not selected"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-600">Studio rental</span>
                    <span>
                      {selectedStudio ? `${selectedStudio.name}: ${selectedStudio.priceLabel}` : "Optional / varies"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-600">Setup hour</span>
                    <span>{selectedStudio ? "Required" : "If studio is selected"}</span>
                  </div>
                </div>
              </aside>
            </div>
          </Section>

          <Section
            id="pre-book"
            eyebrow="Pre-Book CTA"
            title="Secure the shoot window"
            description="The pre-book step keeps the process simple while leaving room for final studio and production decisions."
            className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))]"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="pdf-muted text-base leading-8 text-zinc-300">{atheiaQuoteData.cta.note}</p>
              </div>
              <div className="flex flex-wrap gap-3" data-pdf-hide="true">
                <CTAButton href={atheiaQuoteData.cta.href}>{atheiaQuoteData.cta.label}</CTAButton>
                <CTAButton onClick={handleDownloadPdf} variant="secondary">
                  {atheiaQuoteData.cta.downloadLabel}
                </CTAButton>
              </div>
              <div className="hidden text-sm text-zinc-700 print:block">
                Booking link: {atheiaQuoteData.cta.href}
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

