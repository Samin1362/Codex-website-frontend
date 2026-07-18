"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  CircuitTrace,
  CodeIcon,
  ManageIcon,
  ShieldIcon,
} from "@/components/icons";
import { useReveal } from "@/hooks/useReveal";
import { REVEAL_DURATION, stagger } from "@/lib/animations";
import { SERVICES, type ServiceIconName } from "@/lib/content";

const ICONS: Record<ServiceIconName, typeof ManageIcon> = {
  manage: ManageIcon,
  shield: ShieldIcon,
  code: CodeIcon,
};

/**
 * Services (Plan.md shot 2). Header fadeInLeft 0/200, CTA fadeInUp 200, three
 * cards bounceInUp @1000ms 0/200/400. The blue "active" background is now a
 * single panel that slides to whichever card the cursor is over — the cards
 * cross-fade their fill so the blue reads as transferring between them. Starts
 * on the middle card (matching the template's static look).
 */
export function Services() {
  const [active, setActive] = useState(1);
  const [armed, setArmed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
  });

  const measure = useCallback((i: number) => {
    const grid = gridRef.current;
    const card = grid?.children[i] as HTMLElement | undefined;
    if (!grid || !card) return;
    setBox({
      left: card.offsetLeft,
      top: card.offsetTop,
      width: card.offsetWidth,
      height: card.offsetHeight,
      ready: true,
    });
  }, []);

  // Position the highlight on the active card (no transition on the very first
  // placement so it doesn't slide in from the corner on load).
  useLayoutEffect(() => {
    measure(active);
    if (!armed) {
      const id = requestAnimationFrame(() => setArmed(true));
      return () => cancelAnimationFrame(id);
    }
  }, [active, measure, armed]);

  // Keep it aligned across reflows (resize, late font/layout settle).
  useEffect(() => {
    const onResize = () => measure(active);
    window.addEventListener("resize", onResize);
    const t = setTimeout(() => measure(active), 300);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [active, measure]);

  return (
    <section id="services" className="section-y">
      <Container>
        <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <Reveal effect="fadeInLeft" delay={0} className="mb-4">
              <Eyebrow tone="primary">{SERVICES.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              effect="fadeInLeft"
              delay={200}
              as="h2"
              className="text-h2 font-extrabold text-balance"
            >
              {SERVICES.title}
            </Reveal>
          </div>
          <Reveal effect="fadeInUp" delay={200}>
            <Button href={SERVICES.cta.href}>{SERVICES.cta.label}</Button>
          </Reveal>
        </div>

        <div className="relative">
          {/* Sliding blue highlight — follows the hovered card. */}
          <div
            aria-hidden
            className={`gradient-band pointer-events-none absolute z-0 shadow-cta ${
              armed ? "transition-all duration-500 ease-out" : ""
            }`}
            style={{
              left: box.left,
              top: box.top,
              width: box.width,
              height: box.height,
              opacity: box.ready ? 1 : 0,
            }}
          />

          <div
            ref={gridRef}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            onMouseLeave={() => setActive(1)}
          >
            {SERVICES.items.map((item, i) => {
              const Icon = ICONS[item.icon];
              const isActive = i === active;
              return (
                <ServiceCard
                  key={item.title}
                  delay={stagger(i)}
                  active={isActive}
                  onActivate={() => setActive(i)}
                >
                  <CircuitTrace
                    className={`pointer-events-none absolute right-0 top-8 h-28 w-40 transition-colors duration-500 ${
                      isActive ? "text-white/25" : "text-primary/15"
                    }`}
                  />
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center transition-colors duration-500 ${
                      isActive ? "bg-white text-primary" : "bg-sub text-primary"
                    }`}
                  >
                    <Icon />
                  </div>
                  <h4
                    className={`relative mt-8 font-heading text-2xl font-bold transition-colors duration-500 ${
                      isActive ? "text-white" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`relative mt-3 text-[15.5px] leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-white/85" : "text-muted"
                    }`}
                  >
                    {item.body}
                  </p>
                </ServiceCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * One service card. The OUTER element owns the `useReveal` bounceInUp entrance and
 * keeps a *static* className — critical, because the reveal observer adds
 * `is-revealed` imperatively, and a className that changed on hover would make
 * React re-reconcile it away (hiding the card). The INNER element carries the
 * hover-driven fill: white when idle, transparent when active so the sliding blue
 * panel behind shows through.
 */
function ServiceCard({
  delay,
  active,
  onActivate,
  children,
}: {
  delay: number;
  active: boolean;
  onActivate: () => void;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bounceInUp relative z-10"
      style={
        {
          "--reveal-duration": `${REVEAL_DURATION.card}ms`,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      <div
        onMouseEnter={onActivate}
        className={`relative h-full overflow-hidden p-10 transition-[background-color,border-color,box-shadow] duration-500 ${
          active
            ? "border border-transparent bg-transparent shadow-none"
            : "border border-line bg-white shadow-card"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
