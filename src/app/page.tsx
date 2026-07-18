import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Counter } from "@/components/sections/Counter";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Offering } from "@/components/sections/Offering";
import { Brands } from "@/components/sections/Brands";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Blog } from "@/components/sections/Blog";

/**
 * Full section composition (Plan.md §5). Server Component; each section is its
 * own island — the sliders (Hero, CaseStudies, Brands, Contact) and Counter opt
 * into "use client" themselves.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Counter />
      <CaseStudies />
      <Offering />
      <Brands />
      <Process />
      <Contact />
      <Blog />
    </main>
  );
}
