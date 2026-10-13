import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Let’s discuss a role"
        description="I am available for entry-level, part-time, and full-time opportunities in data encoding, administrative support, office operations, HR/recruitment assistance, and virtual assistance."
      >
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn-brand no-underline" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a
            className="btn-outline-brand no-underline"
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <Link className="btn-outline-brand no-underline" href="/projects">
            View Projects
          </Link>
        </div>
      </PageHeader>

      <section className="py-16">
        <div className="container-site grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="info-card h-full p-4">
            <h2 className="mb-3 font-serif text-lg font-bold">Contact details</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <p className="mb-2">
                  <i className="bi bi-person mr-2 text-brand" />
                  {profile.fullName}
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope mr-2 text-brand" />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
                <p className="mb-2">
                  <i className="bi bi-telephone mr-2 text-brand" />
                  {profile.phone}
                </p>
                <p className="mb-0">
                  <i className="bi bi-geo-alt mr-2 text-brand" />
                  {profile.location}
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <i className="bi bi-briefcase mr-2 text-brand" />
                  {profile.headline}
                </p>
                <p className="mb-2">
                  <i className="bi bi-clock mr-2 text-brand" />
                  {profile.availabilityStatus}
                </p>
                <p className="mb-0">
                  <i className="bi bi-calendar-check mr-2 text-brand" />
                  {profile.startDate}
                </p>
              </div>
            </div>
          </div>

          <div className="info-card h-full p-4">
            <h2 className="mb-3 font-serif text-lg font-bold">Roles of interest</h2>
            <div className="mb-3">
              {profile.targetRoles.map((role) => (
                <span key={role} className="skill-chip">
                  {role}
                </span>
              ))}
            </div>
            <p className="mb-0 text-sm text-muted">
              Please email me with the role details, schedule expectations, and any required tools or systems. I am ready
              to share my resume and discuss fit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
