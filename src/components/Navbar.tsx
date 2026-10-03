"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-cream/94 backdrop-blur-[10px]">
      <div className="container-site flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="flex items-center gap-2 font-serif text-base font-bold text-ink no-underline">
          <span className="brand-mark">NR</span>
          <span>{profile.displayName}</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div
          id="primary-nav"
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 pb-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:pb-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium no-underline transition ${
                isActive(link.href)
                  ? "bg-brand-soft text-brand"
                  : "text-ink hover:bg-brand-soft hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${profile.email}`} className="btn-brand mt-2 no-underline lg:ml-2 lg:mt-0">
            Email Me
          </a>
        </div>
      </div>
    </nav>
  );
}
