const pillars = [
  "Search Engine Optimization",
  "Performance Marketing",
  "Social Media Marketing",
  "Affiliate Marketing",
  "Brand Marketing",
  "Influencer Marketing",
  "Content Marketing",
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Who we are</p>
          <h1 className="text-4xl font-semibold mt-2">A marketing studio built for modern growth teams.</h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Mark Labs blends strategy, creative, media buying, and content ops into unified pods. We focus on seven pillars so every channel reinforces the next.
          </p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            We work in two-week sprints with transparent reporting, async updates, and leadership-ready insights.
          </p>
        </div>
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white/80 dark:bg-slate-950/70">
          <h2 className="text-lg font-semibold">What we focus on</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
            {pillars.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 px-3 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
