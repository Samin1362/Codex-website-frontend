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

  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`.trim()}>
      <Eyebrow tone={tone} align={align} className="mb-4">
        {eyebrow}
      </Eyebrow>
      {/* Centered titles get a generous cap so single-line headings
          (e.g. "Our Development Process") don't break awkwardly; the lede
          stays at a comfortable reading width below it. */}
      <h2
        className={`font-extrabold text-balance ${
          narrow ? "text-h2-narrow" : "text-h2"
        } ${centered ? "mx-auto max-w-[820px]" : ""} ${onDark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-[18px] text-base ${
            centered ? "mx-auto max-w-[620px]" : ""
          } ${onDark ? "text-white/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
