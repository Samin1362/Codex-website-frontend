import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LEGAL } from "@/lib/content";

/**
 * Body layout shared by /terms and /privacy — a single measured prose column.
 * Deliberately plain: legal copy should be easy to read, not art-directed.
 */
export function LegalProse({ doc }: { doc: "terms" | "privacy" }) {
  return (
    <section className="section-y">
      <Container>
        <div className="mx-auto max-w-[820px]">
          {LEGAL[doc].map((section, i) => (
            <Reveal
              key={section.heading}
              effect="fadeInUp"
              delay={Math.min(i, 2) * 150}
              className={i === 0 ? "" : "mt-12"}
            >
              <h2 className="font-heading text-h4 font-bold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
