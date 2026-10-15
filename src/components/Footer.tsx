import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell container-site !px-6 md:!px-8">
        <div className="grid gap-8 pb-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="brand-mark">NR</span>
              <h2 className="m-0 text-base font-semibold text-ink">{profile.fullName}</h2>
            </div>
            <p className="mb-0 text-sm text-muted">{profile.headline}</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-ink">Explore</p>
            <div className="grid gap-1.5 text-sm">
              <Link href="/#quick-facts" className="text-muted no-underline hover:text-ink">
                Quick Facts
              </Link>
              <Link href="/projects" className="text-muted no-underline hover:text-ink">
                Projects
              </Link>
              <Link href="/#education" className="text-muted no-underline hover:text-ink">
                Education
              </Link>
              <Link href="/#contact" className="text-muted no-underline hover:text-ink">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-ink">Contact</p>
            <div className="grid gap-1.5 text-sm text-muted">
              <a href={`mailto:${profile.email}`} className="no-underline hover:text-ink">
                {profile.email}
              </a>
              <span>{profile.phone}</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm text-muted">
          <span>
            &copy; {year} {profile.fullName}. For professional hiring use only.
          </span>
          {!profile.linkedIn.includes("[PLACEHOLDER") ? (
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink no-underline hover:opacity-70"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" aria-hidden="true" />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
