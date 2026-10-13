import type { Metadata } from "next";
import { experiences } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <>
      <section className="topo-pattern border-b border-line py-14 md:py-16">
        <div className="container-wide flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="kicker kicker-rule">Resume</p>
            <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">Resume preview</h1>
            <p className="mb-0 mt-3 max-w-xl text-sm text-muted">
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
            Download resume
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl overflow-hidden border border-line bg-card">
            <div className="flex items-center justify-between bg-brand px-5 py-3 text-[0.7rem] tracking-[0.14em] text-cream uppercase">
              <span>Resume overview</span>
              <span>{profile.displayName}</span>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-6 md:flex-row">
                <div>
                  <h2 className="mb-1 font-serif text-3xl font-medium">{profile.fullName}</h2>
                  <div className="text-muted">{profile.headline}</div>
                  <div className="mt-1 text-sm text-muted">{profile.tagline}</div>
                </div>
                <div className="text-sm text-muted md:text-right">
                  <div>{profile.email}</div>
                  <div>{profile.phone}</div>
                  <div>{profile.location}</div>
                </div>
              </div>

              <h3 className="text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase">Professional summary</h3>
              <p className="text-muted">{profile.shortDescription}</p>
              <p className="text-muted">{profile.objective}</p>

              <h3 className="mt-8 text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase">
                Professional experience
              </h3>
              {experiences.map((experience) => (
                <div key={experience.title} className="mb-4">
                  <div className="font-medium">{experience.title}</div>
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

              <h3 className="mt-8 text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase">Target roles</h3>
              <div className="mb-1">
                {profile.targetRoles.map((role) => (
                  <span key={role} className="skill-chip">
                    {role}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase">Education</h3>
              <p className="mb-0 font-medium">{profile.education}</p>

              <h3 className="mt-8 text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase">Core skills</h3>
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
