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
      <section className="page-pad">
        <div className="hero-shell">
          <div className="hero-content">
            <p className="hero-chip mb-5">
              <i className="bi bi-briefcase" aria-hidden="true" />
              Office Staff &amp; Data Encoder roles
            </p>
            <h1 className="m-0 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.4rem] md:leading-[1.1]">
              {profile.fullName}
            </h1>
            <p className="mt-4 mb-0 text-lg font-medium text-muted md:text-xl">{profile.headline}</p>
            <p className="mx-auto mt-4 mb-0 max-w-xl text-base text-muted">{profile.pitch}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.resumePath}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume (PDF)
              </a>
              <a href="#contact" className="btn-link">
                Contact Me <i className="bi bi-chevron-right text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-site trust-bar !px-0">
          <div className="trust-item">
            <i className="bi bi-check2-circle" aria-hidden="true" />
            55–58 WPM · 95–98% accuracy
          </div>
          <div className="trust-item">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            Makati &amp; Ortigas preferred
          </div>
          <div className="trust-item">
            <i className="bi bi-lightning-charge" aria-hidden="true" />
            Available for immediate start
          </div>
        </div>
      </section>

      {/* 2. Quick Facts */}
      <section id="quick-facts" className="section section-alt">
        <div className="container-site">
          <h2 className="section-title">Quick Facts</h2>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="quick-fact">
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="quick-fact">
              <dt>Preferred areas</dt>
              <dd>
                {profile.preferredAreas} · open to{" "}
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
                {profile.educationDegree}
                <span className="mt-0.5 block font-medium text-muted">
                  Graduated {profile.educationGraduated}
                </span>
              </dd>
            </div>
            <div className="quick-fact">
              <dt>Languages</dt>
              <dd>
                English · <Placeholder>{profile.languages.english}</Placeholder>
                <span className="mt-0.5 block">
                  Filipino · <Placeholder>{profile.languages.filipino}</Placeholder>
                </span>
              </dd>
            </div>
            <div className="quick-fact sm:col-span-2 lg:col-span-3">
              <dt>Target roles</dt>
              <dd>
                <ul className="role-list">
                  {profile.targetRoles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="quick-fact sm:col-span-2 lg:col-span-3">
              <dt>Documents</dt>
              <dd>
                <ul className="document-list">
                  {profile.documents.map((document) => (
                    <li key={document}>{document}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="quick-fact sm:col-span-2 lg:col-span-3">
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
                <figure key={result.image} className="typing-card">
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
          <p className="section-eyebrow">Profile</p>
          <h2 className="section-title">About</h2>
          <div className="credential-card mt-6">
            <p className="mt-0 mb-0 text-muted text-justify leading-relaxed">
              I am an IT graduate based in Silang, Cavite, targeting Office Staff, Data Encoder, and
              Administrative / Systems Accounting support roles in Makati and Ortigas. Through ERP encoding
              at a manufacturing assignment and records work during my school IT internship, I learned to
              verify entries against source documents, meet encoding deadlines, and coordinate with the
              people who own the data. {profile.confidentialityNote}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Experience */}
      <section id="experience" className="section section-alt">
        <div className="container-site">
          <p className="section-eyebrow">Work history</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Encoding, verification, and office support — each bullet shows what I did and the result.
            Freelance web work is listed only as an additional skill.
          </p>
          <div className="mt-8 grid gap-5">
            {experiences.map((job) => (
              <article
                key={`${job.title}-${job.organization}`}
                className="experience-card"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="m-0 text-lg font-semibold text-navy">{job.title}</h3>
                      {job.tag ? <span className="experience-tag">{job.tag}</span> : null}
                    </div>
                    <p className="mt-1 mb-0 font-medium text-ink">{job.organization}</p>
                    {job.assignment ? (
                      <p className="mt-0.5 mb-0 text-sm text-muted">{job.assignment}</p>
                    ) : null}
                  </div>
                  <p className="m-0 shrink-0 text-sm font-medium text-muted sm:pt-1 sm:text-right">
                    {job.dates}
                  </p>
                </div>
                {job.dateNote ? (
                  <p className="mt-2 mb-0 text-xs text-muted italic">{job.dateNote}</p>
                ) : null}
                <ul className="experience-list">
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
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Grouped by relevance for office and encoding roles. No skill bars — proof is listed where available.
          </p>
          <div className="mt-8 grid gap-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-panel">
                <h3 className="m-0 text-base font-semibold text-ink">{group.title}</h3>
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
                  <ul className="experience-list mt-3 text-sm">
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
              <p className="section-eyebrow">Proof of work</p>
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
        <div className="container-site">
          <p className="section-eyebrow">Credentials</p>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-lead">
            Degree and certificates open in a new tab so recruiters can verify documents quickly.
          </p>
          <div className="mt-8 grid gap-5">
            {educationItems.map((item) => (
              <div key={item.title} className="credential-card">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="credential-label">
                      <i className="bi bi-mortarboard-fill me-1" aria-hidden="true" />
                      Education
                    </p>
                    <h3 className="m-0 text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 mb-0 text-muted">{item.organization}</p>
                    <p className="mt-0.5 mb-0 text-sm text-muted">{item.dates}</p>
                  </div>
                  <span className="experience-tag">BS IT</span>
                </div>
              </div>
            ))}

            <div>
              <h3 className="m-0 text-base font-semibold text-navy">Certifications</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {trainings.map((item) => (
                  <article key={item.title} className="credential-card credential-card-cert">
                    {item.imageHref ? (
                      <a
                        href={item.imageHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credential-preview"
                        aria-label={item.pdfLabel ?? `View ${item.title}`}
                      >
                        <span className="credential-preview-badge">View full size</span>
                        <Image
                          src={item.imageHref}
                          alt={item.imageAlt ?? item.title}
                          width={900}
                          height={640}
                          className="h-48 w-full object-cover object-top sm:h-56"
                        />
                      </a>
                    ) : null}
                    <div className="credential-card-body">
                      <p className="credential-label">Certificate</p>
                      <h4 className="m-0 text-base font-semibold text-navy">{item.title}</h4>
                      <p className="mt-1 mb-0 text-sm text-muted">{item.organization}</p>
                      <p className="mt-0.5 mb-0 text-sm font-medium text-ink">{item.dates}</p>
                      {item.details ? (
                        <p className="mt-2 mb-0 flex-1 text-sm text-muted">{item.details}</p>
                      ) : null}
                      {item.pdfHref ? (
                        <a
                          href={item.pdfHref}
                          className="btn-primary btn-sm mt-4 self-start"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" />
                          {item.pdfLabel ?? "View certificate"}
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact */}
      <section id="contact" className="section">
        <div className="container-site">
          <div className="cta-shell mb-8">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="section-title">Ready to hire accurate encoding support?</h2>
            <p className="section-lead mx-auto">
              Prefer email for first contact. Phone and LinkedIn details are below.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email Me
              </a>
              <a href={profile.resumePath} className="btn-link" target="_blank" rel="noopener noreferrer">
                Download Resume <i className="bi bi-chevron-right text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-grid max-w-3xl mx-auto">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="bi bi-envelope" />
              </span>
              <span>
                <p className="contact-card-label">Email</p>
                <p className="contact-card-value">{profile.email}</p>
              </span>
            </a>
            <div className="contact-card contact-card-static">
              <span className="contact-icon" aria-hidden="true">
                <i className="bi bi-telephone" />
              </span>
              <span>
                <p className="contact-card-label">Phone</p>
                <p className="contact-card-value">{profile.phone}</p>
              </span>
            </div>
            <div className="contact-card contact-card-static">
              <span className="contact-icon" aria-hidden="true">
                <i className="bi bi-geo-alt" />
              </span>
              <span>
                <p className="contact-card-label">Location</p>
                <p className="contact-card-value">{profile.location}</p>
              </span>
            </div>
            {isPlaceholder(profile.linkedIn) ? (
              <div className="contact-card contact-card-static">
                <span className="contact-icon" aria-hidden="true">
                  <i className="bi bi-linkedin" />
                </span>
                <span>
                  <p className="contact-card-label">LinkedIn</p>
                  <p className="contact-card-value">
                    <Placeholder>{profile.linkedIn}</Placeholder>
                  </p>
                </span>
              </div>
            ) : (
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-icon" aria-hidden="true">
                  <i className="bi bi-linkedin" />
                </span>
                <span>
                  <p className="contact-card-label">LinkedIn</p>
                  <p className="contact-card-value">View profile</p>
                </span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
