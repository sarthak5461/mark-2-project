import { Link, useParams, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { getServiceBySlug, servicesCatalog } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <p className="text-slate-600 dark:text-slate-400">
          The service you're looking for isn't available. Try another service or go back to the catalog.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm"
          >
            Go back
          </button>
          <Link
            to="/services"
            className="px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold shadow-md shadow-indigo-500/25"
          >
            View all services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <PageHero
          eyebrow={service.category}
          title={service.title}
          subtitle={service.summary}
          gradient={service.gradient}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">What we deliver</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">How engagement works</h3>
            <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-slate-950/60">
                <p className="font-semibold text-slate-900 dark:text-white">Two-week pilot</p>
                <p className="mt-1">Rapid discovery, implementation, and the first performance readout.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-slate-950/60">
                <p className="font-semibold text-slate-900 dark:text-white">Operating cadence</p>
                <p className="mt-1">Weekly priorities, async updates, and a monthly leadership deck.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-slate-950/60">
                <p className="font-semibold text-slate-900 dark:text-white">Measurement</p>
                <p className="mt-1">KPI tracking tied to revenue goals, not vanity metrics.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-slate-950/60">
                <p className="font-semibold text-slate-900 dark:text-white">Team & handoff</p>
                <p className="mt-1">Operators, strategists, and creators plugged into your stack and rituals.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-5 shadow-sm">
            <h4 className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Explore more</h4>
            <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
              {servicesCatalog.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className={`block rounded-2xl border border-transparent px-3 py-2 text-sm transition hover:border-accent/50 hover:bg-accent/10 ${
                    item.slug === service.slug
                      ? "bg-accent/10 text-accent border-accent/60"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Link
              to="/services"
              className="mt-3 inline-flex items-center gap-2 text-sm text-accent font-semibold"
            >
              View all services
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
