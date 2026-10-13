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

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="cta-band mt-14">
            <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_auto]">
              <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight">Ready to support structured office and data workflows</h2>
                <p className="mb-0 text-white/75">
                  I focus on accurate encoding, organized documentation, clear communication, and completing assigned
                  tasks on time.
                </p>
              </div>
              <div className="lg:text-right">
                <Link href="/contact" className="btn-hero">
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
