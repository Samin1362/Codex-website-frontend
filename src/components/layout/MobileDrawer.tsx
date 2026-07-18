"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  CloseIcon,
  LocationIcon,
  MailIcon,
  PhoneRingIcon,
  SearchIcon,
  SocialIcon,
} from "@/components/icons";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/content";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * The < 992px slide-in menu — our replacement for the template's meanmenu
 * sidebar. Overlay + right-hand panel; Escape and overlay click both dismiss.
 */
export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-night/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[320px] max-w-[85%] flex-col overflow-y-auto bg-ink px-7 py-8 text-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo variant="light" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/80 transition hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mb-7 flex items-center rounded-[4px] bg-white/10 px-4">
          <input
            type="search"
            placeholder="Search..."
            className="h-11 w-full bg-transparent text-[15px] text-white placeholder:text-white/50 focus:outline-none"
          />
          <SearchIcon className="text-white/70" />
        </div>

        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-[14px] font-heading text-[17px] font-semibold text-white/90 transition hover:text-primary-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-8 flex flex-col gap-3 text-[15px] text-white/80">
          <li className="flex items-center gap-3">
            <LocationIcon className="shrink-0 text-primary-soft" />
            <span>{SITE.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <PhoneRingIcon className="shrink-0 text-primary-soft" />
            <a href={`tel:${SITE.phone}`} className="transition hover:text-white">
              {SITE.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MailIcon className="shrink-0 text-primary-soft" />
            <a href={`mailto:${SITE.email}`} className="transition hover:text-white">
              {SITE.email}
            </a>
          </li>
        </ul>

        <div className="mt-8 flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 text-white/80 transition hover:border-primary hover:bg-primary hover:text-white"
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
