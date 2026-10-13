import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projectSections } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title="Work samples and projects"
        description="Browse project work across data, admin, HR support, and virtual assistance roles so employers can quickly review relevant skills."
      />

      <section className="py-16">
        <div className="container-site">
          <div className="mb-12 flex flex-wrap gap-2">
            <span className="self-center text-sm text-muted">Jump to:</span>
            {projectSections.map((section) => (
              <a key={section.key} href={`#${section.key}`} className="btn-outline-brand btn-sm no-underline">
                {section.title}
              </a>
            ))}
          </div>

          {projectSections.map((section) => (
            <div key={section.key} className="mb-12" id={section.key}>
              <div className="mb-2 flex items-center gap-3">
                <div className="icon-wrap">
                  <i className={`bi ${section.icon}`} />
                </div>
                <div>
                  <h2 className="m-0 font-serif text-xl font-bold">{section.title}</h2>
                  <p className="mb-0 text-sm text-muted">{section.description}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}

          <div className="cta-band mt-12">
            <div className="grid items-center gap-3 lg:grid-cols-[1.5fr_auto]">
              <div>
                <h2 className="mb-2 font-serif text-xl font-bold">Looking for accurate data and admin support?</h2>
                <p className="mb-0">
                  I can contribute to encoding, verification, records organization, recruitment tracking, and day-to-day
                  office or virtual assistance tasks.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-cream px-[1.1rem] py-[0.6rem] text-sm font-semibold text-brand-dark no-underline"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
