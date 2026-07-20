import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Counter } from "@/components/sections/Counter";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.projects.metaTitle,
  description: PAGES.projects.metaDescription,
};

/**
 * Projects page. Leads with the full case-study grid (variant="full" — static
 * grid, no header, since the banner introduces it), then the Counter trust band
 * standalone (`flush={false}`: no About above it to overlap), Process, and the
 * closing ContactCTA. Process sits between the two blue bands so they never
 * touch (Plan.md §3/§6).
 */
export default function ProjectsPage() {
  return (
    <main>
      <PageBanner page="projects" />
      <CaseStudies variant="full" />
      <Counter flush={false} />
      <Process />
      <ContactCTA />
    </main>
  );
}
