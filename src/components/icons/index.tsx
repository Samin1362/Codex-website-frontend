/**
 * Inline SVG icon set. The mail/phone/search glyphs are lifted verbatim from
 * templete.html (Plan.md §7 — "recoverable from inline SVG"); the socials and
 * utility marks replace the template's Font Awesome font, which we dropped.
 */
import type { SVGProps } from "react";
import type { SocialName } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

/** Top-bar envelope — from templete.html. */
export function MailIcon(props: IconProps) {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8748 8.50453C13.8748 9.85566 12.7757 10.953 11.4263 10.953H3.39325C2.04384 10.953 0.94475 9.85563 0.94475 8.50453V3.39322C0.944449 2.95776 1.06111 2.53021 1.28253 2.15525L5.20216 6.07488C5.78856 6.663 6.57384 6.98706 7.41059 6.98706C8.24563 6.98706 9.03091 6.663 9.61731 6.07488L13.5369 2.15525C13.7584 2.5302 13.875 2.95776 13.8747 3.39322V8.50453H13.8748ZM11.4263 0.94475H3.39325C2.836 0.94475 2.32159 1.13334 1.91009 1.44712L5.86916 5.40791C6.27897 5.81597 6.82591 6.04231 7.41059 6.04231C7.99356 6.04231 8.54053 5.81597 8.95031 5.40791L12.9094 1.44712C12.4979 1.13334 11.9835 0.94475 11.4263 0.94475ZM11.4263 0H3.39325C1.52259 0 0 1.52259 0 3.39325V8.50456C0 10.3769 1.52259 11.8978 3.39325 11.8978H11.4263C13.2969 11.8978 14.8195 10.3769 14.8195 8.50456V3.39322C14.8195 1.52256 13.2969 0 11.4263 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Top-bar phone — from templete.html. */
export function PhoneRingIcon(props: IconProps) {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden {...props}>
      <path
        d="M14.8984 10.5909C14.8735 10.5703 12.0629 8.57063 11.304 8.69297C10.9379 8.75766 10.7288 9.0075 10.3093 9.50719C10.1933 9.6463 10.0747 9.7832 9.95352 9.91781C9.68836 9.83143 9.42973 9.72616 9.17961 9.60281C7.88845 8.97422 6.84524 7.93101 6.21665 6.63984C6.0933 6.38973 5.98803 6.1311 5.90165 5.86594C6.03946 5.73984 6.23258 5.57719 6.31508 5.50781C6.81243 5.09062 7.0618 4.88109 7.12649 4.51453C7.25915 3.75562 5.24915 0.945937 5.22852 0.920625C5.13698 0.790808 5.01777 0.682933 4.87948 0.604789C4.74118 0.526645 4.58726 0.480181 4.42883 0.46875C3.61415 0.46875 1.28821 3.48563 1.28821 3.99422C1.28821 4.02375 1.33086 7.02562 5.03258 10.7911C8.79383 14.4886 11.7957 14.5312 11.8252 14.5312C12.3334 14.5312 15.3507 12.2053 15.3507 11.3906C15.3392 11.2322 15.2926 11.0783 15.2144 10.94C15.1362 10.8017 15.0282 10.6825 14.8984 10.5909Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Header search — from templete.html. */
export function SearchIcon(props: IconProps) {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" aria-hidden {...props}>
      <path
        d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The trailing arrow that follows buttons and "Read More" links. */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden {...props}>
      <path
        d="M0 5h16M12.5 1 17 5l-4.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Double chevron bullet — the footer link marker (template's fa-angles-right). */
export function AnglesRightIcon(props: IconProps) {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden {...props}>
      <path
        d="M1 1l4 4-4 4M7 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <circle cx="10" cy="10" r="8.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 5.4V10l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneCallIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M18 14.1v2.4a1.6 1.6 0 0 1-1.75 1.6 15.8 15.8 0 0 1-6.9-2.45 15.6 15.6 0 0 1-4.8-4.8A15.8 15.8 0 0 1 2.1 3.9 1.6 1.6 0 0 1 3.7 2.15h2.4a1.6 1.6 0 0 1 1.6 1.38c.1.77.29 1.53.56 2.25a1.6 1.6 0 0 1-.36 1.69l-1 1a12.8 12.8 0 0 0 4.8 4.8l1-1a1.6 1.6 0 0 1 1.69-.36c.72.27 1.48.46 2.25.56a1.6 1.6 0 0 1 1.38 1.63z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden {...props}>
      <path
        d="M5 5l12 12M17 5L5 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden {...props}>
      <path
        d="M3 6.5h20M3 13h20M3 19.5h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path
        d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path
        d="M8 15s5.5-4.6 5.5-8.5a5.5 5.5 0 1 0-11 0C2.5 10.4 8 15 8 15z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const SOCIAL_PATHS: Record<SocialName, string> = {
  facebook:
    "M13.5 8.5h-2V15H8.9V8.5H7.5V6.3h1.4V5C8.9 3.4 9.6 2.4 11.4 2.4h1.6v2.2h-1c-.7 0-.9.3-.9.9v.8h1.9l-.5 2.2z",
  twitter:
    "M16 4.3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2 .8a3.2 3.2 0 0 0-5.5 2.9C5.3 6.5 3 5.3 1.6 3.4a3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.4-.4a3.2 3.2 0 0 0 2.6 3.2c-.5.1-1 .2-1.5 0a3.2 3.2 0 0 0 3 2.2A6.5 6.5 0 0 1 0 14a9.1 9.1 0 0 0 5 1.5c6 0 9.3-5 9.3-9.3v-.4c.6-.5 1.2-1 1.7-1.5z",
  linkedin:
    "M4.5 6H2.2v7.5h2.3V6zM3.3 2.2A1.3 1.3 0 1 0 3.3 4.9 1.3 1.3 0 0 0 3.3 2.2zM14 9.4c0-2-.7-3.5-2.7-3.5-1 0-1.7.6-2 1.1V6H7v7.5h2.3V9.8c0-1 .2-1.9 1.4-1.9s1.2 1.1 1.2 2v3.6H14V9.4z",
  youtube:
    "M15.6 5.3a2 2 0 0 0-1.4-1.4C13 3.6 8 3.6 8 3.6s-5 0-6.2.3A2 2 0 0 0 .4 5.3C0 6.5 0 9 0 9s0 2.5.4 3.7a2 2 0 0 0 1.4 1.4c1.2.3 6.2.3 6.2.3s5 0 6.2-.3a2 2 0 0 0 1.4-1.4C16 11.5 16 9 16 9s0-2.5-.4-3.7zM6.4 11.4V6.6L10.5 9l-4.1 2.4z",
};

export function SocialIcon({ name, ...props }: IconProps & { name: SocialName }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path d={SOCIAL_PATHS[name]} fill="currentColor" />
    </svg>
  );
}

/** Blog "By Admin" author glyph — verbatim from templete.html. */
export function AuthorIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

/** Blog comments glyph — verbatim from templete.html. */
export function CommentsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443Z" fill="currentColor" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden {...props}>
      <path d="M15 7.27a2 2 0 0 1 0 3.46l-11 6.35A2 2 0 0 1 1 15.35V2.65A2 2 0 0 1 4 .92l11 6.35z" fill="currentColor" />
    </svg>
  );
}

