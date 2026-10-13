import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] clear-both bg-brand-dark px-0 pt-[3.25rem] pb-6 text-[#d9cfc3]">
      <div className="container-site">
        <div className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <h6 className="mb-2 font-serif text-base font-bold text-cream">{profile.fullName}</h6>
            <p className="mb-2 text-sm">{profile.headline}</p>
            <p className="mb-0 text-sm">{profile.shortDescription}</p>
          </div>
          <div>
            <h6 className="mb-3 font-serif text-base font-bold text-cream">Quick links</h6>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="/about" className="text-[#efe6dc] no-underline hover:text-white">
                  About & experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-[#efe6dc] no-underline hover:text-white">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#efe6dc] no-underline hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#efe6dc] no-underline hover:text-white"
                >
                  Download resume
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-3 font-serif text-base font-bold text-cream">Contact</h6>
            <ul className="grid gap-2 text-sm">
              <li>
                <i className="bi bi-envelope me-2 mr-2" />
                <a href={`mailto:${profile.email}`} className="text-[#efe6dc] no-underline hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li>
                <i className="bi bi-telephone me-2 mr-2" />
                {profile.phone}
              </li>
              <li>
                <i className="bi bi-geo-alt me-2 mr-2" />
                {profile.location}
              </li>
              <li>
                <i className="bi bi-clock me-2 mr-2" />
                {profile.availabilityStatus}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-white/20 pt-3 text-sm md:flex-row">
          <span>
            &copy; {year} {profile.fullName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
