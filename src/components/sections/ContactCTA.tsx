import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CircuitTrace } from "@/components/icons";
import { CTA } from "@/lib/content";

/**
 * Closing call-to-action band (Plan.md §7). Reused to end the sub-pages — a blue
 * gradient band (same `gradient-band` + shadow as the Counter/Services highlight)
 * carrying a heading and a button through to /contact. Server Component.
 */
export function ContactCTA() {
  return (
    <section className="section-y">
      <Container>
        <div className="gradient-band relative overflow-hidden px-8 py-12 shadow-cta sm:px-14 sm:py-14">
          <CircuitTrace className="pointer-events-none absolute right-4 top-1/2 hidden h-40 w-64 -translate-y-1/2 text-white/15 lg:block" />
          <div className="relative flex flex-col items-start justify-between gap-8 text-white lg:flex-row lg:items-center">
            <div className="max-w-[620px]">
              <Reveal effect="fadeInUp" delay={0} className="mb-4">
                <Eyebrow tone="light">{CTA.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal
                effect="fadeInUp"
                delay={200}
                as="h2"
                className="text-h2-narrow font-extrabold text-balance"
              >
                {CTA.title}
              </Reveal>
              <Reveal effect="fadeInUp" delay={400} as="p" className="mt-4 text-white/85">
                {CTA.body}
              </Reveal>
            </div>
            <Reveal effect="fadeInDown" delay={200} className="shrink-0">
              <Link
                href={CTA.button.href}
                className="inline-flex items-center gap-[10px] bg-white px-[34px] py-[18px] text-base font-bold text-primary shadow-cta transition hover:-translate-y-[3px]"
              >
                {CTA.button.label}
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden className="shrink-0">
                  <path
                    d="M0 5h16M12.5 1 17 5l-4.5 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
