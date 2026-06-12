type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="mb-5">
      {eyebrow ? (
        <p className="mb-2 text-xs font-black uppercase tracking-wide text-sofia-gold">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-2xl font-black text-sofia-green sm:text-3xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
