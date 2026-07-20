import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactInfoCards } from "@/components/sections/ContactInfoCards";
import { Contact } from "@/components/sections/Contact";
import { Map } from "@/components/sections/Map";
import { Brands } from "@/components/sections/Brands";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.contact.metaTitle,
  description: PAGES.contact.metaDescription,
};

/**
 * Contact page. Answers "how do I reach you" first (ContactInfoCards with the
 * real SITE details), then the form at full width (`showReviews={false}` — the
 * reviews column belongs to Home), then the static office map, closing on the
 * Brands band standalone (`flush={false}`: no Offering above to overlap into).
 *
 * No ContactCTA here — a "get in touch" band on the contact page is redundant
 * (Plan.md §3/§6).
 */
export default function ContactPage() {
  return (
    <main>
      <PageBanner page="contact" />
      <ContactInfoCards />
      <Contact showReviews={false} />
      <Map />
      <Brands flush={false} />
    </main>
  );
}
