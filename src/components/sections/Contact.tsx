"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { CONTACT, TESTIMONIALS } from "@/lib/content";

/**
 * Contact + Reviews (Plan.md shot 7 / §6.3, Tier B). Left: a gradient form card
 * over a photo (fadeInLeft 200), non-functional like the template. Right: the
 * "Clients Review" header (fadeInUp 0/200/400) and a 1-per-view testimonial
 * Swiper with custom prev/next buttons (fadeInDown).
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-mist py-[clamp(64px,10vw,120px)]">
      {/* Photo bleeding off the left edge, behind the form card. */}
      <Placeholder
        label="Team photo"
        rounded="rounded-none"
        className="absolute inset-y-0 left-0 hidden w-[42%] lg:block"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <Reveal effect="fadeInLeft" delay={200}>
            <div className="gradient-band p-8 text-white shadow-cta sm:p-10 lg:ml-8">
              <Eyebrow tone="light" className="mb-4">
                {CONTACT.eyebrow}
              </Eyebrow>
              <h2 className="mb-8 text-h2-narrow font-extrabold">{CONTACT.title}</h2>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2">
                {CONTACT.fields.map((field) => (
                  <label key={field.id} className="block text-sm font-semibold">
                    {field.label}*
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="mt-2 h-12 w-full bg-white px-4 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                    />
                  </label>
                ))}
                <label className="block text-sm font-semibold sm:col-span-2">
                  Message*
                  <textarea
                    rows={4}
                    placeholder="Write Message"
                    className="mt-2 w-full bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-1 h-14 bg-ink font-heading font-bold text-white transition hover:bg-night sm:col-span-2"
                >
                  {CONTACT.submit}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Reviews */}
          <div className="lg:pl-6">
            <Reveal effect="fadeInUp" delay={0} className="mb-4">
              <Eyebrow tone="primary">{TESTIMONIALS.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal effect="fadeInUp" delay={200} as="h2" className="text-h2 font-extrabold">
              {TESTIMONIALS.title}
            </Reveal>
            <Reveal effect="fadeInUp" delay={400} as="p" className="mt-5 text-muted">
              {TESTIMONIALS.body}
            </Reveal>

            <Reveal effect="fadeInDown" delay={0} className="mt-9">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop
                speed={700}
                navigation={{ prevEl: ".testi-prev", nextEl: ".testi-next" }}
              >
                {TESTIMONIALS.items.map((t) => (
                  <SwiperSlide key={t.name}>
                    <article className=" bg-white p-8 shadow-card">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Placeholder label="" rounded="rounded-full" className="h-16 w-16 shrink-0" />
                          <div>
                            <h4 className="font-heading text-lg font-bold">{t.name}</h4>
                            <p className="text-sm text-muted">{t.role}</p>
                            <Stars rating={t.rating} />
                          </div>
                        </div>
                        <QuoteMark />
                      </div>
                      <p className="mt-6 leading-relaxed text-muted">“ {t.quote} ”</p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Reveal>

            <Reveal effect="fadeInDown" delay={200} className="mt-9 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous review"
                className="testi-prev flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition hover:bg-primary hover:text-white"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                className="testi-next flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:brightness-110"
              >
                <Chevron dir="right" />
              </button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-1 flex gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z"
            fill={i < rating ? "var(--color-primary)" : "#d3dced"}
          />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg width="44" height="33" viewBox="0 0 50 37" fill="none" aria-hidden className="shrink-0">
      <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="var(--color-primary)" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M11 3 5 9l6 6" : "M7 3l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
