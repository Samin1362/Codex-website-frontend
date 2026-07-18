import Link from "next/link";
import { SITE } from "@/lib/content";

type LogoProps = {
  /** `light` = white mark + white text (header wedge); `brand` = blue mark + white text (footer). */
  variant?: "light" | "brand";
  className?: string;
};

/**
 * Codex wordmark. The mark is a network-node "X" — placeholder for the real
 * Codex logo (Plan.md open question #2). Two colourways cover both placements:
 * the white-on-wedge header and the blue-on-dark footer.
 */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const mark = variant === "brand" ? "text-primary" : "text-white";

  return (
    <Link
      href="#home"
      className={`inline-flex items-center gap-[10px] ${className}`.trim()}
      aria-label={`${SITE.name} home`}
    >
      <LogoMark className={`h-9 w-9 shrink-0 ${mark}`} />
      <span className="font-heading text-[26px] font-extrabold tracking-[-1px] text-white">
        {SITE.name}
      </span>
    </Link>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  // Five nodes on an X, linked through the centre. currentColor drives the fill.
  const nodes: [number, number][] = [
    [20, 20],
    [6, 6],
    [34, 6],
    [6, 34],
    [34, 34],
  ];
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.4" opacity="0.9">
        <path d="M20 20 6 6M20 20 34 6M20 20 6 34M20 20 34 34" />
      </g>
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 5 : 4} fill="currentColor" />
      ))}
    </svg>
  );
}
