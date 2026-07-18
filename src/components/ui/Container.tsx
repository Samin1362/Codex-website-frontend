import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** width: min(1290px, 100% - 48px), centred. The template's one container width. */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return <Tag className={`site-container ${className}`.trim()}>{children}</Tag>;
}
