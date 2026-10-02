import Link from "next/link";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { experiences, featuredProjects, services } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Home",
};

const highlights = [
  ["bi-keyboard", "Data Encoding", "ERP and spreadsheet encoding with careful verification"],
  ["bi-folder2-open", "Records Management", "Organized documentation and structured filing"],
  ["bi-people", "HR / Recruitment Support", "Applicant tracking and confidential file handling"],
  ["bi-laptop", "Virtual Assistance", "Remote admin support, scheduling, and task follow-through"],
] as const;

export default function HomePage() {
  const projects = featuredProjects();

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-cream-deep to-cream pt-[4.25rem] pb-[3.25rem]">
        <div className="container-site">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <span className="availability-badge mb-3">
                <span className="dot" />
                {profile.availabilityBadge}
              </span>
              <p className="kicker mt-3">Professional portfolio</p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {profile.fullName}
              </h1>
              <p className="mt-2 mb-2 text-xl text-ink">{profile.headline}</p>
              <p className="mb-0 max-w-2xl text-muted">{profile.shortDescription}</p>
              <p className="mt-3 mb-0 max-w-2xl text-muted">{profile.objective}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`mailto:${profile.email}`} className="btn-brand no-underline">
                  Email Me
                </a>
                <a
                  href={profile.resumePath}
                  className="btn-outline-brand no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
                <Link href="/about" className="btn-outline-brand no-underline">
                  View Experience
                </Link>
              </div>
            </div>

            <div className="info-card p-4">
              <h2 className="mb-3 text-xs font-bold tracking-wide text-muted uppercase">At a glance</h2>
              <div className="grid gap-3 text-sm">
                <div>
                  <div className="text-muted">Education</div>
                  <div className="font-semibold">{profile.educationShort}</div>
                </div>
                <div>
                  <div className="text-muted">Recent role</div>
                  <div className="font-semibold">ERP Data Encoder | System Accounting Staff</div>
                  <div className="text-muted">Tomodachi Global Resources Inc.</div>
                </div>
                <div>
                  <div className="text-muted">Location</div>
                  <div className="font-semibold">{profile.location}</div>
                </div>
                <div>
                  <div className="text-muted">Contact</div>
                  <div className="font-semibold">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                  <div className="text-muted">{profile.phone}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map(([icon, title, copy]) => (
              <div key={title} className="stat-card flex items-start gap-3 p-[1.2rem]">
                <div className="icon-wrap">
                  <i className={`bi ${icon}`} />
                </div>
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm text-muted">{copy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker">Experience highlight</p>
              <h2 className="m-0 font-serif text-3xl font-bold tracking-tight">Recent professional experience</h2>
            </div>
            <Link href="/about#experience" className="btn-outline-brand no-underline">
              Full experience
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.slice(0, 2).map((experience) => (
              <article key={experience.title} className="info-card h-full p-4">
                <div className="font-bold">{experience.title}</div>
                <div className="text-muted">{experience.organization}</div>
                <div className="mb-3 text-sm text-muted">{experience.dates}</div>
                <ul className="mb-0 ps-3 text-sm text-muted">
                  {experience.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="mb-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16" id="availability">
        <div className="container-site">
          <p className="kicker">Roles I’m targeting</p>
          <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight">{profile.availabilityStatus}</h2>
          <p className="mb-4 text-muted">
            I am prepared to support structured office, data, and recruitment-admin workflows while learning your tools
            and processes.
          </p>
          <div className="mb-4">
            {profile.targetRoles.map((role) => (
              <span key={role} className="skill-chip">
                {role}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="info-card h-full p-4">
              <h3 className="mb-3 text-base font-bold">Core skills</h3>
              <div>
                {profile.coreSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="info-card h-full p-4">
              <h3 className="mb-3 text-base font-bold">Work setup</h3>
              <ul className="mb-0 text-muted">
                <li>On-site</li>
                <li>Hybrid</li>
                <li>Remote / virtual assistance</li>
              </ul>
            </div>
            <div className="info-card h-full p-4">
              <h3 className="mb-3 text-base font-bold">Availability</h3>
              <p className="mb-1 text-muted">{profile.startDate}</p>
              <p className="mb-1 text-muted">{profile.hoursPerWeek}</p>
              <p className="mb-0 text-muted">Timezone: {profile.timezone}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Capabilities</p>
              <h2 className="m-0 font-serif text-3xl font-bold tracking-tight">How I can support your team</h2>
            </div>
            <Link href="/services" className="btn-outline-brand hidden no-underline md:inline-flex">
              All capabilities
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16" id="projects">
        <div className="container-site">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Selected work</p>
              <h2 className="m-0 font-serif text-3xl font-bold tracking-tight">Projects and practice samples</h2>
            </div>
            <Link href="/projects" className="btn-outline-brand hidden no-underline md:inline-flex">
              All projects
            </Link>
          </div>
          <p className="mb-8 max-w-3xl text-muted">
            Featured items from Excel/admin samples, website work, and design. Practice samples are clearly labeled on
            the Projects page.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title}>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted">
                  <i className={`bi ${project.sectionIcon}`} />
                  <span className="font-semibold">{project.sectionTitle}</span>
                </div>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16">
        <div className="container-site">
          <div className="cta-band flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
            <div>
              <p className="mb-1 text-sm text-[#cbb9a8]">Next step</p>
              <h2 className="mb-2 font-serif text-2xl font-bold">Open to data encoding and administrative roles</h2>
              <p className="mb-0">
                If you need accurate encoding, organized records, and dependable office or virtual support, I would
                welcome the chance to discuss how I can contribute.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-cream px-[1.1rem] py-[0.6rem] text-sm font-semibold text-brand-dark no-underline"
                href={`mailto:${profile.email}`}
              >
                Email Me
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-[#cbb9a8] px-[1.1rem] py-[0.6rem] text-sm font-semibold text-cream no-underline hover:bg-white/12"
                href="/resume"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
