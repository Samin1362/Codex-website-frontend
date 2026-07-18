type EyebrowTone = "primary" | "light" | "soft";

type EyebrowProps = {
  children: string;
  /** `light` for photo/gradient backgrounds, `soft` for the near-black sections. */
  tone?: EyebrowTone;
  align?: "left" | "center";
  className?: string;
};

const TONE: Record<
  EyebrowTone,
  { text: string; outline: string; filled: string }
> = {
  primary: {
    text: "text-primary",
    outline: "border-primary",
    filled: "bg-primary",
  },
  light: {
    text: "text-white",
    outline: "border-white",
    filled: "bg-white",
  },
  soft: {
    text: "text-primary-soft",
    outline: "border-primary-soft",
    filled: "bg-primary-soft",
  },
};

/**
 * The template's section label: a two-pill mark (one outlined, one filled)
 * followed by a wide-tracked uppercase caption.
 */
export function Eyebrow({
  children,
  tone = "primary",
  align = "left",
  className = "",
}: EyebrowProps) {
  const { text, outline, filled } = TONE[tone];

  return (
    <div
      className={`flex items-center gap-[11px] ${
        align === "center" ? "justify-center" : ""
      } ${className}`.trim()}
    >
      <span className="relative inline-block h-4 w-[42px] shrink-0" aria-hidden>
        <span
          className={`absolute left-0 top-0 h-4 w-[26px] rounded-full border-[1.5px] ${outline}`}
        />
        <span
          className={`absolute right-0 top-0 h-4 w-[27px] rounded-full ${filled}`}
        />
      </span>
      <span className={`text-[15px] font-bold uppercase tracking-[2px] ${text}`}>
        {children}
      </span>
    </div>
  );
}
