import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "./Logo";
import {
  AnglesRightIcon,
  ClockIcon,
  PhoneCallIcon,
  SocialIcon,
} from "@/components/icons";
import { FOOTER, SITE, SOCIALS } from "@/lib/content";

/**
 * Dark 4-column footer (Plan.md §5 shot 9). Reveal timings follow §6.1: columns
 * fadeInUp 0/200/400/600ms, copyright row fadeInDown 0/200ms. The angled blue
 * shapes L/R are authored clip-paths (Tier D) with the sway_Y loop.
 */
export function Footer() {
  return (
    <footer id="contact-footer" className="relative overflow-hidden bg-night text-white">
      {/* Decorative angled shapes — replaces the template's footer shape PNGs. */}
      <div
        aria-hidden
        className="sway-y-animation gradient-band absolute left-0 top-1/3 hidden h-64 w-40 opacity-90 [clip-path:polygon(0_0,100%_28%,100%_72%,0_100%)] md:block"
      />
      <div
        aria-hidden
        className="sway-y-animation gradient-band absolute bottom-10 right-0 hidden h-72 w-52 opacity-90 [clip-path:polygon(100%_0,100%_100%,0_78%,0_22%)] md:block"
      />

      <Container className="relative">
        <div className="grid gap-10 py-[100px] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Brand column */}
          <Reveal effect="fadeInUp" delay={0}>
            <Logo variant="brand" className="mb-6" />
            <p className="max-w-[300px] text-[15px] leading-relaxed text-white/70">
              {FOOTER.blurb}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/80 transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          {FOOTER.columns.map((col, i) => (
            <Reveal key={col.title} effect="fadeInUp" delay={200 * (i + 1)}>
              <h3 className="mb-6 font-heading text-xl font-bold">{col.title}</h3>
              <ul className="flex flex-col gap-[14px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[15px] text-white/70 transition hover:text-primary-soft"
                    >
                      <AnglesRightIcon className="shrink-0 text-primary-soft" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Contact column */}
          <Reveal effect="fadeInUp" delay={600}>
            <h3 className="mb-6 font-heading text-xl font-bold">Contact Us</h3>
            <p className="mb-6 max-w-[240px] text-[15px] text-white/70">
              {SITE.address}
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-1 shrink-0 text-primary-soft" />
                <div>
                  <h5 className="font-heading text-base font-bold">Opening Hours:</h5>
                  <p className="text-[15px] text-white/70">{SITE.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCallIcon className="mt-1 shrink-0 text-primary-soft" />
                <div>
                  <h5 className="font-heading text-base font-bold">Phone Call:</h5>
                  <p className="text-[15px] text-white/70">
                    {SITE.phone}, {SITE.phoneAlt}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>

      {/* Copyright bar */}
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[15px] text-white/70 md:flex-row">
          <Reveal effect="fadeInDown" delay={0} as="p">
            {FOOTER.copyright}
          </Reveal>
          <Reveal effect="fadeInDown" delay={200} as="ul" className="flex items-center gap-6">
            {FOOTER.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </Reveal>
        </Container>
      </div>
    </footer>
  );
}
