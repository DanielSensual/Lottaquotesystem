type QuoteCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

export default function QuoteCard({ title, description, eyebrow, className }: QuoteCardProps) {
  return (
    <article
      className={[
        "pdf-card rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p className="pdf-accent mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-lg font-medium tracking-[-0.03em] text-zinc-50">{title}</h3>
      {description ? (
        <p className="pdf-muted mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      ) : null}
    </article>
  );
}

