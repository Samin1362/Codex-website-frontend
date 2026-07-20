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

/** Top-level nav — real routes now the site is multipage (Plan.md §4.3). */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const QUOTE_CTA = { label: "Get A Quote", href: "/contact" } as const;

/* ------------------------------------------------------------------ *
 * Per-page banner + metadata (Plan.md §4.2 / §8). Each sub-page opens with a
 * `PageBanner` fed from here; the route's `metadata` reuses metaTitle (the root
 * layout wraps it as "%s · Codex") and metaDescription.
 * ------------------------------------------------------------------ */

export type PageKey =
  | "about"
  | "services"
  | "projects"
  | "blog"
  | "contact"
  | "terms"
  | "privacy";

export type PageMeta = {
  title: string;
  eyebrow: string;
  breadcrumb: { label: string; href?: string }[];
  intro: string;
  metaTitle: string;
  metaDescription: string;
};

export const PAGES: Record<PageKey, PageMeta> = {
  about: {
    title: "About Us",
    eyebrow: "Who We Are",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "About" }],
    intro:
      "The people, principles and process behind Codex — how we build the platforms, security and infrastructure modern teams run on.",
    metaTitle: "About Us",
    metaDescription:
      "Learn about Codex IT Service Ltd. — our team, values and approach to delivering reliable IT solutions.",
  },
  services: {
    title: "Our Services",
    eyebrow: "What We Offer",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Services" }],
    intro:
      "From IT management to cyber security and custom web development — the full range of services Codex delivers with clarity.",
    metaTitle: "Our Services",
    metaDescription:
      "Explore Codex's IT services: IT management, cyber security, web development and more.",
  },
  projects: {
    title: "Our Projects",
    eyebrow: "From Our Case Studies",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Projects" }],
    intro:
      "A selection of the solutions we've shipped — platform integrations, security work and web builds delivered end to end.",
    metaTitle: "Our Projects",
    metaDescription:
      "See the work Codex has delivered across IT management, platform integration, security and web development.",
  },
  blog: {
    title: "Blog & News",
    eyebrow: "Latest Insights",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Blog" }],
    intro:
      "Ideas, trends and updates from the Codex team on technology, security and building for the web.",
    metaTitle: "Blog & News",
    metaDescription:
      "Read the latest articles and news from Codex on web development, security and technology trends.",
  },
  contact: {
    title: "Contact Us",
    eyebrow: "Talk To Us",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
    intro:
      "Tell us what you're building and how we can help — our team will get back to you shortly.",
    metaTitle: "Contact Us",
    metaDescription:
      "Get in touch with Codex IT Service Ltd. — phone, email and our Dhaka office address.",
  },
  terms: {
    title: "Terms & Conditions",
    eyebrow: "Legal",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Terms & Conditions" }],
    intro: "The terms that govern your use of this website and our services.",
    metaTitle: "Terms & Conditions",
    metaDescription:
      "The terms and conditions governing use of the Codex IT Service Ltd. website and services.",
  },
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Privacy Policy" }],
    intro: "How Codex collects, uses and protects the information you share with us.",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Codex IT Service Ltd. collects, uses, stores and protects your personal information.",
  },
};

/**
 * Legal page bodies. **Generic boilerplate — must be reviewed by a lawyer before
 * launch.** It is not tailored to Bangladeshi law, and deliberately makes no
 * claims about analytics, cookies or third-party processors that we haven't
 * verified. Edit to match what the business actually does.
 */
export const LEGAL: Record<"terms" | "privacy", { heading: string; body: string[] }[]> = {
  terms: [
    {
      heading: "Acceptance of Terms",
      body: [
        "By accessing this website or engaging Codex IT Service Ltd. for services, you agree to these terms. If you do not agree with them, please do not use the site.",
        "We may update these terms from time to time. Continued use of the site after a change takes effect means you accept the revised terms.",
      ],
    },
    {
      heading: "Use of the Site",
      body: [
        "You agree to use this website lawfully and not to attempt to disrupt it, gain unauthorised access to it, or use it to distribute harmful software or unsolicited communications.",
        "The content on this site is provided for general information. We work to keep it accurate, but we make no warranty that it is complete, current or error-free.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "The design, text, graphics and logos on this site are owned by Codex IT Service Ltd. or used under licence. You may not reproduce or redistribute them commercially without written permission.",
      ],
    },
    {
      heading: "Services & Engagements",
      body: [
        "Enquiries submitted through this site do not by themselves create a contract. Project scope, deliverables, timelines and fees are set out in a separate written agreement between you and Codex.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "To the extent permitted by law, Codex IT Service Ltd. is not liable for indirect or consequential loss arising from use of this website. Nothing here limits liability that cannot lawfully be limited.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about these terms can be sent to info@codexitservice.com, or to our office at Plot-C/3, Block-D, Road-1, Mirpur-1, Dhaka-1216, Bangladesh.",
      ],
    },
  ],
  privacy: [
    {
      heading: "Information We Collect",
      body: [
        "When you submit the contact form we receive the name, email address, phone number, subject and message you provide. We collect this so that we can respond to your enquiry.",
        "We ask only for what we need to reply to you. Please do not send confidential or sensitive information through the contact form.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "We use the details you send to respond to your enquiry, to discuss and deliver services you have asked about, and to keep records of our correspondence.",
        "We do not sell your personal information, and we do not use it for advertising.",
      ],
    },
    {
      heading: "Sharing",
      body: [
        "We do not share your information with third parties except where it is necessary to deliver a service you have requested, or where we are required to do so by law.",
      ],
    },
    {
      heading: "Retention & Security",
      body: [
        "We keep enquiry correspondence for as long as needed to serve you and to meet our record-keeping obligations, then delete it. We take reasonable technical and organisational measures to protect the information we hold.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Write to info@codexitservice.com and we will respond.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "For any privacy question, contact info@codexitservice.com or write to Plot-C/3, Block-D, Road-1, Mirpur-1, Dhaka-1216, Bangladesh.",
      ],
    },
  ],
};

