import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Placeholder } from "@/components/ui/Placeholder";
import { TESTIMONIALS } from "@/lib/content";

/**
 * Standalone client-reviews section (Plan.md §7). The Contact section already
 * carries a testimonial swiper on the Home page; this is the full-width grid
 * variant for sub-pages (About) — a centered header over the review cards. Server
 * Component; the `Reveal` entrances match the section rhythm (fadeInUp stagger).
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-sub section-y">
      <Container>
        <SectionHeader
          eyebrow={TESTIMONIALS.eyebrow}
          title={TESTIMONIALS.title}
          description={TESTIMONIALS.body}
          align="center"
          className="mb-16"
        />

        <div className="grid gap-7 md:grid-cols-2">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal
              key={t.name}
              effect="fadeInUp"
              delay={i * 200}
              className="bg-white p-8 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Placeholder
                    label=""
                    rounded="rounded-full"
                    className="h-16 w-16 shrink-0"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-bold">{t.name}</h4>
                    <p className="text-sm text-muted">{t.role}</p>
                    <Stars rating={t.rating} />
                  </div>
                </div>
                <QuoteMark />
              </div>
              <p className="mt-6 leading-relaxed text-muted">“ {t.quote} ”</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-1 flex gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z"
            fill={i < rating ? "var(--color-primary)" : "#d3dced"}
          />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg
      width="44"
      height="33"
      viewBox="0 0 50 37"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
        fill="var(--color-primary)"
      />
    </svg>
  );
}
