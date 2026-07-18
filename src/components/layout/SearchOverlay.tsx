"use client";

import { useEffect, useRef } from "react";
import { CloseIcon, SearchIcon } from "@/components/icons";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Fullscreen search — our replacement for Magnific/`.search-wrap`. Non-functional
 * like the template (Plan.md open question #3); focuses the field on open and
 * closes on Escape.
 */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-night/95 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-8 top-8 text-white/80 transition hover:rotate-90 hover:text-white"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[min(720px,100%-48px)]"
        role="search"
      >
        <div className="flex items-center gap-4 border-b-2 border-white/30 pb-4">
          <SearchIcon className="h-6 w-6 shrink-0 text-white/70" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            className="w-full bg-transparent text-2xl text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
}
