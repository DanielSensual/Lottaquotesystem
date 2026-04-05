import Image from "next/image";
import type { QuoteImageConfig } from "@/lib/atheiaQuoteData";

type VisualStyleCardProps = {
  title: string;
  description: string;
  details: string[];
  image: QuoteImageConfig;
};

export default function VisualStyleCard({
  title,
  description,
  details,
  image
}: VisualStyleCardProps) {
  return (
    <article className="pdf-card overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
      <div className="relative">
        {image.src ? (
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label={image.alt}
            className="pdf-image flex aspect-[4/5] items-end rounded-b-[1.25rem] border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-5"
          >
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
              {image.placeholderLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="pdf-accent mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500">
          Visual Direction
        </p>
        <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-zinc-50">
          {title}
        </h3>
        <p className="pdf-muted mt-3 text-sm leading-7 text-zinc-300">{description}</p>

        <ul className="mt-6 space-y-3">
          {details.map((detail) => (
            <li
              key={detail}
              className="pdf-muted border-l border-white/10 pl-4 text-sm leading-6 text-zinc-400"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

