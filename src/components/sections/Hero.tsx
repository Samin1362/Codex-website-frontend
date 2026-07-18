"use client";

import type { CSSProperties, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HERO_ANIMATIONS, HERO_SLIDER, type HeroAnimation } from "@/lib/animations";
import { HERO } from "@/lib/content";

/**
 * Hero — 3-slide fade Swiper (Plan.md §6.2, Tier B). Copy + decorative shapes
 * carry `hero-el` classes; the CSS in globals.css runs their entrance only on
 * the active slide, replaying on every change (no JS re-trigger needed).
 * Swiper options are inferred (script.js is lost) and centralised in
 * animations.ts — 6s autoplay clears the 0.9s+2s longest entrance.
 */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={HERO_SLIDER.speed}
        loop={HERO_SLIDER.loop}
        autoplay={{ delay: HERO_SLIDER.autoplayDelay, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {HERO.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Per-slide background (Tier D — real photography lands in Phase 5). */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(115deg, rgba(11,20,40,0.92), rgba(27,58,160,0.72)), linear-gradient(135deg, hsl(${222 + i * 14} 60% 22%), hsl(${232 + i * 10} 70% 32%))`,
              }}
            />

            {/* Decorative right-hand lines — counter-cascade .9→.3 (§6.2). */}
            <HeroEl anim={HERO_ANIMATIONS.rightLine1} className="absolute right-[8%] top-0 hidden h-full w-px bg-white/15 lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.rightLine2} className="absolute right-[14%] top-0 hidden h-full w-px bg-white/10 lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.rightLine3} className="absolute right-[20%] top-0 hidden h-full w-px bg-white/10 lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.shapeRightSolid} className="absolute right-[6%] top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-primary/25 blur-xl lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.shapeLeftRegular} className="absolute -left-24 top-1/3 hidden h-72 w-72 rounded-full border-[28px] border-white/5 lg:block" />

            <Container className="relative flex min-h-[640px] items-center py-28">
              <div className="max-w-[680px]">
                <HeroEl anim={HERO_ANIMATIONS.eyebrow} className="mb-6">
                  <Eyebrow tone="light">{HERO.eyebrow}</Eyebrow>
                </HeroEl>
                <HeroEl anim={HERO_ANIMATIONS.heading} as="h1" className="text-h1 font-extrabold leading-[1.05] text-balance">
                  {slide.title}
                </HeroEl>
                <HeroEl anim={HERO_ANIMATIONS.paragraph} as="p" className="mt-6 max-w-[540px] text-white/85">
                  {slide.body}
                </HeroEl>
                <HeroEl anim={HERO_ANIMATIONS.cta} className="mt-10">
                  <Button href={HERO.cta.href} variant="lift">
                    {HERO.cta.label}
                  </Button>
                </HeroEl>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/** One choreographed hero element: applies the active-slide entrance + timing vars. */
function HeroEl({
  anim,
  as: Tag = "div",
  className = "",
  children,
}: {
  anim: HeroAnimation;
  as?: "div" | "h1" | "p";
  className?: string;
  children?: ReactNode;
}) {
  const side = anim.effect === "slideInLeft" ? "is-left" : "is-right";
  return (
    <Tag
      className={`hero-el ${side} ${className}`.trim()}
      style={
        {
          "--hero-dur": `${anim.duration}ms`,
          "--hero-delay": `${anim.delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
