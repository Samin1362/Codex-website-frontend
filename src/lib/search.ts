import { BLOG, CASES, PAGES, SERVICES, type PageKey } from "@/lib/content";

export type SearchResult = {
  title: string;
  kind: string;
  href: string;
  /** Extra text matched against but not displayed. */
  keywords: string;
};

/**
 * Static search index, built once at module load from the same `content.ts` that
 * renders the site — so it can never drift from what's actually on the page.
 *
 * Everything here is a route that exists. Services, cases and posts have no
 * detail pages, so they point at the listing page that contains them: a result
 * always lands you somewhere the thing is visible.
 */
const PAGE_KEYS: PageKey[] = [
  "about",
  "services",
  "projects",
  "blog",
  "contact",
  "terms",
  "privacy",
];

export const SEARCH_INDEX: SearchResult[] = [
  { title: "Home", kind: "Page", href: "/", keywords: "codex it service home landing" },

  ...PAGE_KEYS.map((key) => ({
    title: PAGES[key].title,
    kind: "Page",
    href: key === "terms" || key === "privacy" ? `/${key}` : `/${key}`,
    keywords: `${PAGES[key].eyebrow} ${PAGES[key].intro}`,
  })),

  ...SERVICES.items.map((s) => ({
    title: s.title,
    kind: "Service",
    href: "/services",
    keywords: s.body,
  })),

  ...CASES.items.map((c) => ({
    title: c.title,
    kind: "Project",
    href: "/projects",
    keywords: c.category,
  })),

  ...BLOG.posts.map((p) => ({
    title: p.title,
    kind: "Article",
    href: "/blog",
    keywords: `${p.day} ${p.month}`,
  })),
];

/**
 * Rank matches: title-prefix beats title-substring beats keyword-only, so typing
 * "web" surfaces "Web Development" above an article that merely mentions the web.
 */
export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  return SEARCH_INDEX.map((entry) => {
    const title = entry.title.toLowerCase();
    let score = 0;
    if (title.startsWith(q)) score = 3;
    else if (title.includes(q)) score = 2;
    else if (entry.keywords.toLowerCase().includes(q)) score = 1;
    return { entry, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((r) => r.entry);
}
