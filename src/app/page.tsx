import Link from "next/link";
import type { Metadata } from "next";
import { featuredProjects, services } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Home",
};

const stats = [
  { value: "ERP", label: "Data encoding experience" },
  { value: "BS IT", label: "Information Technology" },
  { value: "7+", label: "Target support roles" },
  { value: "GMT+8", label: "Available to start soon" },
] as const;

const homeServices = services.slice(0, 4);

export default function HomePage() {
  const projects = featuredProjects();

  return (
    <>
      <section className="relative min-h-[calc(100vh-4.25rem)] overflow-hidden border-b border-line">
        <div className="grid min-h-[calc(100vh-4.25rem)] lg:grid-cols-2">
          <div className="topo-pattern relative flex items-center px-6 py-16 sm:px-10 lg:px-14 xl:px-20">
            <div className="max-w-xl">
              <p className="kicker kicker-rule fade-up mb-8">Accuracy, crafted with intention.</p>
              <h1 className="fade-up-delay font-serif text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Administrative support that elevates{" "}
                <em className="not-italic text-[var(--accent-italic)] italic">work.</em>
              </h1>
              <p className="fade-up-delay-2 mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                {profile.shortDescription}
              </p>
              <div className="fade-up-delay-2 mt-8">
                <Link href="/projects" className="btn-brand no-underline">
                  Explore my work <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-diagonal hero-media relative min-h-[320px] bg-surface lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
              alt="Bright modern workspace with clean desks and natural light"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-20" id="projects">
        <div className="container-wide">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-sm font-medium tracking-[0.18em] uppercase">Featured projects</h2>
            <Link href="/projects" className="link-arrow">
              View all projects <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group block text-ink no-underline"
              >
                <div className="mb-4 aspect-[4/3] overflow-hidden bg-surface">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-thumb h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-brand">
                      <i className={`bi ${project.icon} text-3xl`} />
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 font-serif text-xl font-medium tracking-wide uppercase">{project.title}</h3>
                    <p className="mt-1 mb-0 text-sm text-muted">{project.sectionTitle}</p>
                  </div>
                  <span className="mt-1 text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="mt-4 flex justify-end text-brand transition group-hover:translate-x-1">
                  <i className="bi bi-arrow-right" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream-deep">
        <div className="container-wide grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:py-20">
          <div className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Quiet, organized interior workspace"
              className="aspect-[4/5] h-full w-full object-cover md:aspect-auto md:min-h-[420px]"
            />
          </div>
          <div className="plan-pattern flex flex-col justify-center py-4 md:py-8">
            <p className="kicker mb-4">About me —</p>
            <h2 className="mb-5 max-w-lg font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
              I work with clarity. I support with care.
            </h2>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              {profile.objective}
            </p>
            <Link href="/about" className="btn-outline-brand w-fit no-underline">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-10 text-center sm:px-6 md:py-12">
                <div className="font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-20">
        <div className="container-wide">
          <h2 className="mb-12 font-serif text-sm font-medium tracking-[0.18em] uppercase">Capabilities —</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {homeServices.map((service) => (
              <article key={service.title} className="border-0 bg-transparent p-0">
                <div className="icon-wrap mb-5">
                  <i className={`bi ${service.icon}`} />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium tracking-wide">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{service.items[0]}</p>
                <Link href="/services" className="link-arrow text-muted">
                  Learn more <i className="bi bi-arrow-right" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
