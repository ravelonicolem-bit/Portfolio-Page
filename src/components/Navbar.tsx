"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Capabilities" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-[12px]">
      <div className="container-wide grid grid-cols-[1fr_auto] items-center gap-4 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="font-serif text-sm font-semibold tracking-[0.18em] text-ink uppercase no-underline md:text-base"
        >
          {profile.displayName}
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/resume"
            className="nav-link hidden sm:inline-flex"
          >
            Resume
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-lg`} />
          </button>
          <span className="hidden h-9 w-9 items-center justify-center border border-line text-ink lg:inline-flex" aria-hidden>
            <i className="bi bi-list text-lg" />
          </span>
        </div>
      </div>

      <div
        id="primary-nav"
        className={`${open ? "flex" : "hidden"} container-wide flex-col gap-3 border-t border-line py-4 lg:hidden`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/resume" onClick={() => setOpen(false)} className="nav-link">
          Resume
        </Link>
        <a href={`mailto:${profile.email}`} className="btn-brand mt-1 w-fit no-underline">
          Email Me
        </a>
      </div>
    </nav>
  );
}
