import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] clear-both border-t border-line bg-cream">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.2fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Let’s build something exceptional.
            </h2>
            <p className="mb-0 max-w-sm text-sm leading-relaxed text-muted">
              Open to data encoding, administrative support, and virtual assistance roles. Share a role or project brief
              and I’ll respond promptly.
            </p>
          </div>

          <form
            action={`mailto:${profile.email}`}
            method="get"
            encType="text/plain"
            className="grid gap-5"
          >
            <div>
              <label className="form-label" htmlFor="footer-name">
                Name
              </label>
              <input id="footer-name" name="name" type="text" className="form-field" placeholder="Your name" />
            </div>
            <div>
              <label className="form-label" htmlFor="footer-email">
                Email
              </label>
              <input id="footer-email" name="email" type="email" className="form-field" placeholder="you@company.com" />
            </div>
            <div>
              <label className="form-label" htmlFor="footer-role">
                Role type
              </label>
              <select id="footer-role" name="role" className="form-field appearance-none" defaultValue="">
                <option value="" disabled>
                  Select a focus
                </option>
                {profile.targetRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="footer-message">
                Tell me about the role
              </label>
              <textarea
                id="footer-message"
                name="body"
                rows={3}
                className="form-field resize-none"
                placeholder="Schedule, tools, and what support you need"
              />
            </div>
            <button type="submit" className="btn-brand mt-1 w-fit">
              Send inquiry <i className="bi bi-arrow-right" />
            </button>
          </form>

          <div>
            <div className="mb-6">
              <div className="brand-mark mb-3">NR</div>
              <p className="mb-1 font-serif text-lg font-medium tracking-[0.12em] uppercase">{profile.displayName}</p>
              <p className="mb-0 text-sm text-muted">{profile.headline}</p>
            </div>
            <ul className="mb-8 grid gap-3 text-sm text-muted">
              <li className="flex gap-3">
                <i className="bi bi-geo-alt mt-0.5 text-brand" />
                <span>{profile.location}</span>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-envelope mt-0.5 text-brand" />
                <a href={`mailto:${profile.email}`} className="text-muted no-underline hover:text-brand">
                  {profile.email}
                </a>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-telephone mt-0.5 text-brand" />
                <span>{profile.phone}</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 text-[0.65rem] font-medium tracking-[0.14em] uppercase">
              <Link href="/about" className="text-muted no-underline hover:text-brand">
                About
              </Link>
              <Link href="/projects" className="text-muted no-underline hover:text-brand">
                Projects
              </Link>
              <Link href="/resume" className="text-muted no-underline hover:text-brand">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand px-4 py-3 text-[0.65rem] tracking-[0.12em] text-cream uppercase sm:px-6 lg:px-8">
        <div className="container-wide flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <span>
            &copy; {year} {profile.fullName}. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/contact" className="text-cream/85 no-underline hover:text-cream">
              Contact
            </Link>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/85 no-underline hover:text-cream"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
