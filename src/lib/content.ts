/**
 * Single source of copy for the whole page — rebrand-friendly per Plan.md §9.
 * Body copy for the sections lands here in later phases; Phase 2 only needs the
 * chrome (nav, contact, socials, footer). Values are Codex placeholders until the
 * §8 open question ("what does Codex do?") is answered — structure is locked.
 */

export const SITE = {
  name: "Codex",
  email: "hello@codex.com",
  phone: "+208-6666-0112",
  phoneAlt: "308-5555-0113",
  address: "4517 Washington Ave. Manchester, Kentucky 39495",
  hours: "Mon - Sat: 10.00 AM - 4.00 PM",
} as const;

/** Top-level nav. Single-page anchors per Plan.md open question #4. */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pages", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const QUOTE_CTA = { label: "Get A Quote", href: "#contact" } as const;

export type SocialName = "facebook" | "twitter" | "linkedin" | "youtube";

export const SOCIALS: { name: SocialName; href: string; label: string }[] = [
  { name: "facebook", href: "#0", label: "Facebook" },
  { name: "twitter", href: "#0", label: "Twitter" },
  { name: "linkedin", href: "#0", label: "LinkedIn" },
  { name: "youtube", href: "#0", label: "YouTube" },
];

/* ------------------------------------------------------------------ *
 * Section copy (Plan.md §3). Placeholder bodies until the §8 "what does
 * Codex do?" question is answered — headings/structure follow the template.
 * ------------------------------------------------------------------ */

export type ServiceIconName = "manage" | "shield" | "code";

export const SERVICES = {
  eyebrow: "What We Offer",
  title: "Excellent It Services",
  cta: { label: "View All Services", href: "#services" },
  items: [
    {
      icon: "manage" as ServiceIconName,
      title: "IT Management",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "Cyber Security",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
    {
      icon: "code" as ServiceIconName,
      title: "Web Development",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
  ],
} as const;

export const ABOUT = {
  eyebrow: "About Codex",
  title: "We Strive to Offer Intelligent Business Solutions",
  body: "Consectetur adipiscing elit aenean scelerisque augue vitae consequat, eget congue velit in cursus sodales the turpis euismod quis sapien euismod quis sapien the condimentum nec lorem nulla augue.",
  features: [
    {
      icon: "manage" as ServiceIconName,
      title: "Best Services",
      body: "Scelerisque augue the consequat sodales",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "24/7 Call Support",
      body: "Scelerisque augue the consequat sodales",
    },
  ],
  cta: { label: "Explore More", href: "#services" },
  founder: { name: "Ronald Richards", role: "Co, Founder" },
} as const;

export const COUNTER_STATS = [
  { target: 6561, suffix: "+", label: "Satisfied Clients" },
  { target: 600, suffix: "+", label: "Finished Projects" },
  { target: 250, suffix: "+", label: "Skilled Experts" },
  { target: 590, suffix: "+", label: "Media Posts" },
] as const;

export type OfferingIconName =
  | "website"
  | "android"
  | "ios"
  | "watch"
  | "tv"
  | "iot";

export const OFFERING = {
  eyebrow: "Our Offering",
  title: "Enhance and Pioneer Using Technology Trends",
  cta: { label: "Explore More", href: "#services" },
  items: [
    { icon: "website" as OfferingIconName, label: "Website" },
    { icon: "android" as OfferingIconName, label: "Android" },
    { icon: "ios" as OfferingIconName, label: "IOS" },
    { icon: "watch" as OfferingIconName, label: "Watch" },
    { icon: "tv" as OfferingIconName, label: "Tv" },
    { icon: "iot" as OfferingIconName, label: "IOT" },
  ],
} as const;

export const PROCESS = {
  eyebrow: "Work Process",
  title: "Our Development Process",
  steps: [
    {
      n: 1,
      title: "Define Requirements",
      body: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
    {
      n: 2,
      title: "Design & Prototyping",
      body: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
    {
      n: 3,
      title: "Final Solution",
      body: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
  ],
} as const;

export const BLOG = {
  eyebrow: "Blog & News",
  title: "Explore Blogs and News",
  posts: [
    {
      day: "10",
      month: "Dec",
      title: "Necessity May Give us Best Virtual Court",
      href: "#0",
    },
    {
      day: "12",
      month: "Dec",
      title: "Tackling the Changes of Retail Industry",
      href: "#0",
    },
    {
      day: "15",
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform",
      href: "#0",
    },
  ],
} as const;

export const FOOTER = {
  blurb:
    "Codex builds the platforms, security and infrastructure modern teams run on — reliable systems delivered with clarity.",
  columns: [
    {
      title: "IT Solution",
      links: [
        "IT Management",
        "SEO Optimization",
        "Web Development",
        "Cyber Security",
        "Data Security",
      ].map((label) => ({ label, href: "#services" })),
    },
    {
      title: "Quick Link",
      links: [
        { label: "About Codex", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Pricing Plan", href: "#0" },
        { label: "Our Projects", href: "#case-studies" },
        { label: "Our Team", href: "#0" },
      ],
    },
  ],
  copyright: `© All Copyright ${new Date().getFullYear()} by Codex`,
  legal: [
    { label: "Terms & Condition", href: "#0" },
    { label: "Privacy Policy", href: "#0" },
  ],
} as const;
