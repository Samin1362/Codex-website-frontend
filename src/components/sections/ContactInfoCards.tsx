import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LocationIcon, MailIcon, PhoneCallIcon } from "@/components/icons";
import { SITE } from "@/lib/content";

/** Strip spaces/dashes so the `tel:` href stays dialable (same rule as the header). */
const tel = (n: string) => `tel:${n.replace(/[\s-]/g, "")}`;

/**
 * Contact page lead-in (Plan.md §7). Three cards carrying the REAL `SITE`
 * details — address, all three phone numbers, email + website — so the page
 * answers "how do I reach you" above the fold, before the form.
 *
 * Server Component: no state, and `Reveal` is a client island that nests safely.
 */
export function ContactInfoCards() {
  return (
    <section id="contact-info" className="section-y">
      <Container>
        <div className="grid gap-7 md:grid-cols-3">
          <Reveal
            effect="fadeInUp"
            delay={0}
            className="border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-raised"
          >
            <CardHead icon={<LocationIcon />} title="Our Office" />
            <address className="mt-4 not-italic leading-relaxed text-muted">
              {SITE.address}
            </address>
          </Reveal>

          <Reveal
            effect="fadeInUp"
            delay={200}
            className="border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-raised"
          >
            <CardHead icon={<PhoneCallIcon />} title="Phone Call" />
            <ul className="mt-4 space-y-2">
              {[SITE.phone, SITE.phoneAlt, SITE.phoneAlt2].map((number) => (
                <li key={number}>
                  <a href={tel(number)} className="text-muted transition hover:text-primary">
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            effect="fadeInUp"
            delay={400}
            className="border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-raised"
          >
            <CardHead icon={<MailIcon />} title="Email & Web" />
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-muted transition hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${SITE.website}`}
                  className="break-all text-muted transition hover:text-primary"
                >
                  {SITE.website}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CardHead({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-white">
        {icon}
      </span>
      <h3 className="font-heading text-h5 font-bold">{title}</h3>
    </div>
  );
}
