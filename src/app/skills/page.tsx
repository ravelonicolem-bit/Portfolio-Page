import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillCard } from "@/components/SkillCard";
import { skillGroups } from "@/data/catalog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        kicker="Skills"
        title="Skills for data, office, and support roles"
        description="Grouped for quick scanning by recruiters hiring for encoding, administrative, HR support, and virtual assistance positions."
      />

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="info-card mb-6 p-6">
            <div className="mb-3 text-sm font-medium text-muted">Core competencies</div>
            {profile.coreSkills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
