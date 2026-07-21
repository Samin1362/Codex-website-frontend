import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { Blog } from "@/components/sections/Blog";
import { Brands } from "@/components/sections/Brands";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.blog.metaTitle,
  description: PAGES.blog.metaDescription,
};

/**
 * Blog page. Full post grid (variant="full" — no header, the banner introduces
 * it), then the Brands trust band standalone (`flush={false}`: no Offering above
 * it to overlap into), Testimonials on `bg-sub` to break the white run, and the
 * closing ContactCTA (Plan.md §3/§6).
 */
export default function BlogPage() {
  return (
    <main>
      <PageBanner page="blog" />
      <Blog variant="full" />
      <Brands flush={false} />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
