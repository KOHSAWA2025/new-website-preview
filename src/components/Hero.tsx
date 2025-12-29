export function Hero({
  headline,
  subtitle,
}: {
  headline: string;
  subtitle: string;
}) {
  return (
    <section className="flex min-h-[calc(100dvh-110px)] items-center py-16">
      <div className="mx-auto w-full max-w-[900px] text-center">
        <h1 className="whitespace-pre-line text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-950 sm:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-9 max-w-[640px] text-pretty text-base leading-8 text-neutral-800 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
