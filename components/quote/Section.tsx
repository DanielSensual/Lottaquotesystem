import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  align?: "left" | "center";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  align = "left"
}: SectionProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <section
      id={id}
      className={["rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={["mb-8 flex flex-col gap-3", alignmentClass].filter(Boolean).join(" ")}>
        {eyebrow ? (
          <p className="pdf-accent text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-zinc-50 md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="pdf-muted max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      <div className={contentClassName}>{children}</div>
    </section>
  );
}

