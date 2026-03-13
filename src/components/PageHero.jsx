export default function PageHero({
  eyebrow,
  title,
  subtitle,
  gradient = "from-indigo-600/80 via-purple-600/70 to-sky-500/70",
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-gray-200/80 dark:border-gray-800 bg-slate-950 text-white px-8 py-14 shadow-sm">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute -left-16 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[-40px] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="relative max-w-3xl">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold mt-3 leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
