import type { SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CircuitTrace } from "@/components/icons";
import {
  AndroidIcon,
  IosIcon,
  IotIcon,
  TvIcon,
  WatchIcon,
  WebsiteIcon,
} from "@/components/icons/offering";
import { REVEAL_DELAY } from "@/lib/animations";
import { OFFERING, type OfferingIconName } from "@/lib/content";

const ICONS: Record<OfferingIconName, (p: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  website: WebsiteIcon,
  android: AndroidIcon,
  ios: IosIcon,
  watch: WatchIcon,
  tv: TvIcon,
  iot: IotIcon,
};

/**
 * Offering (Plan.md shot 5). Dark section, six platform cards bounceInUp @1500ms
 * with the tight 100ms stagger (§6.1). Header fadeInLeft 0/200, CTA fadeInUp 200.
 * Icons are the verbatim inline SVGs from the template. Extra bottom padding
 * leaves room for the Brands band that overlaps in Phase 4.
 */
export function Offering() {
  return (
    <section
      id="offering"
      className="relative overflow-hidden bg-night pb-[clamp(140px,20vw,240px)] pt-[clamp(64px,10vw,120px)]"
    >
      {/* Corner circuit traces */}
      <Reveal
        effect="fadeInUpBig"
        delay={400}
        className="pointer-events-none absolute bottom-24 left-0 hidden h-48 w-72 text-primary/25 lg:block"
      >
        <CircuitTrace className="h-full w-full" />
      </Reveal>
      <Reveal
        effect="fadeInDownBig"
        delay={400}
        className="pointer-events-none absolute right-0 top-24 hidden h-48 w-72 -scale-x-100 text-primary/25 lg:block"
      >
        <CircuitTrace className="h-full w-full" />
      </Reveal>

      <Container className="relative">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal effect="fadeInLeft" delay={0} className="mb-4">
              <Eyebrow tone="soft">{OFFERING.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              effect="fadeInLeft"
              delay={200}
              as="h2"
              className="max-w-[560px] text-h2-narrow font-extrabold text-white text-balance"
            >
              {OFFERING.title}
            </Reveal>
          </div>
          <Reveal effect="fadeInUp" delay={200}>
            <Button href={OFFERING.cta.href}>{OFFERING.cta.label}</Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {OFFERING.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal
                key={item.label}
                effect="bounceInUp"
                delay={i * REVEAL_DELAY.step1}
                className="group flex flex-col items-center rounded-[6px] border border-white/10 bg-white/[0.02] px-4 py-9 text-center transition-colors hover:border-primary/50 hover:bg-white/[0.04]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#12121f] text-primary-soft shadow-[0_0_0_6px_rgba(91,139,255,0.06)] transition-transform group-hover:-translate-y-1">
                  <Icon width={30} height={30} />
                </span>
                <h4 className="mt-5 font-heading text-lg font-bold text-white">
                  {item.label}
                </h4>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
