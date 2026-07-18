"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Container } from "@/components/ui/Container";
import { CircuitTrace } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { BRAND_SLIDER } from "@/lib/animations";
import { BRANDS } from "@/lib/content";

/**
 * Brands (Plan.md shot 5 / §6.3, Tier B). A continuous marquee — zero-delay
 * autoplay + linear speed + freeMode is Swiper's idiom for it. Blue band lifted
 * to overlap the Offering section's reserved bottom padding. Logos are
 * placeholder partner marks (Plan.md §7).
 */
export function Brands() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative z-10 -mt-[clamp(90px,13vw,140px)]">
      <Container>
        <div className="gradient-band relative overflow-hidden rounded-[8px] px-6 py-10 shadow-cta">
          <CircuitTrace className="pointer-events-none absolute right-0 top-0 hidden h-full w-72 text-white/15 lg:block" />
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={64}
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
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <BrandLogo mark={brand.mark} name={brand.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

const MARKS: Record<string, string> = {
  grid: "M2 2h6v6H2zM12 2h6v6h-6zM2 12h6v6H2zM12 12h6v6h-6z",
  bolt: "M11 1 3 11h6l-2 8 10-12h-7z",
  slash: "M4 18 14 2M9 18 19 2",
  wave: "M2 12c3-6 5-6 8 0s5 6 8 0",
  arrow: "M3 3l7 14 3-6 4 2z",
};

function BrandLogo({ mark, name }: { mark: string; name: string }) {
  return (
    <div className="flex items-center gap-3 text-white/90 opacity-80 transition-opacity hover:opacity-100">
      <svg width="30" height="26" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d={MARKS[mark]}
          fill={mark === "grid" || mark === "bolt" || mark === "arrow" ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={mark === "slash" || mark === "wave" ? 2 : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="whitespace-nowrap font-heading text-xl font-bold">{name}</span>
    </div>
  );
}
