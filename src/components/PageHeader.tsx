type PageHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-cream-deep pt-[3.25rem] pb-9">
      <div className="container-site">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-3 max-w-3xl text-muted">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
