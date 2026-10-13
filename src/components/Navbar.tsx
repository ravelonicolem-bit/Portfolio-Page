"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Catalog" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/services", label: "Capabilities" },
  { href: "/contact", label: "Contacts" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-[12px]">
      <div className="container-wide flex items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="brand-mark">NR</span>
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-bold tracking-tight text-ink">{profile.displayName}</span>
            <span className="block text-[0.72rem] text-muted">Professional Portfolio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
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

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-lg`} />
        </button>
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
