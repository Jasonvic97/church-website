import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={"button button--" + variant + (className ? " " + className : "")}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" />
      </svg>
    </Link>
  );
}
