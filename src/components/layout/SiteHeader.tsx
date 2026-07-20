"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { isActivePath } from "@/lib/nav";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";
import { SearchOverlay } from "./SearchOverlay";
import {
  MailIcon,
  MenuIcon,
  PhoneRingIcon,
  SearchIcon,
  SocialIcon,
} from "@/components/icons";
import { NAV_LINKS, QUOTE_CTA, SITE, LINKED_SOCIALS } from "@/lib/content";

/**
 * The full header stack: dark top bar, the sticky white header with its angled
 * gradient wedge, plus the two overlays it triggers (search, mobile drawer).
 * One client island owns all the interactive state (Plan.md §5, shots 1 & 9).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while an overlay is open.
  useEffect(() => {
    const locked = drawerOpen || searchOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen]);

  return (
    <>
      {/* Top bar — hidden < 768px, matching the template's d-lg-block. */}
      <div className="hidden bg-night text-white md:block">
        <Container className="flex h-11 items-center justify-between">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <MailIcon className="text-white" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/[\s-]/g, "")}`}
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <PhoneRingIcon className="text-white" />
                {SITE.phone}
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href={`tel:${SITE.phoneAlt.replace(/[\s-]/g, "")}`}
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <PhoneRingIcon className="text-white" />
                {SITE.phoneAlt}
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            {LINKED_SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="block text-white/80 transition hover:text-primary-soft"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Header — sticky, gains a shadow once scrolled. */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled ? "shadow-[0_6px_24px_rgba(16,24,64,0.08)]" : ""
        }`}
      >
        {/* Angled gradient wedge behind the logo — full-bleed to the left edge. */}
        <div
          aria-hidden
          className="gradient-brand pointer-events-none absolute inset-y-0 left-0 w-[min(46%,200px)] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] lg:w-[min(28%,400px)]"
        />

        <Container className="relative flex h-[88px] items-center justify-between">
          <Logo variant="light" className="relative z-10" />

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`font-heading text-nav font-semibold transition hover:text-primary ${
                        active ? "text-primary" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="text-ink transition hover:text-primary"
                >
                  <SearchIcon />
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={QUOTE_CTA.href}
              className="gradient-brand hidden items-center gap-[10px] px-7 py-4 text-copy font-bold text-white shadow-cta transition hover:brightness-110 lg:inline-flex"
            >
              {QUOTE_CTA.label}
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden>
                <path
                  d="M0 5h16M12.5 1 17 5l-4.5 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="text-ink lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
