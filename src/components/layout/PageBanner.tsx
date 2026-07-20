import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PAGES, type PageKey } from "@/lib/content";

/**
 * The shared sub-page banner (Plan.md §4.2). A slim echo of the Hero: the same
 * navy gradient + decorative triangle/mesh shapes, carrying the page <h1> and a
 * breadcrumb. Every non-home route opens with this. Server Component — no client
 * state — so pages using it stay server-rendered. The shape loops honour
 * prefers-reduced-motion via the global CSS (sway/bobble classes).
 */
export function PageBanner({ page }: { page: PageKey }) {
  const { title, eyebrow, breadcrumb } = PAGES[page];

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      style={{
        backgroundImage:
          "linear-gradient(112deg, #0b1428 0%, #16266b 46%, #1e3aa8 100%)",
      }}
    >
      <BannerShapes />

      <Container className="relative z-10 flex flex-col items-start gap-5 py-[clamp(64px,9vw,110px)]">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>

        <h1 className="text-h1 font-extrabold leading-[1.05] text-balance">
          {title}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-copy font-semibold">
            {breadcrumb.map((crumb, i) => {
              const last = i === breadcrumb.length - 1;
              return (
                <Fragment key={crumb.label}>
                  <li>
                    {crumb.href && !last ? (
                      <Link
                        href={crumb.href}
                        className="text-white/70 transition hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={last ? "text-primary-soft" : "text-white/70"}
                        aria-current={last ? "page" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                  {!last && (
                    <li aria-hidden className="text-white/35">
                      /
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </Container>
    </section>
  );
}

/**
 * A compact subset of the Hero's decorative art (Tier D — the template's shape
 * PNGs are lost, re-created as CSS/SVG). Desktop-only static layer behind the
 * copy: a deep-blue triangle over a lighter one on the left, a mesh and ring,
 * and faint diagonal lines drifting off the right.
 */
function BannerShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block [isolation:isolate]"
    >
      {/* Smaller, lighter triangle — behind. */}
      <span className="absolute left-0 top-8 z-[1] h-[220px] w-[150px] opacity-70 [background:linear-gradient(135deg,#3f68f4,#6f98ff)] [clip-path:polygon(0_0,100%_40%,0_80%)]" />
      {/* Deep-blue triangle — larger, on top. */}
      <span className="sway-animation absolute left-0 -top-6 z-[3] h-[300px] w-[170px] [background:linear-gradient(135deg,#15277a,#2b50d6)] [clip-path:polygon(0_0,100%_44%,0_86%)]" />
      {/* Thin diagonal line crossing the lower-left. */}
      <span className="absolute -left-8 top-[60%] z-[2] h-px w-[380px] origin-left -rotate-[52deg] bg-white/12" />
      {/* Small ring. */}
      <span className="absolute left-[220px] top-[38%] z-[3] h-5 w-5 rounded-full border-2 border-white/30" />

      {/* Right cluster — faint diagonal lines + a mesh echo. */}
      <span className="absolute right-[4%] top-[12%] z-[1] h-px w-[300px] origin-right -rotate-[52deg] bg-white/10" />
      <span className="absolute right-[10%] top-[9%] z-[1] h-px w-[280px] origin-right -rotate-[52deg] bg-white/[0.07]" />
      <span className="bobble-animation absolute bottom-6 right-[8%] z-[2] block h-[140px] w-[200px] text-primary-soft/30">
        <Mesh />
      </span>
    </div>
  );
}

function Mesh() {
  return (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M0 220 Q 120 120 300 148" />
        <path d="M0 220 Q 110 152 300 188" />
        <path d="M0 118 Q 130 128 300 108" />
        <path d="M38 6 L18 220" />
        <path d="M108 2 L70 220" />
        <path d="M180 0 L150 220" />
      </g>
    </svg>
  );
}
