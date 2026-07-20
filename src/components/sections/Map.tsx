import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/content";

/** Office coordinates (Mirpur-1, Dhaka) — also the centre the static image was rendered at. */
const LAT = 23.7986;
const LNG = 90.3537;

/**
 * Office location (Plan.md §7, static-image variant per the user's call).
 *
 * `public/images/map-mirpur.png` is a pre-rendered OpenStreetMap raster (z15,
 * brand pin composited at the office) — NOT an iframe. That keeps the page free
 * of third-party scripts, cookies and layout-shifting embeds, and costs one
 * cached image instead of a live tile session. Trade-off: it can't pan or zoom,
 * so the whole frame links out to a real map for anyone who wants to.
 *
 * ODbL requires visible attribution for OSM-derived imagery — the credit line
 * below is load-bearing, not decoration. Don't remove it.
 *
 * Carries NO section padding of its own: the Contact section's `pb` sets the gap
 * above and the following band's `pt` sets the gap below, so adding `section-y`
 * here doubles both.
 */
export function Map() {
  return (
    <section id="map">
      <Container>
        <Reveal effect="fadeInUp" delay={0}>
          <a
            href={`https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=16/${LAT}/${LNG}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the Codex office location in a map: ${SITE.address}`}
            className="group relative block overflow-hidden border border-line shadow-card transition-shadow hover:shadow-raised"
          >
            <Image
              src="/images/map-mirpur.png"
              alt={`Map showing the Codex IT Service office at ${SITE.address}`}
              width={1024}
              height={512}
              sizes="(max-width: 1024px) 100vw, 1240px"
              className="h-[clamp(260px,38vw,460px)] w-full object-cover"
            />

            {/* Address plate — keeps the destination readable over the map. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 bg-linear-to-t from-ink/85 to-transparent p-6 sm:p-8">
              <p className="max-w-[46ch] text-copy font-semibold text-white">{SITE.address}</p>
              <span className="text-xs text-white/70">© OpenStreetMap contributors</span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
