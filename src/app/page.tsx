import { Container } from "@/components/ui/Container";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Counter } from "@/components/sections/Counter";
import { Offering } from "@/components/sections/Offering";
import { Process } from "@/components/sections/Process";
import { Blog } from "@/components/sections/Blog";

/**
 * Section composition. Phase 3 wires the static sections (Services, About,
 * Counter, Offering, Process, Blog). The Hero, Case Studies, Brands and
 * Contact/Testimonial sliders arrive in Phase 4 — a placeholder banner holds
 * the #home anchor until then.
 */
export default function Home() {
  return (
    <main>
      {/* Phase 4 placeholder — the 3-slide hero Swiper lands here. */}
      <section
        id="home"
        className="gradient-brand flex min-h-[60vh] items-center py-24 text-white"
      >
        <Container>
          <p className="text-[15px] font-bold uppercase tracking-[2px] text-white/80">
            Best IT Solution Provider
          </p>
          <h1 className="mt-4 max-w-[760px] text-h1 font-extrabold leading-[1.05] text-balance">
            Excellent It Services for Your Success
          </h1>
          <p className="mt-6 max-w-[520px] text-white/85">
            Hero slider arrives in Phase 4 — this band holds the layout and the
            #home anchor in the meantime.
          </p>
        </Container>
      </section>

      <Services />
      <About />
      <Counter />
      <Offering />
      <Process />
      <Blog />
    </main>
  );
}
