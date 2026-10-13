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

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mb-12 flex flex-wrap gap-2">
            <span className="self-center text-xs tracking-[0.14em] text-muted uppercase">Jump to</span>
            {projectSections.map((section) => (
              <a key={section.key} href={`#${section.key}`} className="btn-outline-brand btn-sm no-underline">
                {section.title}
              </a>
            ))}
          </div>

          {projectSections.map((section) => (
            <div key={section.key} className="mb-14" id={section.key}>
              <div className="mb-6 flex items-center gap-3">
                <div className="icon-wrap">
                  <i className={`bi ${section.icon}`} />
                </div>
                <div>
                  <h2 className="m-0 font-serif text-2xl font-medium tracking-wide">{section.title}</h2>
                  <p className="mb-0 text-sm text-muted">{section.description}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}

          <div className="cta-band mt-4">
            <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_auto]">
              <div>
                <h2 className="mb-2 font-serif text-2xl font-medium">Looking for accurate data and admin support?</h2>
                <p className="mb-0 text-cream/85">
                  I can contribute to encoding, verification, records organization, recruitment tracking, and day-to-day
                  office or virtual assistance tasks.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-cream px-5 py-3 text-xs font-medium tracking-[0.14em] text-brand uppercase no-underline"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
