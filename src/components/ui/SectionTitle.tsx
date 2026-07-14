interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
        {eyebrow}
      </span>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
