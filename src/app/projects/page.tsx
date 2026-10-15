import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectImageGallery } from "@/components/ProjectImageGallery";
import { projectSections } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Work samples and projects by ${profile.fullName} — Excel/admin samples first, with website and design work as additional skills.`,
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="page-pad">
        <div className="hero-shell !py-12 md:!py-16">
          <div className="hero-content !max-w-2xl">
            <p className="hero-chip mb-4">Projects</p>
            <h1 className="m-0 text-3xl font-bold tracking-tight text-ink md:text-5xl">My Work</h1>
            <p className="mt-4 mb-0 text-muted">
              Excel and admin samples come first for Office Staff and Data Encoder roles. Website and design
              pieces are additional skills only. Use <span className="font-medium text-ink">View / Verify</span>{" "}
              on any project to open the sample.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="#excel-admin" className="btn-secondary btn-sm">
                Excel &amp; Admin
              </a>
              <a href="#website" className="btn-secondary btn-sm">
                Website
              </a>
              <a href="#design" className="btn-secondary btn-sm">
                Design
              </a>
              <Link href="/#contact" className="btn-primary btn-sm">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {projectSections.map((section, index) => (
        <section
          key={section.key}
          id={section.key}
          className={`section ${index % 2 === 1 ? "section-alt" : ""}`}
          style={{ scrollMarginTop: "4.5rem" }}
        >
          <div className="container-site">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-lead">{section.description}</p>

            <div className="mt-8 grid gap-8">
              {section.projects.map((project) => {
                const hasGallery = Boolean(project.gallery?.length);

                return (
                  <article
                    key={project.title}
                    className={`project-surface ${
                      hasGallery ? "" : "sm:grid sm:grid-cols-2 sm:items-stretch"
                    }`}
                  >
                    {hasGallery ? (
                      <div className="border-b border-line p-4 md:p-5">
                        <ProjectImageGallery images={project.gallery!} projectTitle={project.title} />
                      </div>
                    ) : (
                      <a
                        href={project.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sample-shot block border-0 border-b border-line no-underline sm:border-b-0 sm:border-r"
                        style={{ borderRadius: 0 }}
                        aria-label={`View and verify ${project.title}`}
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          width={900}
                          height={560}
                          className="h-full max-h-72 w-full object-cover object-top sm:max-h-none"
                        />
                      </a>
                    )}

                    <div className="p-4 md:p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                        <span className="font-semibold text-accent">{project.category}</span>
                        {project.status ? (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{project.status}</span>
                          </>
                        ) : (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="capitalize">{project.type}</span>
                          </>
                        )}
                      </div>
                      <h3 className="mt-2 mb-0 text-lg font-semibold text-navy">
                        <a
                          href={project.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy no-underline hover:underline"
                        >
                          {project.title}
                        </a>
                      </h3>
                      <p className="mt-2 mb-0 text-sm text-muted">{project.summary}</p>
                      <p className="mt-2 mb-0 text-sm text-muted">
                        <span className="font-semibold text-ink">Result: </span>
                        {project.outcome}
                      </p>
                      <div className="mt-3">
                        {project.skills.map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href={project.verifyUrl}
                          className="btn-primary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.verifyLabel ?? "View / Verify"}
                        </a>
                        {project.url && project.url !== project.verifyUrl ? (
                          <a
                            href={project.url}
                            className="btn-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.urlLabel ?? "View live"}
                          </a>
                        ) : null}
                        {project.beforeFileHref ? (
                          <a href={project.beforeFileHref} className="btn-secondary btn-sm" download>
                            {project.beforeFileLabel ?? "Download before file"}
                          </a>
                        ) : null}
                        {project.downloadHref && project.downloadHref !== project.beforeFileHref ? (
                          <a href={project.downloadHref} className="btn-secondary btn-sm" download>
                            {project.downloadLabel ?? "Download"}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section section-alt">
        <div className="container-site max-w-3xl">
          <h2 className="section-title">Next step</h2>
          <p className="mt-3 mb-0 text-muted">
            Looking for accurate encoding, organized records, and dependable office support in Makati or
            Ortigas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary">
              Contact Me
            </Link>
            <a
              href={profile.resumePath}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
