"use client";

import { useEffect, useState } from "react";

/**
 * Tracks `prefers-reduced-motion: reduce`. CSS covers the entrance/loop
 * animations (globals.css), but Swiper autoplay is JS-driven and has to be
 * turned off here — auto-advancing content is the motion a reduced-motion user
 * most wants gone. Starts `false` so SSR and first paint match, then updates.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
