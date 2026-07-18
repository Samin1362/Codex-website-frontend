"use client";

import { useEffect, useState } from "react";
import { PRELOADER } from "@/lib/animations";

/**
 * Letter-by-letter "Loading" preloader (Plan.md §6.6). Renders visible on both
 * server and client (no hydration gap), then dismisses on the real `load` event
 * with a ceiling so a stalled asset can't hang the page on a fake timer.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      setDone(true);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
    const ceiling = window.setTimeout(finish, PRELOADER.maxWaitMs);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(ceiling);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex gap-[2px]">
        {PRELOADER.letters.map((letter, i) => {
          const accent = i === 0 || i === PRELOADER.letters.length - 1;
          return (
            <span
              key={i}
              className={`font-heading text-[46px] font-extrabold ${
                accent ? "text-primary" : "text-ink"
              }`}
              style={{
                animation: `loadJump ${PRELOADER.jumpDurationMs}ms ease-in-out infinite`,
                animationDelay: `${i * PRELOADER.letterStaggerMs}ms`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>

      <span
        aria-hidden
        className="absolute bottom-[13%] h-[46px] w-[46px] rounded-full border-[3px] border-[#e3ebff] border-t-primary"
        style={{ animation: "spin 0.8s linear infinite" }}
      />
    </div>
  );
}
