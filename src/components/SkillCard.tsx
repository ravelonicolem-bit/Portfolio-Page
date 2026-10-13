type SkillCardProps = {
  icon: string;
  title: string;
  skills: string[];
};

export function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <article className="skill-card">
      <div className="mb-5 flex items-center gap-3">
        <div className="icon-wrap">
          <i className={`bi ${icon}`} />
        </div>
        <h3 className="m-0 text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <div>
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
