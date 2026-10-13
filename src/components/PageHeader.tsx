type PageHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <section className="topo-pattern border-b border-line pt-14 pb-12 md:pt-16 md:pb-14">
      <div className="container-wide">
        <p className="kicker kicker-rule">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium tracking-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{description}</p> : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
