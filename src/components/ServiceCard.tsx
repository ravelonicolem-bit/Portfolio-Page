type ServiceCardProps = {
  icon: string;
  title: string;
  items: string[];
};

export function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="icon-wrap mb-3">
        <i className={`bi ${icon}`} />
      </div>
      <h3 className="mb-3 font-serif text-lg font-bold">{title}</h3>
      <ul className="m-0 list-none p-0 text-muted">
        {items.map((item) => (
          <li key={item} className="mb-2 flex gap-2">
            <i className="bi bi-check2 text-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
