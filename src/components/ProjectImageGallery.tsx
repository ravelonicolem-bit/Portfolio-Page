"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectGalleryImage } from "@/data/catalog";

type ProjectImageGalleryProps = {
  images: ProjectGalleryImage[];
  projectTitle: string;
};

export function ProjectImageGallery({ images, projectTitle }: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = images[activeIndex] ?? images[0];

  const goTo = useCallback(
    (index: number) => {
      if (!images.length) return;
      const next = (index + images.length) % images.length;
      setActiveIndex(next);
    },
    [images.length],
  );

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, activeIndex, goTo]);

  if (!images.length) return null;

  return (
    <div>
      {/* Main carousel preview */}
      <div className="overflow-hidden rounded-md border border-line bg-slate-soft">
        <button
          type="button"
          onClick={() => openAt(activeIndex)}
          className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
          aria-label={`Open ${active.label} fullscreen`}
        >
          <Image
            src={active.src}
            alt={active.alt}
            width={1200}
            height={720}
            className="h-auto max-h-[22rem] w-full object-cover object-top"
            priority
          />
        </button>
        <div className="flex items-center justify-between gap-3 border-t border-line bg-white px-3 py-2">
          <p className="m-0 text-sm font-medium text-ink">{active.label}</p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="btn-secondary btn-sm"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous image"
            >
              Prev
            </button>
            <span className="px-2 text-xs text-muted">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              className="btn-secondary btn-sm"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(index)}
            className={`overflow-hidden rounded-md border bg-white p-0 text-left transition ${
              index === activeIndex ? "border-navy ring-2 ring-navy/20" : "border-line hover:border-accent"
            }`}
            aria-label={`View ${image.label}`}
            aria-current={index === activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={240}
              className="h-24 w-full object-cover object-top"
            />
            <span className="block truncate px-2 py-1.5 text-xs font-medium text-ink">{image.label}</span>
          </button>
        ))}
      </div>

      {/* Lightbox carousel */}
      {lightboxOpen && active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-dark/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div>
                <p className="m-0 text-sm text-slate-soft">{projectTitle}</p>
                <p className="m-0 font-semibold">{active.label}</p>
              </div>
              <button type="button" className="btn-secondary btn-sm" onClick={() => setLightboxOpen(false)}>
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-md bg-white">
              <Image
                src={active.src}
                alt={active.alt}
                width={1400}
                height={900}
                className="h-auto max-h-[70vh] w-full object-contain"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                type="button"
                className="btn-primary btn-sm"
                onClick={() => goTo(activeIndex - 1)}
              >
                Previous
              </button>
              <span className="text-sm text-slate-soft">
                {activeIndex + 1} of {images.length}
              </span>
              <button
                type="button"
                className="btn-primary btn-sm"
                onClick={() => goTo(activeIndex + 1)}
              >
                Next
              </button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={`lb-${image.src}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded border p-0 ${
                    index === activeIndex ? "border-white" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={120}
                    className="h-14 w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
