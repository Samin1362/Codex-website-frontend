"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  REVEAL_DURATION,
  REVEAL_DELAY,
  type RevealEffect,
} from "@/lib/animations";

type RevealProps = {
  effect: RevealEffect;
  /** ms — the template only ever uses 1000 (card grids) or 1500. */
  duration?: number;
  /** ms */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Renders *as* the element it animates rather than wrapping it, so a Reveal can
 * sit directly in a grid or flex row without adding a layout box.
 *
 * The effect class name comes straight from animate.css (keyframes imported in
 * globals.css); duration and delay ride in as custom properties that
 * `.reveal.is-revealed` reads. See Plan.md §6.1.
 */
export function Reveal({
  effect,
  duration = REVEAL_DURATION.base,
  delay = REVEAL_DELAY.none,
  as: Tag = "div",
  className = "",
  style,
  children,
}: RevealProps) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${effect} ${className}`.trim()}
      style={
        {
          "--reveal-duration": `${duration}ms`,
          "--reveal-delay": `${delay}ms`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
