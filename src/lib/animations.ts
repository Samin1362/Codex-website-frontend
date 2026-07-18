/**
 * The template's animation choreography, extracted from `templete.html`.
 *
 * Every value here was read off the source markup — the effect names are stock
 * animate.css, and the timings come from `data-wow-duration` / `data-wow-delay`.
 * Treat this file as the contract: see Plan.md §6 for the full table and for
 * which parts are exact vs. inferred.
 */

/** animate.css entrance effects the template uses. Keyframes imported in globals.css. */
export type RevealEffect =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeInUpBig"
  | "fadeInDownBig"
  | "bounceInUp"
  | "slideInLeft"
  | "slideInRight";

/**
 * The template uses exactly two durations. Card grids (Services, Counter) run
 * at 1000ms; everything else at 1500ms. The Offer grid is the odd one out —
 * 1500ms with a 100ms stagger across 6 cards.
 */
export const REVEAL_DURATION = {
  card: 1000,
  base: 1500,
} as const;

/** Stagger steps observed in the markup, in ms. */
export const REVEAL_DELAY = {
  none: 0,
  step1: 100,
  step2: 200,
  step3: 300,
  step4: 400,
  step5: 500,
  step6: 600,
  step8: 800,
} as const;

/** Nth-child stagger helper for a grid whose delays advance in fixed steps. */
export function stagger(index: number, step = REVEAL_DELAY.step2): number {
  return index * step;
}

/* ------------------------------------------------------------------ *
 * Hero slider — Plan.md §6.2
 * ------------------------------------------------------------------ */

export type HeroAnimation = {
  effect: Extract<RevealEffect, "slideInLeft" | "slideInRight">;
  /** ms */
  duration: number;
  /** ms */
  delay: number;
};

/**
 * 12 animated elements per slide, identical across all three template slides.
 * Copy cascades 300→500→700→900; the right-hand lines counter-cascade 900→300.
 */
export const HERO_ANIMATIONS = {
  shapeLeftRegular: { effect: "slideInLeft", duration: 2000, delay: 300 },
  shapeLeftSolid: { effect: "slideInLeft", duration: 2000, delay: 900 },
  shapeRightLine: { effect: "slideInRight", duration: 3000, delay: 300 },
  shapeRightSolid: { effect: "slideInRight", duration: 2000, delay: 300 },
  rightLine1: { effect: "slideInRight", duration: 2000, delay: 900 },
  rightLine2: { effect: "slideInRight", duration: 2000, delay: 700 },
  rightLine3: { effect: "slideInRight", duration: 2000, delay: 500 },
  rightLine4: { effect: "slideInRight", duration: 2000, delay: 300 },
  eyebrow: { effect: "slideInRight", duration: 2000, delay: 300 },
  heading: { effect: "slideInRight", duration: 2000, delay: 500 },
  paragraph: { effect: "slideInRight", duration: 2000, delay: 700 },
  cta: { effect: "slideInRight", duration: 2000, delay: 900 },
} as const satisfies Record<string, HeroAnimation>;

/* ------------------------------------------------------------------ *
 * Swiper configs — Plan.md §6.3
 *
 * INFERRED, not recovered: the template's `script.js` is missing, so none of
 * these values come from source. Expect one tuning pass against the reference.
 * ------------------------------------------------------------------ */

export const HERO_SLIDER = {
  effect: "fade",
  speed: 1200,
  /** 6s clears the longest entrance (900ms delay + 2000ms duration) before advancing. */
  autoplayDelay: 6000,
  loop: true,
} as const;

export const CASE_SLIDER = {
  speed: 800,
  autoplayDelay: 5000,
  loop: true,
  breakpoints: { 0: 1, 576: 2, 992: 3, 1200: 4 },
} as const;

/** Continuous marquee: zero delay + linear speed is Swiper's idiom for this. */
export const BRAND_SLIDER = {
  speed: 4000,
  autoplayDelay: 0,
  loop: true,
  freeMode: true,
} as const;

export const TESTIMONIAL_SLIDER = {
  speed: 700,
  loop: true,
  autoplay: false,
} as const;

/* ------------------------------------------------------------------ *
 * Counter — Plan.md §6.5
 * ------------------------------------------------------------------ */

export const COUNTER = {
  /** Placeholder figures from the template; real Codex numbers pending (Plan.md §8). */
  targets: [6561, 600, 250, 590],
  durationMs: 1800,
} as const;

/** easeOutCubic — the curve the wireframe's rAF counter uses. */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* ------------------------------------------------------------------ *
 * Preloader — Plan.md §6.6
 * ------------------------------------------------------------------ */

export const PRELOADER = {
  letters: ["L", "o", "a", "d", "i", "n", "g"] as const,
  letterStaggerMs: 100,
  jumpDurationMs: 1200,
  /** Ceiling only. The real dismissal gates on `load`; this stops a stalled asset hanging the page. */
  maxWaitMs: 2600,
} as const;