export type SocialName = "facebook" | "twitter" | "linkedin" | "youtube";

/**
 * Social profiles. **`href` is intentionally optional and currently unset** —
 * the real account URLs haven't been supplied yet, and every renderer skips an
 * entry with no `href` rather than shipping a link to nowhere. Paste the real
 * URLs in and the icons reappear everywhere (header, footer, mobile drawer) with
 * no other change needed.
 */
export const SOCIALS: { name: SocialName; href?: string; label: string }[] = [
  { name: "facebook", label: "Facebook" },
  { name: "twitter", label: "Twitter" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "youtube", label: "YouTube" },
];

/** Renderers use this so the "has a real URL" rule lives in exactly one place. */
export const LINKED_SOCIALS = SOCIALS.filter(
  (s): s is { name: SocialName; href: string; label: string } => Boolean(s.href),
);

/* ------------------------------------------------------------------ *
 * Section copy (Plan.md §3). Placeholder bodies until the §8 "what does
 * Codex do?" question is answered — headings/structure follow the template.
 * ------------------------------------------------------------------ */

export type ServiceIconName = "manage" | "shield" | "code" | "support";

export const SERVICES = {
  eyebrow: "What We Offer",
  title: "Excellent It Services",
  cta: { label: "View All Services", href: "/services" },
  // First 3 feed the Home teaser (Services variant="teaser"); the full 6 render
  // on the Services page (variant="full"). Icons are ordered so no glyph repeats
  // within a grid column.
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
    {
      icon: "support" as ServiceIconName,
      title: "24/7 IT Support",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
    {
      icon: "manage" as ServiceIconName,
      title: "Cloud Infrastructure",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "Data Security",
      body: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    },
  ],
} as const;

/** Closing call-to-action band reused across sub-pages (Plan.md §7 ContactCTA). */
export const CTA = {
  eyebrow: "Get Started",
  title: "Let's Build Something Great Together",
  body: "Tell us what you're working on — our team will get back to you with a clear plan and next steps.",
  button: { label: "Get In Touch", href: "/contact" },
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
  cta: { label: "Explore More", href: "/services" },
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
  cta: { label: "Explore More", href: "/services" },
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
  /**
   * First three feed the Home teaser row; the full set fills the Blog grid
   * (`<Blog variant="full" />`) at two rows of three. Dates run newest-last to
   * match the template's ascending badge order.
   *
   * The three existing images are purpose-made cards whose artwork spells out
   * that post's own headline, so the new posts take `image: null` (Placeholder)
   * rather than borrowing art that announces a different article.
   */
  posts: [
    {
      day: "10",
      month: "Dec",
      title: "10 Web Development Trends to Watch in 2025",
      image: "/images/5.jpeg",
    },
    {
      day: "12",
      month: "Dec",
      title: "Tackling the Changes of Retail Industry",
      image: "/images/14.png",
    },
    {
      day: "15",
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform",
      image: "/images/15.png",
    },
    {
      day: "18",
      month: "Dec",
      title: "Why Cloud Migration Pays Off Within a Year",
      image: null,
    },
    {
      day: "22",
      month: "Dec",
      title: "Building a Security Culture Your Team Will Keep",
      image: null,
    },
    {
      day: "28",
      month: "Dec",
      title: "Choosing the Right Managed IT Support Model",
      image: null,
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
  cta: { label: "View All Case", href: "/projects" },
  /**
   * First four feed the Home slider; the full set fills the Projects grid
   * (`<CaseStudies variant="full" />`) at two clean rows of three.
   *
   * `image: null` renders a Placeholder (Tier D). The remaining stock art in
   * public/images is branded marketing collateral with baked-in headline text
   * (logo lockups, the 4-step process infographic), which fights the card's own
   * title overlay — so the last entry waits on a real project photo rather than
   * borrowing one that says the wrong thing.
   */
  items: [
    { category: "Solution", title: "IT Management", image: "/images/12.png" },
    { category: "Technology", title: "Platform Integration", image: "/images/10.png" },
    { category: "Solution", title: "Web Development", image: "/images/13.png" },
    { category: "Security", title: "Network Security", image: "/images/11.png" },
    { category: "Infrastructure", title: "Cloud Migration", image: "/images/15.png" },
    { category: "Support", title: "Managed Service Desk", image: null },
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
      ].map((label) => ({ label, href: "/services" })),
    },
    {
      title: "Quick Link",
      links: [
        { label: "About Codex", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Our Projects", href: "/projects" },
        { label: "Our Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],
  copyright: `© All Copyright ${new Date().getFullYear()} by Codex`,
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
