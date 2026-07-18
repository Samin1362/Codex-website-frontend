"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { ArrowRightIcon } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CASE_SLIDER } from "@/lib/animations";
import { CASES } from "@/lib/content";

/**
 * Case studies (Plan.md shot 4 / §6.3, Tier B). Header reveals (fadeInLeft 0/200,
 * CTA fadeInUp 200); a `slidesPerView: 'auto'` Swiper of tall image cards that
 * overflow the right edge, with clickable dot pagination below.
 */
export function CaseStudies() {
  const reduced = usePrefersReducedMotion();

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
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          spaceBetween={28}
          loop={CASES.items.length > 3}
          speed={CASE_SLIDER.speed}
          autoplay={
            reduced
              ? false
              : { delay: CASE_SLIDER.autoplayDelay, disableOnInteraction: false }
          }
          pagination={{ clickable: true, el: ".case-pagination" }}
          className="!overflow-visible"
        >
          {CASES.items.map((item) => (
            <SwiperSlide key={item.title} className="!w-[340px] max-w-[80vw]">
              <article className="group relative aspect-[3/4] overflow-hidden">
                <Placeholder label="Case photo" rounded="" className="h-full w-full" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-sm font-semibold text-primary-soft">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                    <Link href={item.href} className="transition hover:text-primary-soft">
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className="absolute bottom-7 right-7 flex h-11 w-11 translate-y-2 items-center justify-center bg-primary text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowRightIcon />
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="case-pagination dot-pagination mt-14 flex justify-center gap-2" />
      </Container>
    </section>
  );
}
