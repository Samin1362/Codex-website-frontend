import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Placeholder } from "@/components/ui/Placeholder";
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
              {/* Bobbling arrow to the next step */}
              {i < PROCESS.steps.length - 1 && (
                <div
                  aria-hidden
                  className="bobble-animation absolute -right-9 top-24 hidden text-primary/40 md:block"
                >
                  <svg width="70" height="34" viewBox="0 0 70 34" fill="none">
                    <path
                      d="M2 24C14 6 34 4 58 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="1 7"
                    />
                    <path
                      d="M50 6l10 6-8 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div className="relative mx-auto w-[220px]">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                />
                <Placeholder
                  label="Step photo"
                  rounded="rounded-full"
                  className="m-3 aspect-square"
                />
                <span className="absolute left-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                  {step.n}
                </span>
              </div>

              <h4 className="mt-8 font-heading text-2xl font-bold">{step.title}</h4>
              <p className="mx-auto mt-3 max-w-[300px] text-[15px] text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
