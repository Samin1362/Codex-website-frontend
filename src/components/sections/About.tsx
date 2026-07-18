import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { HeadsetIcon, ManageIcon, PlayIcon, ShieldIcon } from "@/components/icons";
import { ABOUT, type ServiceIconName } from "@/lib/content";

const ICONS: Record<ServiceIconName, typeof ManageIcon> = {
  manage: ManageIcon,
  shield: HeadsetIcon,
  code: ShieldIcon,
};

/**
 * About (Plan.md shot 3). Left image group fadeInRight 200 (big photo, an
 * overlapping video-popup photo with the pulse ring, a blue circle shape). Right
 * column: header fadeInUp 0/200/400, feature row + founder block fadeInDown.
 */
export function About() {
  return (
    <section id="about" className="bg-sub pb-[clamp(120px,17vw,210px)] pt-[clamp(64px,10vw,120px)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image group */}
          <Reveal effect="fadeInRight" delay={200} className="relative">
            {/* Blue circle shape behind top-right */}
            <span
              aria-hidden
              className="absolute -right-2 top-6 hidden h-40 w-40 rounded-full border-[26px] border-primary/90 sm:block"
            />
            <div className="relative flex items-end gap-0">
              <Placeholder label="About photo" className="aspect-[4/5] w-[62%] shadow-raised" />
              <div className="relative -ml-16 mb-10 w-[52%]">
                <Placeholder
                  label="Video"
                  className="aspect-square w-full border-[6px] border-white shadow-raised"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="#0"
                    aria-label="Play video"
                    className="pulse-ring flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <PlayIcon />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal effect="fadeInUp" delay={0} className="mb-4">
              <Eyebrow tone="primary">{ABOUT.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              effect="fadeInUp"
              delay={200}
              as="h2"
              className="text-h2-narrow font-extrabold text-balance"
            >
              {ABOUT.title}
            </Reveal>
            <Reveal effect="fadeInUp" delay={400} as="p" className="mt-5 text-base text-muted">
              {ABOUT.body}
            </Reveal>

            <Reveal effect="fadeInDown" delay={200} className="mt-9 grid gap-6 sm:grid-cols-2">
              {ABOUT.features.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white text-primary shadow-card">
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold">{f.title}</h4>
                      <p className="mt-1 text-[15px] text-muted">{f.body}</p>
                    </div>
                  </div>
                );
              })}
            </Reveal>

            <Reveal
              effect="fadeInDown"
              delay={400}
              className="mt-11 flex flex-wrap items-center gap-7"
            >
              <Button href={ABOUT.cta.href}>{ABOUT.cta.label}</Button>
              <div className="flex items-center gap-3">
                <Placeholder label="" rounded="rounded-full" className="h-12 w-12" />
                <div>
                  <h5 className="font-heading font-bold">{ABOUT.founder.name}</h5>
                  <span className="text-sm text-muted">{ABOUT.founder.role}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
