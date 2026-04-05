type PricingCardProps = {
  title: string;
  priceLabel: string;
  description: string;
  selected?: boolean;
  actionLabel?: string;
  onAction?: () => void;
  featured?: boolean;
};

export default function PricingCard({
  title,
  priceLabel,
  description,
  selected = false,
  actionLabel,
  onAction,
  featured = false
}: PricingCardProps) {
  return (
    <article
      className={[
        "pdf-card rounded-[1.75rem] border p-6 transition-all duration-300",
        featured ? "border-white/20 bg-white/[0.06]" : "border-white/10 bg-white/[0.03]",
        selected ? "ring-1 ring-white/25" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="pdf-accent mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500">
            Pricing
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{title}</h3>
        </div>
        <div className="pdf-pill rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-zinc-100">
          {priceLabel}
        </div>
      </div>

      <p className="pdf-muted mt-6 max-w-xl text-sm leading-7 text-zinc-400">{description}</p>

      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className={[
            "mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
            selected
              ? "bg-zinc-100 text-zinc-950"
              : "border border-white/10 bg-transparent text-zinc-100 hover:border-white/20 hover:bg-white/[0.04]"
          ].join(" ")}
        >
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}

