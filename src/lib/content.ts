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
  // Blog temporarily disabled — route lives in app/_blog (private folder). To
  // restore: un-comment here, in FOOTER, the home page + search index, and
  // rename app/_blog back to app/blog.
  // { label: "Blog", href: "/blog" },
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
 * Legal page bodies (Content.md — company-supplied). **Still recommended for
 * lawyer review before launch**, and the effective date needs to be filled in
 * (see PAGES.terms / PAGES.privacy intro — currently no date is shown).
 */
export const LEGAL: Record<"terms" | "privacy", { heading: string; body: string[] }[]> = {
  terms: [
    {
      heading: "Company Information",
      body: [
        "Welcome to CODEX IT Service Ltd. These Terms & Conditions govern your access to and use of our website and professional services. By using this website or engaging our services, you agree to these terms.",
        "CODEX IT Service Ltd. is a technology solutions company providing software development, web and mobile applications, cloud infrastructure, cybersecurity, IT consulting, and managed technology services.",
      ],
    },
    {
      heading: "Scope of Services",
      body: [
        "All projects are delivered according to the agreed proposal, quotation, contract, or Statement of Work (SOW). Any additional work requested outside the agreed scope may require a revised timeline and additional fees.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "Unless otherwise agreed in writing, all intellectual property created during a project remains the property of CODEX IT Service Ltd. until full payment has been received. Upon completion of payment, ownership is transferred according to the applicable agreement.",
      ],
    },
    {
      heading: "Client Responsibilities",
      body: [
        "Clients are responsible for providing accurate information, project requirements, content, approvals, and timely feedback necessary for successful project delivery.",
      ],
    },
    {
      heading: "Confidentiality",
      body: [
        "We respect the confidentiality of all client information and may enter into a Non-Disclosure Agreement (NDA) where required.",
      ],
    },
    {
      heading: "Payments",
      body: [
        "Invoices are payable according to the agreed payment schedule. Delays in payment may affect project timelines or service availability.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "Projects may include integrations with third-party software or services. Their availability, pricing, and functionality are governed by the respective providers.",
      ],
    },
    {
      heading: "Warranty & Support",
      body: [
        "Any warranty or maintenance services are provided only where included within the signed agreement or maintenance plan.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "CODEX IT Service Ltd. shall not be liable for indirect, incidental, or consequential losses arising from the use of our website or services, except where required by applicable law.",
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These Terms & Conditions shall be governed by the laws applicable in the jurisdiction where the service agreement is executed unless otherwise agreed in writing.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "We may update these Terms & Conditions periodically. Continued use of our website constitutes acceptance of the updated version.",
      ],
    },
  ],
  privacy: [
    {
      heading: "Information We Collect",
      body: [
        "CODEX IT Service Ltd. is committed to protecting your privacy and handling your personal data responsibly and transparently.",
        "We may collect: name, company name, email address, phone number, billing information, project requirements, technical information (IP address, browser type, device information) and website usage analytics.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "Your information may be used to respond to enquiries, deliver requested services, prepare quotations and contracts, manage client projects, improve our website and services, communicate important service updates, and comply with legal obligations.",
      ],
    },
    {
      heading: "Data Protection",
      body: [
        "We implement appropriate technical and organisational security measures designed to protect personal data against unauthorised access, disclosure, alteration, or destruction.",
      ],
    },
    {
      heading: "Data Sharing",
      body: [
        "We do not sell personal information. Data may be shared only with trusted service providers who support our business operations or where required by law.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Our website uses cookies to improve functionality, analyse website performance, and enhance user experience. Users may control cookie preferences through their browser settings.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "Personal information is retained only for as long as necessary to fulfil the purposes described in this policy or to comply with applicable legal requirements.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "Where applicable, users may have the right to access their personal data, correct inaccurate information, request deletion, restrict processing, object to processing, and request data portability.",
      ],
    },
    {
      heading: "GDPR Compliance",
      body: [
        "Where applicable, CODEX IT Service Ltd. processes personal data in accordance with the principles of the General Data Protection Regulation (GDPR) and other applicable privacy laws.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        "For any privacy question, contact info@codexitservice.com or visit www.codexitservice.com. You can also write to us at Plot-C/3, Block-D, Road-1, Mirpur-1, Dhaka-1216, Bangladesh.",
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
      body: "Reliable IT management that keeps your technology environment secure, stable and efficient — from infrastructure monitoring to maintenance and strategic IT planning.",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "Cyber Security",
      body: "Proactive cybersecurity that reduces business risk — network security, endpoint protection, vulnerability assessments, access control and security best practices.",
    },
    {
      icon: "code" as ServiceIconName,
      title: "Web Development",
      body: "Custom websites and web applications that combine modern design with high performance — responsive, secure, scalable and SEO-friendly by design.",
    },
    {
      icon: "support" as ServiceIconName,
      title: "24/7 IT Support",
      body: "Timely technical support that minimizes downtime — remote troubleshooting, system maintenance and emergency response to keep your business operational.",
    },
    {
      icon: "manage" as ServiceIconName,
      title: "Cloud Infrastructure",
      body: "Secure, scalable cloud technology that improves flexibility and performance — cloud migration, deployment, server management, backups and ongoing optimization.",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "Data Security",
      body: "Protecting your business information with secure backups, encryption, access management and disaster recovery planning for true business continuity.",
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
  body: "CODEX IT Service Ltd. delivers professional technology solutions that enable businesses to innovate, streamline operations and grow with confidence. Our expertise spans custom software development, enterprise web and mobile applications, cloud infrastructure, cybersecurity and managed IT services — every project approached with a strong focus on quality, security, performance and long-term maintainability.",
  features: [
    {
      icon: "manage" as ServiceIconName,
      title: "Trusted Expertise",
      body: "A skilled team delivering secure, scalable technology solutions.",
    },
    {
      icon: "shield" as ServiceIconName,
      title: "24/7 IT Support",
      body: "Dependable support that keeps your business running without downtime.",
    },
  ],
  cta: { label: "Explore More", href: "/services" },
} as const;

export const COUNTER_STATS = [
  { target: 50, suffix: "+", label: "Satisfied Clients" },
  { target: 100, suffix: "+", label: "Projects Completed" },
  { target: 15, suffix: "+", label: "IT Professionals" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
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
      body: "We start by understanding your goals, challenges and requirements in detail — defining clear scope, deliverables and timelines before any work begins.",
      image: "/images/7.png",
    },
    {
      n: 2,
      title: "Design & Prototyping",
      body: "Our team designs the architecture and builds interactive prototypes, refining the solution with your feedback until it fits your business perfectly.",
      image: "/images/8.png",
    },
    {
      n: 3,
      title: "Final Solution",
      body: "We develop, test and deploy the final solution with a focus on performance and security — backed by ongoing support to keep everything running.",
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
 * Hero slides. Real Codex positioning derived from the company's services and
 * about copy (Content.md gave no hero-specific text) — three distinct headlines
 * the rotating banner cycles through. Swap in marketing-approved copy any time.
 */
export const HERO = {
  eyebrow: "Best IT Solution Provider",
  cta: { label: "Explore More", href: "#services" },
  slides: [
    {
      title: "Reliable IT Solutions for Your Business Growth",
      body: "CODEX IT Service Ltd. delivers custom software, secure cloud infrastructure and managed IT services that help businesses innovate, streamline operations and grow with confidence.",
    },
    {
      title: "Custom Software & Web Development",
      body: "From enterprise web and mobile applications to platform integrations, we build high-performance solutions engineered for quality, security and long-term maintainability.",
    },
    {
      title: "Cyber Security & 24/7 IT Support",
      body: "Protect your business with proactive security, dependable technical support and resilient infrastructure — so your operations stay secure, stable and always running.",
    },
  ],
} as const;

export const CASES = {
  eyebrow: "From Our Case Studies",
  title: "We Delivered Best Solution",
  cta: { label: "View All Case", href: "/projects" },
  /**
   * Codex's real portfolio (Content.md). First four feed the Home slider; the
   * full eight fill the Projects grid (`<CaseStudies variant="full" />`).
   *
   * `image` reuses the generic blue tech art in public/images (no baked-in
   * headline text) for the first five, matched loosely to each project's domain.
   * `image: null` renders a Placeholder — swap in a real project screenshot when
   * available. `category` shows the project type; `title` is the product name.
   */
  items: [
    { category: "Food & Grocery Delivery", title: "DeliGo", image: "/images/10.png" },
    { category: "Ride-Hailing (TVDE)", title: "DeliGo Ride", image: "/images/15.png" },
    { category: "Business Messaging", title: "CallsChat", image: "/images/12.png" },
    { category: "Hotel Reservation", title: "Hotel Booking Platform", image: "/images/13.png" },
    { category: "FinTech & Payments", title: "Money Transfer Platform", image: "/images/11.png" },
    { category: "Multi-Vendor Marketplace", title: "E-Commerce Platform", image: null },
    { category: "Healthcare & Medical", title: "Clinic Management", image: null },
    { category: "Android & iOS", title: "Mobile Application", image: null },
  ],
} as const;

// Tech bar marquee marks moved to src/lib/techStack.ts (monochrome simple-icons
// glyphs rendered white on the blue band — uniform sizing + cohesive theming).

export const TESTIMONIALS = {
  eyebrow: "Clients Review",
  title: "What They Say About Us",
  body: "Trusted by businesses who rely on us to build, secure and support the technology their operations run on.",
  items: [
    {
      name: "Michael Anderson",
      role: "Operations Manager, Horizon Business Solutions",
      rating: 5,
      quote:
        "CODEX IT Service Ltd. developed our business website exactly as we envisioned. Their communication was excellent, and the project was delivered on schedule. We highly recommend their services.",
    },
    {
      name: "Sarah Mitchell",
      role: "Director, Nova Digital Technologies",
      rating: 5,
      quote:
        "The team at CODEX IT Service Ltd. provided outstanding software development and technical support. Their professionalism and attention to detail exceeded our expectations.",
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
    { id: "phone", label: "Your Phone", type: "text", placeholder: "+880 1984-823110" },
  ],
  submit: "Send Message",
} as const;

export const FOOTER = {
  blurb:
    "CODEX IT Service Ltd. delivers professional technology solutions that help businesses innovate, streamline operations and grow with confidence.",
  columns: [
    {
      title: "IT Solution",
      links: [
        "IT Management",
        "Cyber Security",
        "Web Development",
        "Cloud Infrastructure",
        "Data Security",
      ].map((label) => ({ label, href: "/services" })),
    },
    {
      title: "Quick Link",
      links: [
        { label: "About Codex", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Our Projects", href: "/projects" },
        // Blog temporarily disabled (see NAV_LINKS).
        // { label: "Our Blog", href: "/blog" },
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
