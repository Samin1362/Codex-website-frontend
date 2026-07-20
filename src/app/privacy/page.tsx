import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { LegalProse } from "@/components/sections/LegalProse";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGES.privacy.metaTitle,
  description: PAGES.privacy.metaDescription,
};

/** Privacy Policy. Copy is generic boilerplate — see the note on `LEGAL`. */
export default function PrivacyPage() {
  return (
    <main>
      <PageBanner page="privacy" />
      <LegalProse doc="privacy" />
    </main>
  );
}