export function ManageIcon(props: IconProps) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden {...props}>
      <rect x="4" y="9" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 11.4v-2M17 24.6v-2M22.6 17h2M9.4 17h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden {...props}>
      <path d="M17 4l10 3.4v7.1c0 6.5-4.3 12.4-10 14.5-5.7-2.1-10-8-10-14.5V7.4L17 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="13" y="15.5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.6 15.5v-1.6a2.4 2.4 0 0 1 4.8 0v1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden {...props}>
      <rect x="4" y="7" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 15l-3 3 3 3M20 15l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden {...props}>
      <path d="M7 18v-1a10 10 0 0 1 20 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="5" y="17" width="5" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="24" y="17" width="5" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M27 25v1a4 4 0 0 1-4 4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * The signature circuit-trace motif (Plan.md §7 — a re-created SVG stands in for
 * the lost `service-bg-shape` art). Branching horizontal lines with node dots.
 */
export function CircuitTrace(props: IconProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden {...props}>
      <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.9">
        <path d="M0 40h60l18 18h50" />
        <path d="M0 80h40l16-16h44l14 14h52" />
        <path d="M0 120h80l14-14h40" />
        <path d="M128 58v44" />
        <path d="M164 78h56" />
      </g>
      <g fill="currentColor">
        <circle cx="128" cy="58" r="3.2" />
        <circle cx="128" cy="102" r="3.2" />
        <circle cx="164" cy="78" r="3.2" />
        <circle cx="150" cy="62" r="3.2" />
        <circle cx="120" cy="106" r="3.2" />
        <circle cx="220" cy="78" r="3.2" />
      </g>
    </svg>
  );
}
