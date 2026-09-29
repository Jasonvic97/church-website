"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="brand"
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="Homestead Assembly home"
        >
          <Image
            className="brand__logo"
            src="/images/church/logo.png"
            alt="Homestead Assembly"
            width={54}
            height={54}
            priority
          />
        </Link>

        <button
          className={"menu-toggle" + (isOpen ? " menu-toggle--open" : "")}
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={"primary-nav" + (isOpen ? " primary-nav--open" : "")}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              tabIndex={isOpen ? 0 : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="primary-nav__visit" href="/contact" onClick={() => setIsOpen(false)}>
            Plan a visit <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
