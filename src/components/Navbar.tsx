"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/catalog";
import { profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) {
      setActiveHash("");
      return;
    }

    const ids = navLinks
      .filter((link) => link.type === "hash")
      .map((link) => link.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHash(`/#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (href: string, type: "hash" | "page") => {
    if (type === "page") return pathname === href || pathname.startsWith(`${href}/`);
    return onHome && activeHash === href;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-[8px]">
      <div className="container-site flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/#top" className="flex items-center gap-2 text-base font-semibold text-ink no-underline">
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
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 pb-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-0.5 lg:pb-0`}
        >
          {navLinks.map((link) =>
            link.type === "page" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${isActive(link.href, "page") ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${isActive(link.href, "hash") ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 lg:ml-2 lg:mt-0">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
