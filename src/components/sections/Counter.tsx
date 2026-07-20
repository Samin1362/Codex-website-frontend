"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CircuitTrace } from "@/components/icons";
import { useCountUp } from "@/hooks/useCountUp";
import { REVEAL_DELAY, REVEAL_DURATION } from "@/lib/animations";
import { COUNTER_STATS } from "@/lib/content";

/**
 * Counter band (Plan.md shot 3 / §6.5). Gradient band with four stats bounceInUp
 * @1000ms 0/200/400/800 and the rAF count-up. Circuit-trace motif on the right.
 *
 * `flush` (default true, Home): lifted with a negative top margin to straddle the
 * bottom of the section above (About). On sub-pages where it stands alone
 * (Plan.md §6), pass `flush={false}` for normal vertical spacing.
 */
export function Counter({ flush = true }: { flush?: boolean }) {
  return (
    <section
      className={`relative z-10 ${
        flush ? "-mt-[clamp(90px,13vw,150px)]" : "section-y"
      }`}
    >
      <Container>
        <div className="gradient-band relative overflow-hidden px-8 py-12 shadow-cta sm:px-14">
          <CircuitTrace className="pointer-events-none absolute right-4 top-1/2 hidden h-40 w-64 -translate-y-1/2 text-white/20 lg:block" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTER_STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                effect="bounceInUp"
                duration={REVEAL_DURATION.card}
                delay={i === 3 ? REVEAL_DELAY.step8 : i * REVEAL_DELAY.step2}
                className="flex items-center gap-4 text-white"
              >
                <StatIcon index={i} />
                <div>
                  <h3 className="font-heading text-stat font-extrabold leading-none">
                    <Stat target={stat.target} />
                    {stat.suffix}
                  </h3>
                  <p className="mt-1 text-white/85">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ target }: { target: number }) {
  const { ref, display } = useCountUp(target);
  return <span ref={ref}>{display}</span>;
}

/** Minimal authored stat glyphs (template's counter PNGs are lost). */
function StatIcon({ index }: { index: number }) {
  const paths = [
    "M8 26c0-4 3.5-6 8-6s8 2 8 6M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8", // clients
    "M16 6a7 7 0 0 1 4 12.7V22h-8v-3.3A7 7 0 0 1 16 6M13 25h6M14 28h4", // projects (bulb)
    "M16 7c4 0 7 3 7 7 0 2-1 4-2 5v4h-10v-4c-1-1-2-3-2-5 0-4 3-7 7-7", // experts (brain-ish)
    "M8 14l12-5v14l-12-5v-4M8 14v4M22 12v8", // posts (megaphone)
  ];
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0 text-white"
    >
      <path
        d={paths[index]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
