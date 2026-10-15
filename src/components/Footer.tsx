import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-dark px-0 pt-10 pb-6 text-slate-soft">
      <div className="container-site">
        <div className="grid gap-8 pb-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-base font-semibold text-white">{profile.fullName}</h2>
            <p className="mb-0 text-sm text-[#c5d0de]">{profile.headline}</p>
            <p className="mt-3 mb-0 text-sm">
              <Link href="/projects" className="text-[#e8eef5] no-underline hover:underline">
                View projects
              </Link>
            </p>
          </div>
          <div className="text-sm md:text-right">
            <p className="mb-1">
              <a href={`mailto:${profile.email}`} className="text-[#e8eef5] no-underline hover:underline">
                {profile.email}
              </a>
            </p>
            <p className="mb-1 text-[#c5d0de]">{profile.phone}</p>
            <p className="mb-0 text-[#c5d0de]">{profile.location}</p>
          </div>
        </div>
        <div className="border-t border-white/15 pt-3 text-sm text-[#9aabbe]">
          &copy; {year} {profile.fullName}. For professional hiring use only.
        </div>
      </div>
    </footer>
  );
}
