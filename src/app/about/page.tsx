import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { About } from "@/components/sections/About";
import { Counter } from "@/components/sections/Counter";
import { Offering } from "@/components/sections/Offering";
import { Brands } from "@/components/sections/Brands";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.about.metaTitle,
  description: PAGES.about.metaDescription,
};

/**
 * About page. Reuses the Home story sections in an order that preserves their
 * overlap couplings (About→Counter, Offering→Brands are the Home pairs, so the
 * `-mt` bands land correctly on their default `flush`), then closes with the
 * page-specific Testimonials + the shared ContactCTA band (Plan.md §3).
 */
export default function AboutPage() {
  return (
    <main>
      <PageBanner page="about" />
      <About />
      <Counter />
      <Offering />
      <Brands />
      <Process />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
