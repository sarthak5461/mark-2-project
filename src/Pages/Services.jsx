import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { servicesCatalog } from "../data/services";

export default function Services() {
  return (
    <div className="space-y-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <PageHero
          eyebrow="Services"
          title="What we do"
          subtitle="Seven pods that work together: SEO, Performance, Social, Affiliate, Brand, Influencer, and Content."
          gradient="from-amber-500/80 via-orange-500/70 to-rose-500/70"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Catalog</p>
            <h2 className="text-3xl font-semibold mt-2">Seven pods, one operating system.</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Each pod runs on a two-week testing cadence with shared reporting, so moving between services is seamless.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesCatalog.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm hover:border-accent/60 hover:-translate-y-1 transition"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {service.category}
              </p>
              <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-semibold text-accent">View details →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
