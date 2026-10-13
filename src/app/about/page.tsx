import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { experiences } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
};

const processSteps = [
  ["01", "Understand", "Review the task, instructions, required information, and expected output."],
  ["02", "Organize", "Arrange the information and prepare the appropriate files, spreadsheets, or documents."],
  ["03", "Process", "Complete the assigned data entry, documentation, or administrative task."],
  ["04", "Verify", "Check for missing information, inconsistencies, duplicates, or errors."],
  ["05", "Finalize", "Organize completed files for submission, reporting, or future retrieval."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="About Me" title={profile.fullName} description={profile.headline}>
        <p className="mt-2 max-w-3xl font-semibold">{profile.tagline}</p>
      </PageHeader>

      <section className="py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[1.4fr_1fr] xl:gap-12">
          <div>
            <h2 className="font-serif text-xl font-bold">Who I am</h2>
            <p className="text-muted">
              I am an IT graduate from Cavite State University – Silang Campus with practical experience in ERP data
              encoding, administrative support, and records verification. I work carefully with large volumes of
              information, follow established procedures, and prioritize accuracy before submission.
            </p>
            <p className="text-muted">
              Through my ERP encoding role and school internship, I developed transferable strengths in documentation,
              systems use, clear communication, and detail-oriented task completion — skills that apply well to data
              encoder, administrative assistant, office staff, HR/recruitment support, and virtual assistant roles.
            </p>
            <p className="mb-0 text-muted">{profile.objective}</p>

            <h2 className="mt-12 font-serif text-xl font-bold" id="experience">
              Professional experience
            </h2>
            <div className="grid gap-3">
              {experiences.map((experience) => (
                <article key={experience.title} className="info-card p-4">
                  <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <div className="font-bold">{experience.title}</div>
                      <div className="text-muted">{experience.organization}</div>
                      {experience.assignment ? (
                        <div className="text-sm text-muted">{experience.assignment}</div>
                      ) : null}
                    </div>
                    <div className="text-sm text-muted sm:text-right">{experience.dates}</div>
                  </div>
                  <ul className="mb-0 ps-3 text-sm text-muted">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="mb-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <h2 className="mt-12 font-serif text-xl font-bold">My IT background</h2>
            <p className="text-muted">
              My Information Technology background is an advantage in administrative and data-related work. Modern
              offices rely on computers, spreadsheets, databases, digital documents, and online systems. My education and
              internship experience help me work comfortably with those tools while handling administrative
              responsibilities.
            </p>
            <p className="mb-0 text-muted">
              I can support work involving data, documents, spreadsheets, digital records, office systems, and basic
              technical support — where administrative and technical responsibilities often overlap.
            </p>

            <h2 className="mt-12 font-serif text-xl font-bold">My work process</h2>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map(([step, title, copy]) => (
                <div key={step} className="info-card h-full p-3">
                  <div className="mb-1 text-sm text-muted">{step}</div>
                  <div className="mb-1 font-semibold">{title}</div>
                  <div className="text-sm text-muted">{copy}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 mb-0 text-sm text-muted">Goal: keep information accurate, organized, and easy to manage.</p>
          </div>

          <div className="grid gap-4 self-start">
            <aside className="info-card p-4">
              <h2 className="mb-3 font-serif text-lg font-bold">Profile details</h2>
              <div className="grid gap-3 text-sm">
                <div>
                  <div className="text-muted">Name</div>
                  <div className="font-semibold">{profile.fullName}</div>
                </div>
                <div>
                  <div className="text-muted">Education</div>
                  <div className="font-semibold">{profile.education}</div>
                </div>
                <div>
                  <div className="text-muted">Recent experience</div>
                  <div className="font-semibold">ERP Data Encoder | System Accounting Staff</div>
                  <div className="text-muted">Tomodachi Global Resources Inc.</div>
                </div>
                <div>
                  <div className="text-muted">Availability</div>
                  <div className="font-semibold">{profile.availabilityStatus}</div>
                </div>
                <div>
                  <div className="text-muted">Start date</div>
                  <div className="font-semibold">{profile.startDate}</div>
                </div>
                <div>
                  <div className="text-muted">Location</div>
                  <div className="font-semibold">{profile.location}</div>
                </div>
              </div>
            </aside>

            <aside className="info-card p-4">
              <h2 className="mb-3 font-serif text-lg font-bold">Roles I’m targeting</h2>
              <div className="mb-3">
                {profile.targetRoles.map((role) => (
                  <span key={role} className="skill-chip">
                    {role}
                  </span>
                ))}
              </div>
              <p className="mb-3 text-sm text-muted">
                I bring ERP encoding experience, administrative support skills, and an IT foundation — and I am ready to
                learn your systems and procedures.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${profile.email}`} className="btn-brand no-underline">
                  Email Me
                </a>
                <Link href="/projects" className="btn-outline-brand no-underline">
                  View Projects
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
