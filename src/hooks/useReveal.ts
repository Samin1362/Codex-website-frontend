"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal — our stand-in for WOW.js (Plan.md §3).
 *
 * WOW's defaults are what we match: trigger as soon as any part of the element
 * enters the viewport (offset 0), and fire exactly once. We unobserve on the
 * first hit so scrolling back up never re-runs an entrance animation.
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
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
