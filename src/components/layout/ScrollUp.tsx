"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

/**
 * Back-to-top button with an SVG scroll-progress ring (Plan.md §5 shot 9). The
 * ring path is normalised to pathLength=1 so progress maps straight to
 * strokeDashoffset. Appears once the page has scrolled past ~40%.
 */
export function ScrollUp() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(p);
      setVisible(window.scrollY > window.innerHeight * 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-primary shadow-card transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="-1 -1 102 102"
        fill="none"
        aria-hidden
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          pathLength={1}
          stroke="var(--color-primary)"
          strokeWidth={3}
          strokeDasharray={1}
          strokeDashoffset={1 - progress}
          strokeLinecap="round"
        />
      </svg>
      <ArrowUpIcon className="relative" />
    </button>
  );
}
