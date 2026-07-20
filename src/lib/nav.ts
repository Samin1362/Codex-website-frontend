/**
 * Active-nav matching, shared by SiteHeader + MobileDrawer (Plan.md §4.4).
 * Home (`/`) matches only the exact root; every other route also matches its
 * nested paths (e.g. `/blog/some-post` keeps "Blog" active) for later detail
 * pages.
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
