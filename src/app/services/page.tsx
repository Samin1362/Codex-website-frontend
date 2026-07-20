import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { Services } from "@/components/sections/Services";
import { Counter } from "@/components/sections/Counter";
import { Offering } from "@/components/sections/Offering";
import { Brands } from "@/components/sections/Brands";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.services.metaTitle,
  description: PAGES.services.metaDescription,
};

/**
 * Services page. Leads with the full 6-card Services grid (variant="full", no
 * header — the banner introduces it), then a standalone Counter band
 * (`flush={false}`, so no negative-margin overlap without an About above it),
 * the Offering→Brands overlap pair (Home defaults), Process, and the closing
 * ContactCTA. Ordered so no two blue bands sit adjacent (Plan.md §3/§6).
 */
export default function ServicesPage() {
  return (
    <main>
      <PageBanner page="services" />
      <Services variant="full" />
      <Counter flush={false} />
      <Offering />
      <Brands />
      <Process />
      <ContactCTA />
    </main>
  );
}
