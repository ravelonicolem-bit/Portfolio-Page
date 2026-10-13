import type { Metadata } from "next";
import { experiences } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <>
      <section className="border-b border-line bg-cream-deep py-[3.25rem] pb-9">
        <div className="container-site flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="kicker">Resume</p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight md:text-5xl">Resume preview</h1>
            <p className="mb-0 text-muted">
              A professional snapshot for employers. Download the PDF for the full document.
            </p>
          </div>
          <a
            className="btn-brand no-underline"
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[14px] border border-line bg-card shadow-[0_4px_18px_rgba(18,18,18,0.06)]">
            <div className="flex items-center justify-between bg-brand-dark px-4 py-3 text-[0.82rem] text-cream">
              <div className="flex gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#b7a8d4]" />
                <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                <span className="inline-block h-2 w-2 rounded-full bg-brand-dark ring-1 ring-white/30" />
              </div>
              <span>Resume overview</span>
            </div>

            <div className="p-4 md:p-8">
              <div className="mb-8 flex flex-col justify-between gap-3 border-b border-line pb-3 md:flex-row">
                <div>
                  <h2 className="mb-1 font-serif text-2xl font-bold">{profile.fullName}</h2>
                  <div className="text-muted">{profile.headline}</div>
                  <div className="mt-1 text-sm text-muted">{profile.tagline}</div>
                </div>
                <div className="text-sm text-muted">
                  <div>{profile.email}</div>
                  <div>{profile.phone}</div>
                  <div>{profile.location}</div>
                </div>
              </div>

              <h3 className="text-xs font-bold tracking-wide text-muted uppercase">Professional Summary</h3>
              <p className="text-muted">{profile.shortDescription}</p>
              <p className="text-muted">{profile.objective}</p>

              <h3 className="mt-8 text-xs font-bold tracking-wide text-muted uppercase">Professional Experience</h3>
              {experiences.map((experience) => (
                <div key={experience.title} className="mb-3">
                  <div className="font-semibold">{experience.title}</div>
                  <div className="text-muted">{experience.organization}</div>
                  <div className="mb-2 text-sm text-muted">
                    {experience.assignment ? `${experience.assignment} · ` : null}
                    {experience.dates}
                  </div>
                  <ul className="mb-0 text-sm text-muted">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h3 className="mt-8 text-xs font-bold tracking-wide text-muted uppercase">Target Roles</h3>
              <div className="mb-1">
                {profile.targetRoles.map((role) => (
                  <span key={role} className="skill-chip">
                    {role}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-xs font-bold tracking-wide text-muted uppercase">Education</h3>
              <p className="mb-0 font-semibold">{profile.education}</p>

              <h3 className="mt-8 text-xs font-bold tracking-wide text-muted uppercase">Core Skills</h3>
              <div>
                {profile.coreSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
