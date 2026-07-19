"use client";

import { useRef, type CSSProperties, type ReactNode, type SyntheticEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectFade, Pagination } from "swiper/modules";
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
 * Hero — 3-slide fade Swiper (Plan.md §6.2, Tier B), matched to the reference
 * banner (all-section-screen-shots + Screenshot 1.56.44). The decorative shapes
 * are a single static layer that sits BEHIND the slides (identical on every
 * slide in the template), so they're always visible regardless of Swiper's
 * per-slide state. Only the copy carries the per-slide `hero-el` choreography.
 */
export function Hero() {
  const reduced = usePrefersReducedMotion();
  const swiperRef = useRef<SwiperClass | null>(null);

  /**
   * Each time the background clip finishes, restart it and advance the slide —
   * so the slider's cadence is driven by the video loop (~5s), not a fixed
   * timer. Manual restart (not the `loop` attribute) is what lets us hook the
   * boundary. Under reduced motion the video never plays, so this never fires
   * and the slider stays put — which is the intended behaviour there.
   */
  const handleVideoLoop = (e: SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.currentTime = 0;
    void video.play();
    swiperRef.current?.slideNext();
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy text-white"
      style={{
        backgroundImage:
          "linear-gradient(112deg, #0b1428 0%, #16266b 46%, #1e3aa8 100%)",
      }}
    >
      <HeroBackground reduced={reduced} onLoop={handleVideoLoop} />
      <HeroShapes />

      <Swiper
        modules={[EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={HERO_SLIDER.speed}
        rewind={HERO_SLIDER.rewind}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        pagination={{ clickable: true }}
        className="hero-swiper relative z-10"
      >
        {HERO.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Container className="relative flex min-h-[640px] items-center py-28">
              <div className="max-w-[680px]">
                <HeroEl anim={HERO_ANIMATIONS.eyebrow} className="mb-6">
                  <Eyebrow tone="light">{HERO.eyebrow}</Eyebrow>
                </HeroEl>
                {/* Only the first slide is the document h1; the rotating rest are
                    visually-identical h2s so the page has a single top heading. */}
                <HeroEl
                  anim={HERO_ANIMATIONS.heading}
                  as={i === 0 ? "h1" : "h2"}
                  className="text-h1 font-extrabold leading-[1.05] text-balance"
                >
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

/**
 * The reference banner's decorative art (Tier D — the template's shape PNGs are
 * lost, re-created here as SVG/CSS). Static layer behind the copy, desktop-only.
 * Left: a deep-blue triangle stacked ABOVE a smaller lighter one (deep has the
 * greater z-index), a thin outline triangle, a mesh, a ring. Right: light
 * triangle/chevron outlines. Gentle loops respect prefers-reduced-motion.
 */
function HeroShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block [isolation:isolate]"
    >
      {/* ── Left cluster ─────────────────────────────────────────────── */}

      {/* Smaller, lighter triangle — sits BEHIND (lower z). */}
      <span className="absolute left-0 top-[120px] z-[1] h-[360px] w-[240px] opacity-70 [background:linear-gradient(135deg,#3f68f4,#6f98ff)] [clip-path:polygon(0_0,100%_40%,0_80%)]" />

      {/* Thin outline triangle, offset between the two solids. */}
      <span className="absolute left-[52px] top-[170px] z-[2] h-[300px] w-[210px] text-white/25">
        <TriangleOutline />
      </span>

      {/* Deep-blue triangle — larger, ON TOP (greater z-index than the smaller one). */}
      <span className="sway-animation absolute left-0 top-[40px] z-[3] h-[480px] w-[270px] [background:linear-gradient(135deg,#15277a,#2b50d6)] [clip-path:polygon(0_0,100%_44%,0_86%)]" />

      {/* Long thin diagonal line crossing the lower-left. */}
      <span className="absolute -left-10 top-[300px] z-[2] h-px w-[560px] origin-left -rotate-[54deg] bg-white/12" />

      {/* Bottom-left wireframe mesh. */}
      <span className="absolute -left-6 bottom-0 z-[2] block h-[220px] w-[300px] text-primary-soft/40">
        <Mesh />
      </span>

      {/* Small ring near the eyebrow. */}
      <span className="absolute left-[300px] top-[150px] z-[3] h-6 w-6 rounded-full border-2 border-white/35" />

      {/* Blue squiggle to the right of the CTA. */}
      <span className="bobble-animation absolute bottom-[130px] left-[430px] z-[3] text-primary-soft">
        <Squiggle />
      </span>

      {/* ── Right cluster — light triangle/chevron outlines ──────────── */}

      {/* Faint diagonal lines drifting off the top-right corner. */}
      <span className="absolute right-[3%] top-[8%] z-[1] h-px w-[320px] origin-right -rotate-[52deg] bg-white/10" />
      <span className="absolute right-[9%] top-[6%] z-[1] h-px w-[300px] origin-right -rotate-[52deg] bg-white/[0.07]" />
    </div>
  );
}

/**
 * Banner background (public/videos/banner.mp4). Full-bleed cover video sitting
 * BEHIND everything (z-0, under the shapes at their own z and the copy at z-10),
 * at low opacity so it reads as a subtle moving texture over the navy gradient.
 * A dark tint over the video protects the white copy's contrast. NOT looping via
 * the attribute — the parent restarts it on `ended` to advance the slide, so the
 * slider's rhythm follows the clip. No autoplay under reduced motion.
 */
function HeroBackground({
  reduced,
  onLoop,
}: {
  reduced: boolean;
  onLoop: (e: SyntheticEvent<HTMLVideoElement>) => void;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
        src="/videos/banner.mp4"
        autoPlay={!reduced}
        muted
        playsInline
        preload="metadata"
        onEnded={onLoop}
      />
      {/* Tint over the video to keep the copy legible and the mood on-brand. */}
      <div className="absolute inset-0 [background:linear-gradient(112deg,rgba(11,20,40,0.55),rgba(22,38,107,0.4)_46%,rgba(30,58,168,0.35))]" />
    </div>
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
