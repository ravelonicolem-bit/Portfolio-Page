import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] clear-both border-t border-line bg-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="brand-mark">NR</div>
              <div>
                <p className="m-0 text-base font-bold tracking-tight">{profile.displayName}</p>
                <p className="m-0 text-sm text-muted">{profile.headline}</p>
              </div>
            </div>
            <p className="mb-0 max-w-md text-sm leading-relaxed text-muted">{profile.shortDescription}</p>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-bold">Quick links</h6>
            <ul className="grid gap-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted no-underline hover:text-ink">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted no-underline hover:text-ink">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted no-underline hover:text-ink">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted no-underline hover:text-ink">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-bold">Contacts</h6>
            <ul className="grid gap-2.5 text-sm text-muted">
              <li>
                <a href={`mailto:${profile.email}`} className="text-muted no-underline hover:text-ink">
                  {profile.email}
                </a>
              </li>
              <li>{profile.phone}</li>
              <li>{profile.location}</li>
              <li>{profile.availabilityStatus}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-4 py-4 text-sm text-muted sm:px-6 lg:px-8">
        <div className="container-wide flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <span>
            &copy; {year} {profile.fullName}. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/contact" className="text-muted no-underline hover:text-ink">
              Contact
            </Link>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted no-underline hover:text-ink"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
