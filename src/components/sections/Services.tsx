import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  CircuitTrace,
  CodeIcon,
  ManageIcon,
  ShieldIcon,
} from "@/components/icons";
import { REVEAL_DURATION, stagger } from "@/lib/animations";
import { SERVICES, type ServiceIconName } from "@/lib/content";

const ICONS: Record<ServiceIconName, typeof ManageIcon> = {
  manage: ManageIcon,
  shield: ShieldIcon,
  code: CodeIcon,
};

/**
 * Services (Plan.md shot 2). Header fadeInLeft 0/200, CTA fadeInUp 200, three
 * cards bounceInUp @1000ms 0/200/400. Middle card is the blue "active" one; each
 * card carries the circuit-trace motif to the right of the icon.
 */
export function Services() {
  return (
    <section id="services" className="section-y">
      <Container>
        <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <Reveal effect="fadeInLeft" delay={0} className="mb-4">
              <Eyebrow tone="primary">{SERVICES.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              effect="fadeInLeft"
              delay={200}
              as="h2"
              className="text-h2 font-extrabold text-balance"
            >
              {SERVICES.title}
            </Reveal>
          </div>
          <Reveal effect="fadeInUp" delay={200}>
            <Button href={SERVICES.cta.href}>{SERVICES.cta.label}</Button>
          </Reveal>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            const active = i === 1;
            return (
              <Reveal
                key={item.title}
                effect="bounceInUp"
                duration={REVEAL_DURATION.card}
                delay={stagger(i)}
                className={`group relative overflow-hidden p-10 transition-shadow ${
                  active
                    ? "gradient-band text-white shadow-cta"
                    : "border border-line bg-white text-ink shadow-card hover:shadow-raised"
                }`}
              >
                <CircuitTrace
                  className={`pointer-events-none absolute right-0 top-8 h-28 w-40 ${
                    active ? "text-white/25" : "text-primary/15"
                  }`}
                />
                <div
                  className={`relative flex h-16 w-16 items-center justify-center ${
                    active ? "bg-white text-primary" : "bg-sub text-primary"
                  }`}
                >
                  <Icon />
                </div>
                <h4 className="relative mt-8 font-heading text-2xl font-bold">
                  {item.title}
                </h4>
                <p
                  className={`relative mt-3 text-[15.5px] leading-relaxed ${
                    active ? "text-white/85" : "text-muted"
                  }`}
                >
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
