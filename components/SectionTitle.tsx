type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
        {title}
      </h1>
      {subtitle ? (
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
