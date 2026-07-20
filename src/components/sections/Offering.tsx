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
 * Icons are the verbatim inline SVGs from the template.
 *
 * `overlapBelow` (default true): extra bottom padding leaves room for a Brands
 * band to overlap it (Home). When Brands isn't the next section (Plan.md §6),
 * pass `overlapBelow={false}` for a normal bottom padding.
 */
export function Offering({ overlapBelow = true }: { overlapBelow?: boolean }) {
  return (
    <section
      id="offering"
      className={`relative overflow-hidden bg-night pt-[clamp(64px,10vw,120px)] ${
        overlapBelow
          ? "pb-[clamp(140px,20vw,240px)]"
          : "pb-[clamp(64px,10vw,120px)]"
      }`}
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

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {OFFERING.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal
                key={item.label}
                effect="bounceInUp"
                delay={i * REVEAL_DELAY.step1}
                className="group relative"
              >
                {/* Card body — sharp corners; overflow-hidden clips the hover triangles. */}
                <div className="relative mt-8 flex min-h-[150px] flex-col items-center justify-center overflow-hidden border border-white/10 bg-white/[0.02] px-4 pb-7 pt-10 text-center transition-colors duration-300 group-hover:border-primary/40">
                  {/* Corner triangles emerge from the card centre and travel outward to
                      the top-right & bottom-left corners on hover. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 h-20 w-20 -translate-x-16 translate-y-16 scale-50 opacity-0 transition-all duration-500 ease-out [background:linear-gradient(135deg,#5b83ff,#2a52e0)] [clip-path:polygon(0_0,100%_0,100%_100%)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 translate-x-16 -translate-y-16 scale-50 opacity-0 transition-all duration-500 ease-out [background:linear-gradient(135deg,#2a52e0,#5b83ff)] [clip-path:polygon(0_0,100%_100%,0_100%)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  />

                  <h4 className="relative font-heading text-lg font-bold text-white">
                    {item.label}
                  </h4>
                </div>

                {/* Icon badge — straddles the top edge; spins 3 turns & brightens on hover. */}
                <span className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full [background:radial-gradient(circle_at_30%_25%,#1b2444,#0b0f1e)] shadow-[0_10px_30px_rgba(6,10,25,0.6)] [perspective:500px]">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 [background:linear-gradient(150deg,#4f7bf5,#1e3aa8)] group-hover:opacity-100"
                  />
                  <Icon
                    width={30}
                    height={30}
                    className="relative z-10 text-primary-soft transition-[transform,color] duration-700 ease-out [transform-style:preserve-3d] group-hover:text-white group-hover:[transform:rotateY(360deg)]"
                  />
                </span>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
