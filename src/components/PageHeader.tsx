type PageHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-white pt-14 pb-12 md:pt-16 md:pb-14">
      <div className="container-wide">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p> : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
