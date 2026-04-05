import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.14em] uppercase transition-all duration-300";

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ariaLabel,
  target,
  rel,
  type = "button"
}: CTAButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
      : "border border-white/10 bg-transparent text-zinc-100 hover:border-white/20 hover:bg-white/[0.04]";

  const composedClassName = [buttonClassName, variantClassName, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={composedClassName} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={composedClassName}>
      {children}
    </button>
  );
}

