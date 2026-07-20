import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS } from "@/lib/content";

/**
 * Process (Plan.md shot 6). Centered header, three steps fadeInUp 0/200/400.
 * Each step: a dashed-ring circular photo with a numbered badge; a bobbling
 * curved arrow bridges the gaps on large screens (§6.4 bobble__animation).
 */
export function Process() {
  return (
    <section id="process" className="section-y">
      <Container>
        <SectionHeader
          eyebrow={PROCESS.eyebrow}
          title={PROCESS.title}
          align="center"
          className="mb-16"
        />

        <div className="grid gap-14 md:grid-cols-3">
          {PROCESS.steps.map((step, i) => (
            <Reveal
              key={step.n}
              effect="fadeInUp"
              delay={i * 200}
              className="relative text-center"
            >
              {/* Solid curved swoosh bridging to the next step (matches shot 6). */}
              {i < PROCESS.steps.length - 1 && (
                <div
                  aria-hidden
                  className="bobble-animation absolute -right-6 top-[104px] hidden text-primary/25 md:block"
                >
                  <svg width="78" height="36" viewBox="0 0 78 36" fill="none">
                    <path
                      d="M3 25C22 6 46 5 66 17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M57 8l11 8.5-8.5 11"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div className="relative mx-auto aspect-square w-[220px]">
                <span
                  aria-hidden
                  className="spin-slow-animation absolute inset-0 rounded-full border-2 border-dashed border-primary/45"
                />
                <div className="absolute inset-[10px] overflow-hidden rounded-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute left-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                  {step.n}
                </span>
              </div>

              <h4 className="mt-8 font-heading text-2xl font-bold">{step.title}</h4>
              <p className="mx-auto mt-3 max-w-[300px] text-copy text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
