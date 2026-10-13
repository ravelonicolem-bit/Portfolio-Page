"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/catalog";

type ProjectCardProps = {
  project: Project;
};

function isPractice(project: Project) {
  return (
    project.type === "practice" ||
    project.category.toLowerCase().includes("practice") ||
    project.summary.toLowerCase().includes("practice sample")
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const practice = isPractice(project);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <article className="project-card project-card-media">
        {project.image ? (
          <button
            type="button"
            className="group relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden border-0 border-b border-line bg-surface p-0"
            onClick={() => setLightbox({ src: project.image!, alt: project.title })}
            aria-label={`View larger image: ${project.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-contain object-center"
            />
            <span className="pointer-events-none absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/88 text-sm text-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <i className="bi bi-zoom-in" />
            </span>
          </button>
        ) : null}

        <div className="px-[1.4rem] pt-5 pb-[1.4rem]">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="icon-wrap">
              <i className={`bi ${project.icon}`} />
            </div>
            <div className="flex flex-wrap justify-end gap-1">
              {practice ? <span className="skill-chip skill-chip-sample">Practice Sample</span> : null}
              <span className="skill-chip">{project.category}</span>
              {project.status ? <span className="skill-chip">{project.status}</span> : null}
            </div>
          </div>
          <h3 className="mb-2 font-serif text-lg font-bold">{project.title}</h3>
          <p className="mb-2 text-sm text-muted">{project.summary}</p>
          <p className="mb-3 text-[0.8rem] text-muted">
            <strong>Outcome:</strong> {project.outcome}
          </p>
          <div className="mb-3">
            {project.skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
          {project.url ? (
            <a
              href={project.url}
              className="btn-outline-brand btn-sm no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <i className="bi bi-box-arrow-up-right ml-1" />
            </a>
          ) : null}
        </div>
      </article>

      {lightbox ? (
        <div className="fixed inset-0 z-[1080] flex items-center justify-center p-5">
          <button
            type="button"
            className="absolute inset-0 border-0 bg-black/72"
            aria-label="Close image preview"
            onClick={() => setLightbox(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project image preview"
            className="relative z-[1] flex w-full max-w-[960px] max-h-[calc(100vh-2.5rem)] flex-col gap-3 rounded-[14px] border border-line bg-card p-4 shadow-[0_18px_48px_rgba(18,18,18,0.28)]"
          >
            <button
              type="button"
              className="absolute top-2.5 right-2.5 z-[2] inline-flex h-9 w-9 items-center justify-center rounded-full border-0 bg-brand-dark text-cream hover:bg-brand"
              aria-label="Close image preview"
              onClick={() => setLightbox(null)}
            >
              <i className="bi bi-x-lg" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="block max-h-[calc(100vh-8rem)] w-full rounded-lg bg-surface object-contain"
            />
            <p className="m-0 text-center text-[0.92rem] font-semibold text-muted">{lightbox.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
