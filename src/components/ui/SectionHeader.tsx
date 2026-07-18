import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** `light` on photo/gradient, `soft` on the near-black sections. */
  tone?: "primary" | "light" | "soft";
  /** Narrower h2 for the two-column sections (About, Offering). */
  narrow?: boolean;
  className?: string;
};

/** Eyebrow + h2 (+ optional lede) — the header block every section opens with. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "primary",
  narrow = false,
  className = "",
}: SectionHeaderProps) {
  const onDark = tone !== "primary";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-[640px] text-center" : ""} ${className}`.trim()}
    >
      <Eyebrow tone={tone} align={align} className="mb-4">
        {eyebrow}
      </Eyebrow>
      <h2
        className={`font-extrabold text-balance ${
          narrow ? "text-h2-narrow" : "text-h2"
        } ${onDark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-[18px] text-base ${
            onDark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
