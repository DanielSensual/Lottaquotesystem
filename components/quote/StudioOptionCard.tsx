type StudioOptionCardProps = {
  name: string;
  priceLabel: string;
  description: string;
  setupNote: string;
  selected?: boolean;
  onSelect?: () => void;
};

export default function StudioOptionCard({
  name,
  priceLabel,
  description,
  setupNote,
  selected = false,
  onSelect
}: StudioOptionCardProps) {
  return (
    <article
      className={[
        "pdf-card rounded-[1.75rem] border p-6 transition-all duration-300",
        selected ? "border-white/20 bg-white/[0.06] ring-1 ring-white/20" : "border-white/10 bg-white/[0.03]"
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="pdf-accent mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500">
            Studio Option
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{name}</h3>
        </div>
        <div className="pdf-pill rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-zinc-100">
          {priceLabel}
        </div>
      </div>

      <p className="pdf-muted mt-6 text-sm leading-7 text-zinc-400">{description}</p>
      <p className="pdf-soft mt-4 text-sm leading-6 text-zinc-500">{setupNote}</p>

      {onSelect ? (
        <button
          type="button"
          onClick={onSelect}
          className={[
            "mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
            selected
              ? "bg-zinc-100 text-zinc-950"
              : "border border-white/10 bg-transparent text-zinc-100 hover:border-white/20 hover:bg-white/[0.04]"
          ].join(" ")}
        >
          {selected ? "Selected" : "Use in estimate"}
        </button>
      ) : null}
    </article>
  );
}

