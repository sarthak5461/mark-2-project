import PageHero from "../components/PageHero";

export default function About() {
  return (
    <div className="space-y-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <PageHero
          eyebrow="About"
          title="We build modern growth systems."
          subtitle="Mark Labs blends strategy, creative, media buying, and content ops into unified pods so every channel reinforces the next."
          gradient="from-emerald-500/80 via-cyan-500/70 to-blue-600/70"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Who we are
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              A marketing studio built for modern growth teams.
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Mark Labs blends strategy, creative, media buying, and content ops into unified pods. We focus on seven
              pillars so every channel reinforces the next.
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              We work in two-week sprints with transparent reporting, async updates, and leadership-ready insights.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How we work</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Two-week sprints with clear owners and reporting.</li>
                <li>Async updates and Looms instead of endless meetings.</li>
                <li>Leadership-ready metrics focused on revenue, not vanity.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What makes us different</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Channel pods tied together by a single creative strategy.</li>
                <li>Testing cadence that balances brand, acquisition, and retention.</li>
                <li>Operators who have shipped inside B2B, ecommerce, and marketplaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
