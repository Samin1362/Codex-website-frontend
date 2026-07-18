import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/content";

type LogoProps = {
  /** Kept for call-site compatibility; both placements are dark, so the white
   *  logo is used throughout. */
  variant?: "light" | "brand";
  className?: string;
};

/**
 * Codex IT Service logo — the "CK" wordmark. Processed from the supplied
 * public/logo/logo.jpeg (navy-on-white, no transparency) into a white-on-
 * transparent PNG so it reads on the dark header wedge and the footer. A
 * full-colour transparent version (logo-color.png) is available for any future
 * light-background placement.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`inline-flex items-center ${className}`.trim()}
      aria-label={`${SITE.name} IT Service home`}
    >
      <Image
        src="/logo/logo-white.png"
        alt={`${SITE.name} IT Service`}
        width={1011}
        height={278}
        priority
        unoptimized
        className="h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
