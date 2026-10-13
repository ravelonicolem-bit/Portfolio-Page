import Link from "next/link";
import type { Metadata } from "next";
import { projectSections, services } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Home",
};

const stats = [
  ["IT", "graduate with ERP encoding experience"],
  ["2+", "professional roles in data & admin support"],
  ["6+", "core capability areas ready to apply"],
  ["100%", "focus on accuracy and organized delivery"],
] as const;

const processSteps = [
  {
    icon: "bi-chat-dots",
    title: "Free consultation",
    copy: "We clarify the role, tools, and output you need so support starts with a clear brief.",
  },
  {
    icon: "bi-search",
    title: "Scope and preparation",
    copy: "I review source files, naming rules, and workflows before encoding or documentation begins.",
  },
  {
    icon: "bi-sliders",
    title: "Accurate execution",
    copy: "Data entry, records, and admin tasks are completed carefully against your established process.",
  },
  {
    icon: "bi-file-earmark-check",
    title: "Verification",
    copy: "I check for missing fields, duplicates, formatting issues, and inconsistencies before handoff.",
  },
  {
    icon: "bi-handshake",
    title: "Organized delivery",
    copy: "Files are named, filed, and returned ready for reporting, retrieval, or next-step coordination.",
  },
] as const;

const catalogCards = [
  {
    key: "excel-sheets",
    title: "Excel / Sheets",
    count: `${projectSections.find((s) => s.key === "excel-sheets")?.projects.length ?? 0}+ samples`,
    image: "/images/ui/catalog-office.jpg",
  },
  {
    key: "website",
    title: "Website",
    count: `${projectSections.find((s) => s.key === "website")?.projects.length ?? 0}+ projects`,
    image: "/images/ui/catalog-warehouse.jpg",
  },
  {
    key: "design",
    title: "Design",
    count: `${projectSections.find((s) => s.key === "design")?.projects.length ?? 0}+ pieces`,
    image: "/images/ui/catalog-land.jpg",
  },
];

const trustMarks = ["Excel", "ERP", "MS Office", "Records", "HR Admin", "Remote VA"];

export default function HomePage() {
  return (
    <>
      <section className="pb-6 pt-2 md:pb-8">
        <div className="container-wide">
          <div className="hero-panel hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ui/hero-architecture.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <div className="relative z-10 flex h-full min-h-[min(72vh,640px)] max-w-xl flex-col justify-end p-8 md:justify-center md:p-14 lg:p-16">
              <span className="availability-badge mb-5 w-fit fade-up">
                <span className="dot" />
                {profile.availabilityBadge}
              </span>
              <h1 className="m-0 text-4xl font-extrabold tracking-tight text-white fade-up-delay md:text-5xl lg:text-6xl">
                Support for data, admin, and office work
              </h1>
              <p className="mt-4 mb-0 max-w-md text-base leading-relaxed text-white/85 fade-up-delay-2">
                Accurate encoding, organized records, and dependable administrative support for your team.
              </p>
              <div className="mt-7 fade-up-delay-2">
                <a href={`mailto:${profile.email}`} className="btn-hero">
                  Start cooperation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="about">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="m-0 text-4xl font-bold tracking-tight md:text-5xl">About Us</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {profile.fullName} is an IT graduate with hands-on ERP data encoding, administrative support, and
                records verification experience. Since joining professional workflows, the focus has stayed on accuracy,
                clean documentation, and reliable day-to-day office or virtual assistance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <div className="text-4xl font-extrabold tracking-tight md:text-5xl">{value}</div>
                  <div className="mt-2 text-sm leading-snug text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-y border-line py-8">
            {trustMarks.map((mark) => (
              <span key={mark} className="text-sm font-semibold tracking-[0.08em] text-[#b0b0b0] uppercase">
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24" id="catalog">
        <div className="container-wide">
          <div className="mb-8 max-w-xl">
            <h2 className="m-0 text-4xl font-bold tracking-tight md:text-5xl">Work Catalog</h2>
            <p className="mt-3 text-muted">A focused selection of spreadsheet, website, and design samples.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {catalogCards.map((card) => (
              <Link key={card.key} href={`/projects#${card.key}`} className="catalog-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.title} />
                <div className="px-1 pt-4">
                  <div className="text-lg font-bold tracking-tight">{card.title}</div>
                  <div className="mt-1 text-sm text-muted">{card.count}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <Link href="/projects" className="carousel-btn carousel-btn-light no-underline" aria-label="Browse catalog">
              <i className="bi bi-arrow-left" />
            </Link>
            <Link href="/projects" className="carousel-btn carousel-btn-dark no-underline" aria-label="Open projects">
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24" id="how-we-work">
        <div className="container-wide">
          <div className="mb-10 max-w-xl">
            <h2 className="m-0 text-4xl font-bold tracking-tight md:text-5xl">How we work</h2>
            <p className="mt-3 text-muted">
              The process stays simple and transparent from first brief to verified handoff.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ui/process-building.jpg"
                alt=""
                className="block aspect-[3/4] w-full object-cover grayscale"
              />
              <div className="process-badge">Free consultation</div>
            </div>

            <div>
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex gap-4 py-6 ${index < processSteps.length - 1 ? "border-b border-line" : ""}`}
                >
                  <div className="icon-wrap mt-0.5">
                    <i className={`bi ${step.icon}`} />
                  </div>
                  <div>
                    <h3 className="m-0 text-lg font-bold tracking-tight">{step.title}</h3>
                    <p className="mt-2 mb-0 text-sm leading-relaxed text-muted">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="m-0 text-4xl font-bold tracking-tight md:text-5xl">Capabilities</h2>
              <p className="mt-3 text-muted">Practical support areas ready for office and remote teams.</p>
            </div>
            <Link href="/services" className="btn-outline-brand hidden no-underline md:inline-flex">
              All capabilities
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="service-card">
                <div className="icon-wrap mb-5">
                  <i className={`bi ${service.icon}`} />
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight">{service.title}</h3>
                <ul className="m-0 list-none p-0 text-sm text-muted">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="mb-2.5 flex gap-2.5 leading-relaxed">
                      <span className="mt-2 h-px w-3 flex-shrink-0 bg-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="cta-band flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight">Open to data encoding and administrative roles</h2>
              <p className="mb-0 max-w-2xl text-white/75">
                If you need accurate encoding, organized records, and dependable office or virtual support, let’s talk
                about how I can contribute.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${profile.email}`} className="btn-hero">
                Email Me
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
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
