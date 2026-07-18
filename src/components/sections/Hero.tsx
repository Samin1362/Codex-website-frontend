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
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { HERO_ANIMATIONS, HERO_SLIDER, type HeroAnimation } from "@/lib/animations";
import { HERO } from "@/lib/content";

/**
 * Hero — 3-slide fade Swiper (Plan.md §6.2, Tier B). Copy + decorative shapes
 * carry `hero-el` classes; the CSS in globals.css runs their entrance only on
 * the active slide, replaying on every change (no JS re-trigger needed).
 * Swiper options are inferred (script.js is lost) and centralised in
 * animations.ts — entrances settle by ~1.5s, then an 8s dwell keeps the copy
 * on screen and still (retuned from the template's restless 2s slideIns).
 */
export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={HERO_SLIDER.speed}
        rewind={HERO_SLIDER.rewind}
        autoplay={
          reduced
            ? false
            : { delay: HERO_SLIDER.autoplayDelay, disableOnInteraction: false }
        }
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

            {/* ── Decorative shapes — re-created SVG/CSS (template art is lost),
                matched to all-section-screen-shots/banner.png. Entrances follow
                §6.2; left shapes slideInLeft, right shapes slideInRight. ── */}

            {/* Left: solid right-pointing triangle wedge, full-bleed, mid-height */}
            <HeroEl
              anim={HERO_ANIMATIONS.shapeLeftSolid}
              className="pointer-events-none absolute left-0 top-[22%] hidden h-[320px] w-[220px] lg:block"
            >
              <span className="sway-animation block h-full w-full opacity-90 [background:linear-gradient(135deg,#2a5be0,#5b8bff)] [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            </HeroEl>

            {/* Left: thin outlined triangle offset behind the solid one */}
            <HeroEl
              anim={HERO_ANIMATIONS.shapeLeftRegular}
              className="pointer-events-none absolute left-[64px] top-[36%] hidden h-[190px] w-[150px] text-white/25 lg:block"
            >
              <TriangleOutline />
            </HeroEl>

            {/* Bottom-left: wireframe mesh */}
            <HeroEl
              anim={HERO_ANIMATIONS.shapeLeftRegular}
              className="pointer-events-none absolute -left-6 bottom-0 hidden h-[220px] w-[300px] text-primary-soft/40 lg:block"
            >
              <Mesh />
            </HeroEl>

            {/* Right: outlined » double chevron */}
            <HeroEl
              anim={HERO_ANIMATIONS.shapeRightLine}
              className="pointer-events-none absolute right-[9%] top-[20%] hidden h-[90px] w-[120px] text-white/25 lg:block"
            >
              <Chevrons />
            </HeroEl>

            {/* Right: thin counter-cascading vertical lines .9→.5 */}
            <HeroEl anim={HERO_ANIMATIONS.rightLine1} className="pointer-events-none absolute right-[7%] top-0 hidden h-full w-px bg-white/12 lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.rightLine2} className="pointer-events-none absolute right-[13%] top-0 hidden h-full w-px bg-white/10 lg:block" />
            <HeroEl anim={HERO_ANIMATIONS.rightLine3} className="pointer-events-none absolute right-[19%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

            {/* Bottom-right: blue liquid blob (organic border-radius) */}
            <HeroEl
              anim={HERO_ANIMATIONS.shapeRightSolid}
              className="pointer-events-none absolute -bottom-20 -right-20 hidden h-[300px] w-[300px] lg:block"
            >
              <span className="gradient-brand block h-full w-full opacity-90 [border-radius:44%_56%_63%_37%/48%_42%_58%_52%]" />
            </HeroEl>

            {/* Squiggle accent to the right of the CTA */}
            <HeroEl
              anim={HERO_ANIMATIONS.cta}
              className="pointer-events-none absolute bottom-[19%] left-[27%] hidden text-primary-soft lg:block"
            >
              <Squiggle />
            </HeroEl>

            <Container className="relative flex min-h-[640px] items-center py-28">
              <div className="max-w-[680px]">
                <HeroEl anim={HERO_ANIMATIONS.eyebrow} className="mb-6">
                  <Eyebrow tone="light">{HERO.eyebrow}</Eyebrow>
                </HeroEl>
                {/* Only the first slide is the document h1; the rotating rest are
                    visually-identical h2s so the page has a single top heading. */}
                <HeroEl anim={HERO_ANIMATIONS.heading} as={i === 0 ? "h1" : "h2"} className="text-h1 font-extrabold leading-[1.05] text-balance">
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
  as?: "div" | "h1" | "h2" | "p";
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

/* ── Re-created banner shapes (Tier D — the template's shape PNGs are lost). ── */

function TriangleOutline() {
  return (
    <svg viewBox="0 0 150 190" fill="none" aria-hidden className="h-full w-full">
      <path d="M3 3 L147 95 L3 187 Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Mesh() {
  return (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M0 220 Q 120 120 300 148" />
        <path d="M0 220 Q 110 152 300 188" />
        <path d="M0 220 Q 90 182 300 218" />
        <path d="M0 118 Q 130 128 300 108" />
        <path d="M0 58 Q 150 92 300 70" />
        <path d="M38 6 L18 220" />
        <path d="M108 2 L70 220" />
        <path d="M180 0 L150 220" />
        <path d="M252 0 L238 220" />
      </g>
    </svg>
  );
}

function Chevrons() {
  return (
    <svg viewBox="0 0 120 90" fill="none" aria-hidden className="h-full w-full">
      <g
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12 L52 45 L12 78" />
        <path d="M58 12 L98 45 L58 78" />
      </g>
    </svg>
  );
}

function Squiggle() {
  return (
    <svg width="58" height="30" viewBox="0 0 58 30" fill="none" aria-hidden>
      <path
        d="M3 22 C 8 6 15 6 19 18 S 31 30 35 14 S 48 6 55 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
