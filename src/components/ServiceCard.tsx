type ServiceCardProps = {
  icon: string;
  title: string;
  items: string[];
};

export function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="icon-wrap mb-5">
        <i className={`bi ${icon}`} />
      </div>
      <h3 className="mb-4 font-serif text-xl font-medium tracking-wide">{title}</h3>
      <ul className="m-0 list-none p-0 text-sm text-muted">
        {items.map((item) => (
          <li key={item} className="mb-2.5 flex gap-2.5 leading-relaxed">
            <span className="mt-2 h-px w-3 flex-shrink-0 bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
