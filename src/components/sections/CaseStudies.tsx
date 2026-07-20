"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CASE_SLIDER } from "@/lib/animations";
import { CASES } from "@/lib/content";

/** Home shows the first four; the Projects grid shows every case. */
const TEASER_CASES = CASES.items.slice(0, 4);

/** The card body is shared by both variants so hover/overlay stay identical. */
function CaseCard({ item }: { item: (typeof CASES.items)[number] }) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Placeholder
          label="Project photo"
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent" />
      {/* No per-case detail route exists yet, so the title and the template's
          hover arrow-link are display-only rather than links to nowhere. Restore
          both when /projects/[slug] lands. */}
      <div className="absolute inset-x-0 bottom-0 p-7">
        <span className="text-sm font-semibold text-primary-soft">{item.category}</span>
        <h3 className="mt-1 font-heading text-2xl font-bold text-white">{item.title}</h3>
      </div>
    </article>
  );
}

/**
 * Case studies (Plan.md shot 4 / §6.3, Tier B).
 *
 * `teaser` (Home): header reveals (fadeInLeft 0/200, CTA fadeInUp 200) above a
 * `slidesPerView: 'auto'` Swiper of the first four cards, overflowing the right
 * edge, with clickable dot pagination below.
 *
 * `full` (Projects page): every case as a static 3-col grid, no header — the
 * PageBanner already introduces the page (§6).
 */
export function CaseStudies({ variant = "teaser" }: { variant?: "teaser" | "full" }) {
  const reduced = usePrefersReducedMotion();

  if (variant === "full") {
    return (
      <section id="case-studies" className="section-y">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CASES.items.map((item, i) => (
              <Reveal key={item.title} effect="fadeInUp" delay={(i % 3) * 200}>
                <CaseCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="case-studies" className="section-y overflow-hidden">
      <Container>
        <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <Reveal effect="fadeInLeft" delay={0} className="mb-4">
              <Eyebrow tone="primary">{CASES.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              effect="fadeInLeft"
              delay={200}
              as="h2"
              className="text-h2 font-extrabold text-balance"
            >
              {CASES.title}
            </Reveal>
          </div>
          <Reveal effect="fadeInUp" delay={200}>
            <Button href={CASES.cta.href}>{CASES.cta.label}</Button>
          </Reveal>
        </div>
      </Container>

      <Container className="!w-[min(1290px,100%-48px)]">
        <Swiper
          modules={[Autoplay, FreeMode, Pagination]}
          slidesPerView="auto"
          spaceBetween={28}
          grabCursor
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.7,
            momentumVelocityRatio: 0.7,
            sticky: false,
          }}
          loop={TEASER_CASES.length > 3}
          speed={CASE_SLIDER.speed}
          autoplay={
            reduced
              ? false
              : {
                  delay: CASE_SLIDER.autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          pagination={{ clickable: true, el: ".case-pagination" }}
          className="!overflow-visible"
        >
          {TEASER_CASES.map((item) => (
            <SwiperSlide key={item.title} className="!w-[340px] max-w-[80vw]">
              <CaseCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="case-pagination dot-pagination mt-14 flex justify-center gap-2" />
      </Container>
    </section>
  );
}
