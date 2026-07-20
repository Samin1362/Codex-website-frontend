import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  /** `lift` is the hero's raised CTA; `plain` is every other gradient button. */
  variant?: "plain" | "lift";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const BASE =
  "inline-flex items-center gap-[10px] gradient-brand text-white font-bold transition";

/**
 * The template's one button: a 135° brand gradient, sharp (zero-radius) corners,
 * and a trailing arrow. This design is deliberately not rounded.
 */
export function Button({
  children,
  href,
  variant = "plain",
  withArrow = true,
  className = "",
  type = "button",
}: ButtonProps) {
  const variantClass =
    variant === "lift"
      ? "px-[34px] py-[18px] text-base shadow-cta hover:-translate-y-[3px]"
      : "px-7 py-4 text-copy hover:brightness-110";

  const classes = `${BASE} ${variantClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M0 5h16M12.5 1 17 5l-4.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
