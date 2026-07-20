"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { searchSite } from "@/lib/search";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Fullscreen search — our replacement for Magnific/`.search-wrap`.
 *
 * Genuinely functional: it queries a static index built from `content.ts`
 * (see `lib/search.ts`), so it needs no backend and can't go stale. Results are
 * real links; Enter navigates to the top hit. Arrow keys move the selection and
 * Escape closes.
 */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => searchSite(query), [query]);

  // Reset between openings so a stale query never greets the next visitor.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" && results.length) {
        e.preventDefault();
        setActive((i) => (i + 1) % results.length);
      }
      if (e.key === "ArrowUp" && results.length) {
        e.preventDefault();
        setActive((i) => (i - 1 + results.length) % results.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, results.length]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const showEmpty = query.trim().length >= 2 && results.length === 0;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-night/95 px-6 pt-[18vh] pb-16 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
      /* `aria-hidden` alone leaves the input and links keyboard-focusable while
         invisible — a Tab lands you in a control you can't see. `inert` removes
         them from the focus order too. */
      inert={!open}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-8 top-8 text-white/80 transition hover:rotate-90 hover:text-white"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      <div className="w-[min(720px,100%)]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (results.length) go(results[active].href);
          }}
          role="search"
        >
          <div className="flex items-center gap-4 border-b-2 border-white/30 pb-4">
            <SearchIcon className="h-6 w-6 shrink-0 text-white/70" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, projects, articles…"
              aria-label="Search this site"
              className="w-full bg-transparent text-2xl text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
        </form>

        <div aria-live="polite" className="mt-6">
          {results.length > 0 && (
            <ul className="divide-y divide-white/10 border border-white/10 bg-white/[0.04]">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.title}`}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    onMouseEnter={() => setActive(i)}
                    className={`flex items-center justify-between gap-4 px-6 py-4 transition ${
                      i === active ? "bg-primary text-white" : "text-white/85 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-heading font-bold">{r.title}</span>
                    <span
                      className={`shrink-0 text-xs uppercase tracking-wide ${
                        i === active ? "text-white/80" : "text-white/45"
                      }`}
                    >
                      {r.kind}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {showEmpty && (
            <p className="text-white/60">
              No matches for “{query.trim()}”. Try “security”, “cloud” or “development”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
