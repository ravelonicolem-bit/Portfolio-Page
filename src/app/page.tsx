import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import {
  educationItems,
  experiences,
  skillGroups,
  trainings,
  workSamples,
} from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.headline}`,
};

function isPlaceholder(value: string) {
  return value.includes("[PLACEHOLDER");
}

export default function HomePage() {
  return (
    <div id="top">
      {/* 1. Hero */}
      <section className="border-b border-line bg-gradient-to-b from-slate-soft to-white py-14 md:py-20">
        <div className="container-site max-w-3xl">
          <p className="mb-2 text-sm font-semibold tracking-wide text-accent uppercase">
            Portfolio for Office Staff &amp; Data Encoder roles
          </p>
          <h1 className="m-0 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-2 mb-0 text-lg font-medium text-slate md:text-xl">{profile.headline}</p>
          <p className="mt-4 mb-0 text-base text-muted md:text-[1.05rem]">{profile.pitch}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume (PDF)
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <p className="mt-4 mb-0 text-sm text-muted">
            Resume file: <span className="font-medium text-ink">{profile.resumeFileName}</span>
          </p>
        </div>
      </section>

      {/* 2. Quick Facts */}
      <section id="quick-facts" className="section section-alt">
        <div className="container-site">
          <h2 className="section-title">Quick Facts</h2>
          <p className="section-lead">Scan these before the interview — details recruiters usually ask first.</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="quick-fact">
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="quick-fact">
              <dt>Target roles</dt>
              <dd>{profile.targetRoles.join("; ")}</dd>
            </div>
            <div className="quick-fact">
              <dt>Preferred areas</dt>
              <dd>
                {profile.preferredAreas}; open to{" "}
                <Placeholder>{profile.openToAreas}</Placeholder>
              </dd>
            </div>
            <div className="quick-fact">
              <dt>Availability</dt>
              <dd>
                <Placeholder>{profile.availability}</Placeholder>
              </dd>
            </div>
            <div className="quick-fact">
              <dt>Work setup</dt>
              <dd>
                <Placeholder>{profile.workSetup}</Placeholder>
              </dd>
            </div>
            <div className="quick-fact">
              <dt>Education</dt>
              <dd>
                {profile.educationDegree}, graduated {profile.educationGraduated}
              </dd>
            </div>
            <div className="quick-fact">
              <dt>Languages</dt>
              <dd>
                English: <Placeholder>{profile.languages.english}</Placeholder>
                <br />
                Filipino: <Placeholder>{profile.languages.filipino}</Placeholder>
              </dd>
            </div>
            <div className="quick-fact sm:col-span-2 lg:col-span-4">
              <dt>Typing speed</dt>
              <dd>
                {profile.typingSpeed} · {profile.typingAccuracy}
                <span className="mt-1 block font-normal text-muted">
                  {profile.typingSource} ·{" "}
                  <a href={profile.typingTestUrl} target="_blank" rel="noopener noreferrer">
                    monkeytype.com
                  </a>
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="m-0 text-sm font-semibold tracking-wide text-navy uppercase">
              Typing test verification
            </h3>
            <p className="mt-1 mb-4 text-sm text-muted">
              Three recent Monkeytype screenshots (30-second English). Results: 58 WPM / 98%, 55 WPM / 98%,
              and 55 WPM / 95%.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {profile.typingResults.map((result) => (
                <figure key={result.image} className="m-0 overflow-hidden rounded-md border border-line bg-white">
                  <a href={result.image} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={result.image}
                      alt={result.alt}
                      width={900}
                      height={520}
                      className="h-auto w-full object-cover object-top"
                    />
                  </a>
                  <figcaption className="border-t border-line px-3 py-2 text-sm font-medium text-ink">
                    {result.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. About */}
      <section id="about" className="section">
        <div className="container-site max-w-3xl">
          <h2 className="section-title">About</h2>
          <p className="mt-4 mb-0 text-muted">
            I am an IT graduate based in Silang, Cavite, targeting Office Staff, Data Encoder, and
            Administrative / Systems Accounting support roles in Makati and Ortigas. Through ERP encoding
            at a manufacturing assignment and records work during my school IT internship, I learned to
            verify entries against source documents, meet encoding deadlines, and coordinate with the
            people who own the data. {profile.confidentialityNote}
          </p>
        </div>
      </section>

      {/* 4. Experience */}
      <section id="experience" className="section section-alt">
        <div className="container-site">
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Action + task + result. Web development is listed only as an additional skill.
          </p>
          <div className="mt-8 grid gap-8">
            {experiences.map((job) => (
              <article key={`${job.title}-${job.organization}`} className="border-b border-line pb-8 last:border-0 last:pb-0">
                <h3 className="m-0 text-lg font-semibold text-navy">{job.title}</h3>
                <p className="mt-1 mb-0 font-medium text-ink">{job.organization}</p>
                {job.assignment ? <p className="mt-0.5 mb-0 text-sm text-muted">{job.assignment}</p> : null}
                <p className="mt-1 mb-0 text-sm text-muted">{job.dates}</p>
                {job.dateNote ? <p className="mt-1 mb-0 text-xs text-muted italic">{job.dateNote}</p> : null}
                <ul className="mt-4 mb-0 space-y-2 ps-5 text-muted">
                  {job.highlights.map((item) => (
                    <li key={item}>
                      <Placeholder>{item}</Placeholder>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Skills */}
      <section id="skills" className="section">
        <div className="container-site">
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Grouped by relevance for office and encoding roles. No skill bars — proof is listed where available.
          </p>
          <div className="mt-8 grid gap-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="m-0 text-base font-semibold text-navy">{group.title}</h3>
                <div className="mt-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag ${group.relevance === "primary" ? "skill-tag-primary" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {group.proof ? (
                  <ul className="mt-3 mb-0 space-y-1 ps-5 text-sm text-muted">
                    {group.proof.map((item) => (
                      <li key={item}>
                        <Placeholder>{item}</Placeholder>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Work Samples */}
      <section id="samples" className="section section-alt">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Work Samples</h2>
              <p className="section-lead">
                Sanitized practice samples — no real company or student data. Each includes Task, Process, and
                Result.
              </p>
            </div>
            <Link href="/projects" className="btn-secondary shrink-0">
              View all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-10">
            {workSamples.map((sample) => (
              <article key={sample.title} className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-start">
                <div>
                  <a
                    href={sample.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sample-shot block rounded-md no-underline"
                    aria-label={`View and verify ${sample.title}`}
                  >
                    <Image
                      src={sample.image}
                      alt={sample.imageAlt}
                      width={900}
                      height={560}
                      className="h-auto w-full object-cover object-top"
                    />
                  </a>
                  <p className="mt-2 mb-0 text-xs text-muted">Screenshot (sanitized practice file)</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={sample.image}
                      className="btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View / Verify
                    </a>
                    <a href={sample.downloadHref} className="btn-secondary btn-sm" download>
                      {sample.downloadLabel}
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="m-0 text-lg font-semibold text-navy">
                    <a
                      href={sample.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy no-underline hover:underline"
                    >
                      {sample.title}
                    </a>
                  </h3>
                  <dl className="mt-4 mb-0 grid gap-4 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">Task</dt>
                      <dd className="mt-1 text-muted">{sample.task}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Process</dt>
                      <dd className="mt-1 text-muted">{sample.process}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Result</dt>
                      <dd className="mt-1 text-muted">{sample.result}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Education */}
      <section id="education" className="section">
        <div className="container-site max-w-3xl">
          <h2 className="section-title">Education &amp; Certifications</h2>
          <div className="mt-8 grid gap-6">
            {educationItems.map((item) => (
              <div key={item.title}>
                <h3 className="m-0 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 mb-0 text-muted">{item.organization}</p>
                <p className="mt-0.5 mb-0 text-sm text-muted">{item.dates}</p>
              </div>
            ))}
            <div>
              <h3 className="m-0 text-base font-semibold text-navy">Certifications</h3>
              {trainings.map((item) => (
                <div key={item.title} className="mt-3">
                  <p className="mb-0 font-medium text-ink">{item.title}</p>
                  <p className="mt-1 mb-0 text-sm text-muted">
                    {item.organization} · {item.dates}
                  </p>
                  {item.details ? <p className="mt-1 mb-0 text-sm text-muted">{item.details}</p> : null}
                  {item.pdfHref ? (
                    <a
                      href={item.pdfHref}
                      className="btn-primary btn-sm mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.pdfLabel ?? "View certificate (PDF)"}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact */}
      <section id="contact" className="section section-alt">
        <div className="container-site max-w-3xl">
          <h2 className="section-title">Contact</h2>
          <p className="section-lead">
            Prefer email for first contact. Phone and LinkedIn / Jobstreet details are below.
          </p>
          <ul className="mt-6 mb-0 list-none space-y-3 ps-0 text-muted">
            <li>
              <span className="font-semibold text-ink">Email: </span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="font-semibold text-ink">Phone: </span>
              {profile.phone}
            </li>
            <li>
              <span className="font-semibold text-ink">Location: </span>
              {profile.location}
            </li>
            <li>
              <span className="font-semibold text-ink">LinkedIn: </span>
              {isPlaceholder(profile.linkedIn) ? (
                <Placeholder>{profile.linkedIn}</Placeholder>
              ) : (
                <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                  {profile.linkedIn}
                </a>
              )}
            </li>
            <li>
              <span className="font-semibold text-ink">Jobstreet: </span>
              {isPlaceholder(profile.jobstreet) ? (
                <Placeholder>{profile.jobstreet}</Placeholder>
              ) : (
                <a href={profile.jobstreet} target="_blank" rel="noopener noreferrer">
                  {profile.jobstreet}
                </a>
              )}
            </li>
            <li>
              <span className="font-semibold text-ink">Resume: </span>
              <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
                {profile.resumeFileName}
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Email Me
            </a>
            <a href={profile.resumePath} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
