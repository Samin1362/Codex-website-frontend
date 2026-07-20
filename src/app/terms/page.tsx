import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { LegalProse } from "@/components/sections/LegalProse";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.terms.metaTitle,
  description: PAGES.terms.metaDescription,
};

/** Terms & Conditions. Copy is generic boilerplate — see the note on `LEGAL`. */
export default function TermsPage() {
  return (
    <main>
      <PageBanner page="terms" />
      <LegalProse doc="terms" />
    </main>
  );
}
