"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Container } from "@/components/ui/Container";
import { CircuitTrace } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { BRAND_SLIDER } from "@/lib/animations";
import { TECH_MARKS, type TechMark } from "@/lib/techStack";

/**
 * Tech bar (Plan.md shot 5 / §6.3) for "Enhance and Pioneer Using Technology
 * Trends". A continuous marquee — zero-delay autoplay + linear speed + freeMode
 * is Swiper's idiom for it. Blue band lifted to overlap the Offering section's
 * reserved bottom padding. Logos are the Codex stack rendered as uniform
 * monochrome white glyphs + names (simple-icons paths) so they sit at one size
 * and read cleanly on the blue band.
 */
export function Brands() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative z-10 -mt-[clamp(90px,13vw,140px)]">
      <Container>
        <div className="gradient-band relative overflow-hidden px-6 py-10 shadow-cta">
          <CircuitTrace className="pointer-events-none absolute right-0 top-0 hidden h-full w-72 text-white/15 lg:block" />
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={56}
            loop
            freeMode
            allowTouchMove={false}
            speed={BRAND_SLIDER.speed}
            autoplay={
              reduced
                ? false
                : { delay: BRAND_SLIDER.autoplayDelay, disableOnInteraction: false }
            }
            className="relative !ease-linear"
          >
            {[...TECH_MARKS, ...TECH_MARKS].map((mark, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <BrandLogo mark={mark} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

function BrandLogo({ mark }: { mark: TechMark }) {
  return (
    <div className="flex items-center gap-3 text-white/85 opacity-90 transition-opacity hover:text-white hover:opacity-100">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 shrink-0"
        fill="currentColor"
        aria-hidden
      >
        <path d={mark.path} />
      </svg>
      <span className="whitespace-nowrap font-heading text-xl font-bold">{mark.name}</span>
    </div>
  );
}
