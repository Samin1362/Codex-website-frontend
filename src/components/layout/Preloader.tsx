"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { PRELOADER } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Opening loader (Plan.md §6.6). A black overlay with a "Loading" label and a
 * blue progress line that crosses the middle of the screen. Once the line
 * finishes AND the page has loaded, the overlay splits at that midline — the top
 * half slides up and the bottom half slides down at the same time — unveiling the
 * page. Dismissal gates on the real `load` event with a min show time (so the
 * line always completes) and a ceiling (so a stalled asset can't hang the page).
 */
export function Preloader() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false); // split has begun
  const [gone, setGone] = useState(false); // fully unmounted afterwards

  useEffect(() => {
    let settled = false;
    const start = performance.now();
    const min = reduced ? 0 : PRELOADER.minShowMs;

    const finish = () => {
      if (settled) return;
      settled = true;
      setDone(true);
      window.setTimeout(
        () => setGone(true),
        (reduced ? 0 : PRELOADER.splitDurationMs) + 80,
      );
    };

    // After the page loads, hold until the min show time has elapsed, then split.
    const afterLoad = () =>
      window.setTimeout(finish, Math.max(0, min - (performance.now() - start)));

    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad);

    const ceiling = window.setTimeout(finish, PRELOADER.maxWaitMs);
    return () => {
      window.removeEventListener("load", afterLoad);
      window.clearTimeout(ceiling);
    };
  }, [reduced]);

  if (gone) return null;

  const panelStyle: CSSProperties = {
    transitionProperty: "transform",
    transitionDuration: `${PRELOADER.splitDurationMs}ms`,
    transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
  };

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] ${done ? "pointer-events-none" : ""}`}
    >
      {/* Top half — slides up on split. Explicit translate-y-0 (not `none`) in the
          closed state so the transform actually transitions instead of snapping. */}
      <div
        style={panelStyle}
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#05060c] ${
          done ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      {/* Bottom half — slides down on split. */}
      <div
        style={panelStyle}
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#05060c] ${
          done ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Label + progress line, centred on the split midline; fades as the split begins. */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          done ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+2.6rem)] whitespace-nowrap font-heading text-[clamp(17px,3.4vw,28px)] font-light tracking-[0.55em] text-white/35">
          Loading
        </span>
        <span className="absolute left-1/2 top-1/2 block h-px w-[min(620px,56vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white/12">
          <span
            style={{ "--line": `${PRELOADER.lineDurationMs}ms` } as CSSProperties}
            className="absolute inset-y-0 left-0 w-full origin-left bg-primary shadow-[0_0_12px_rgba(60,114,252,0.7)] [animation:preloadLineGrow_var(--line)_cubic-bezier(0.65,0,0.35,1)_forwards]"
          />
        </span>
      </div>
    </div>
  );
}
