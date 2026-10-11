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
    </Link>
  );
}
