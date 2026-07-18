"use client";

import { useEffect, useRef, useState } from "react";
import { COUNTER, easeOutCubic } from "@/lib/animations";

/**
 * rAF count-up that fires once on viewport entry (Plan.md §6.5): easeOutCubic,
 * 1800ms, `toLocaleString` formatting. Recovered from the wireframe's logic.
 * Respects reduced-motion by snapping straight to the target.
 */
export function useCountUp(target: number, durationMs = COUNTER.durationMs) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const run = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / durationMs, 1);
      setValue(Math.round(easeOutCubic(p) * target));
      if (p < 1) raf = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          raf = requestAnimationFrame(run);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs]);

  return { ref, display: value.toLocaleString("en-US") };
}
