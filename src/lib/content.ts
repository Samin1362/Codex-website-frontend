/**
 * Single source of copy for the whole page — rebrand-friendly per Plan.md §9.
 * Body copy for the sections lands here in later phases; Phase 2 only needs the
 * chrome (nav, contact, socials, footer). Values are Codex placeholders until the
 * §8 open question ("what does Codex do?") is answered — structure is locked.
 */

export const SITE = {
  name: "Codex",
  email: "info@codexitservice.com",
  website: "www.codexitservice.com",
  phone: "+8801984823110",
  phoneAlt: "+880 1710-697143",
  phoneAlt2: "+8801754759899",
  address: "Plot-C/3, Block-D, Road-1, Mirpur-1, Dhaka-1216, Bangladesh",
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
      image: "/images/7.png",
    },
    {
      n: 2,
      title: "Design & Prototyping",
      body: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
      image: "/images/8.png",
    },
    {
      n: 3,
      title: "Final Solution",
      body: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
      image: "/images/9.png",
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
      title: "10 Web Development Trends to Watch in 2025",
      href: "#0",
      image: "/images/5.jpeg",
    },
    {
      day: "12",
      month: "Dec",
      title: "Tackling the Changes of Retail Industry",
      href: "#0",
      image: "/images/14.png",
    },
    {
      day: "15",
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform",
      href: "#0",
      image: "/images/15.png",
    },
  ],
} as const;

/**
 * Hero slides. The template ships identical copy on all 3 slides (filler) — we
 * match that here so the rotating banner always reads exactly like the reference
 * (only the choreography replays per slide, §6.2). Distinct Codex headlines land
 * with the real copy pass in Phase 5.
 */
export const HERO = {
  eyebrow: "Best IT Solution Provider",
  cta: { label: "Explore More", href: "#services" },
  slides: [
    {
      title: "Excellent It Services for Your Success",
      body: "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
    },
    {
      title: "Excellent It Services for Your Success",
      body: "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
    },
    {
      title: "Excellent It Services for Your Success",
      body: "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
    },
  ],
} as const;

export const CASES = {
  eyebrow: "From Our Case Studies",
  title: "We Delivered Best Solution",
  cta: { label: "View All Case", href: "#0" },
  items: [
    { category: "Solution", title: "IT Management", href: "#0", image: "/images/12.png" },
    { category: "Technology", title: "Platform Integration", href: "#0", image: "/images/10.png" },
    { category: "Solution", title: "Web Development", href: "#0", image: "/images/13.png" },
    { category: "Security", title: "Network Security", href: "#0", image: "/images/11.png" },
  ],
} as const;

// Tech bar marquee marks moved to src/lib/techStack.ts (monochrome simple-icons
// glyphs rendered white on the blue band — uniform sizing + cohesive theming).

export const TESTIMONIALS = {
  eyebrow: "Clients Review",
  title: "What They Say About Our",
  body: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
  items: [
    {
      name: "Suborna Tarchera",
      role: "Web Developer",
      rating: 4,
      quote:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    },
    {
      name: "Alex Rony",
      role: "Web Designer",
      rating: 4,
      quote:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Talk To Us",
  title: "How May We Help You!",
  fields: [
    { id: "name", label: "Your Name", type: "text", placeholder: "Your name" },
    { id: "email", label: "Your Email", type: "email", placeholder: "info@example.com" },
    { id: "subject", label: "Subject", type: "text", placeholder: "Subject" },
    { id: "phone", label: "Your Phone", type: "text", placeholder: "+1 253 457 7840" },
  ],
  submit: "Send Message",
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
