import type { CSSProperties } from "react";

type PlaceholderProps = {
  /** Short label for what real photo lands here in Phase 5. */
  label?: string;
  className?: string;
  rounded?: string;
  style?: CSSProperties;
};

/**
 * Stand-in for the template's photography (Plan.md Tier D — imagery is the lossy
 * part, replaced in Phase 5). A brand-tinted gradient with a soft grid so the
 * composition reads without shipping a broken <img>.
 */
export function Placeholder({
  label,
  className = "",
  rounded = "rounded-[6px]",
  style,
}: PlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#dbe4fb,#c2d0f5_55%,#aebff0)] ${rounded} ${className}`.trim()}
      style={style}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(#ffffff55_1px,transparent_1px),linear-gradient(90deg,#ffffff55_1px,transparent_1px)] [background-size:26px_26px]"
      />
      {label && (
        <span className="relative z-10 px-3 text-center text-[13px] font-semibold uppercase tracking-[1.5px] text-primary-dark/70">
          {label}
        </span>
      )}
    </div>
  );
}
