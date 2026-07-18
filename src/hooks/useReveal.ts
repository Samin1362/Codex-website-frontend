"use client";

import { useEffect, useRef } from "react";

/**
 * Shared bottom-of-page fallback. A negative bottom rootMargin (below) delays the
 * reveal until an element is comfortably in view — but elements that sit within
 * that margin of the document's end (e.g. the footer) can never be scrolled high
 * enough to cross the trigger line. So once the user reaches the bottom of the
 * page, reveal anything still hidden. Attached once for the whole app.
 */
let bottomFallbackAttached = false;
function attachBottomFallback() {
  if (bottomFallbackAttached || typeof window === "undefined") return;
  bottomFallbackAttached = true;
  const onScroll = () => {
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;
    if (!atBottom) return;
    document
      .querySelectorAll(".reveal:not(.is-revealed)")
      .forEach((el) => el.classList.add("is-revealed"));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Scroll-triggered reveal — our stand-in for WOW.js (Plan.md §3).
 *
 * Fires once, then unobserves so scrolling back never replays an entrance. The
 * negative bottom `rootMargin` is the important bit: without it, `threshold: 0`
 * reveals an element the instant its top touches the very bottom edge of the
 * screen, so the animation plays off at the fold and is finished before the
 * section is actually in view — which reads as "no scroll animation, everything
 * just loaded at once". Triggering ~12% into the viewport makes each section
 * animate where the user can see it.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Nothing to trigger — the stylesheet already forces these elements visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(el);
    attachBottomFallback();
    return () => observer.disconnect();
  }, []);

  return ref;
}
