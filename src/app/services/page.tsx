import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Capabilities",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Capabilities"
        title="How I can contribute"
        description="Practical support areas aligned with Data Encoder, Administrative Assistant, Office Staff, HR/Recruitment Assistant, and Virtual Assistant roles."
      />

      <section className="py-16">
        <div className="container-site">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="cta-band mt-12">
            <div className="grid items-center gap-3 lg:grid-cols-[1.5fr_auto]">
              <div>
                <h2 className="mb-2 font-serif text-xl font-bold">Ready to support structured office and data workflows</h2>
                <p className="mb-0">
                  I focus on accurate encoding, organized documentation, clear communication, and completing assigned
                  tasks on time.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-cream px-[1.1rem] py-[0.6rem] text-sm font-semibold text-brand-dark no-underline"
                >
                  Discuss a role
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
