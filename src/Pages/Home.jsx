import { motion } from "framer-motion";
import LightPillar from "../components/ui/LightPillar";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Technical, on-page, and content SEO that compounds organic demand.",
    tags: ["Audits", "Keyword strategy", "Schema", "Content clusters"],
    glow: "from-amber-300/30 via-orange-300/25 to-rose-300/20",
  },
  {
    title: "Performance Marketing",
    desc: "Meta, Google, and LinkedIn campaigns engineered for efficient CAC and ROAS.",
    tags: ["Offer testing", "Creative velocity", "Attribution clarity"],
    glow: "from-indigo-400/30 via-purple-400/25 to-fuchsia-300/20",
  },
  {
    title: "Social Media Marketing",
    desc: "Channel-specific playbooks that build community and feed paid performance.",
    tags: ["Channel calendars", "Engagement systems", "UGC ops"],
    glow: "from-sky-400/25 via-blue-400/20 to-indigo-300/20",
  },
  {
    title: "Affiliate Marketing",
    desc: "Partner programs that scale reach with predictable unit economics.",
    tags: ["Partner sourcing", "Commission design", "Fraud controls"],
    glow: "from-emerald-400/30 via-teal-300/20 to-cyan-300/20",
  },
  {
    title: "Brand Marketing",
    desc: "Identity, messaging, and campaigns that make every touchpoint cohesive.",
    tags: ["Narrative arcs", "Design language", "Campaign platforms"],
    glow: "from-pink-200/25 via-fuchsia-300/20 to-purple-300/20",
  },
  {
    title: "Influencer Marketing",
    desc: "Creator collaborations tied to performance, not vanity metrics.",
    tags: ["Creator CRM", "Briefs & offers", "Usage rights"],
    glow: "from-lime-300/25 via-emerald-200/20 to-teal-200/20",
  },
  {
    title: "Content Marketing",
    desc: "Editorial systems that fuel SEO, social, and sales enablement.",
    tags: ["Content ops", "Repurposing", "Thought leadership"],
    glow: "from-amber-200/25 via-yellow-200/20 to-orange-200/20",
  },
];

const caseStudies = [
  {
    title: "Helio Mobility (SEO + Content)",
    metric: "+214% organic traffic",
    detail:
      "Technical fixes, schema rollout, and clustered content raised non-brand traffic in 90 days.",
    accent: "from-amber-200/20 to-orange-300/20",
  },
  {
    title: "Nova Cloud (Performance)",
    metric: "5.1x ROAS",
    detail:
      "Meta + LinkedIn offers with rapid creative testing and server-side tracking.",
    accent: "from-sky-200/20 to-cyan-300/20",
  },
  {
    title: "Kindred Beauty (Influencer + Social)",
    metric: "-32% CAC",
    detail:
      "Creator whitelisting, UGC variations, and retention journeys lifted blended CAC.",
    accent: "from-pink-200/20 to-fuchsia-300/20",
  },
];

const steps = [
  {
    title: "Foundations",
    desc: "SEO + tracking audit, ICP clarity, offer packaging, and baseline creative direction in week one.",
  },
  {
    title: "Channel Pods",
    desc: "SEO, performance, social, affiliate, and content pods spin up with shared briefs and calendars.",
  },
  {
    title: "Full-Funnel Launch",
    desc: "Campaigns go live across paid, organic, social, and affiliates with guardrails and QA.",
  },
  {
    title: "Scale & Shape",
    desc: "Double-down on winners, evolve creative, and expand into influencer + brand campaigns.",
  },
];

const testimonials = [
  {
    name: "Amelia Tran",
    role: "VP Growth, Helio Mobility",
    quote:
      "Their SEO + content engine became our demand moat. We saw lifts in rankings and paid efficiency because pages finally matched intent.",
  },
  {
    name: "Carter Mills",
    role: "CMO, Nova Cloud",
    quote:
      "Performance, social, and influencer all laddered to pipeline. Reporting was clean enough to brief the board every week.",
  },
];

const focusAreas = [
  "Search Engine Optimization",
  "Performance Marketing",
  "Social Media Marketing",
  "Affiliate Marketing",
  "Brand Marketing",
  "Influencer Marketing",
  "Content Marketing",
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white">
      <section className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <LightPillar
            topColor="#a855f7"
            bottomColor="#6366f1"
            intensity={0.9}
            rotationSpeed={0.8}
            glowAmount={0.004}
            pillarWidth={4}
            pillarHeight={0.35}
            noiseIntensity={0.04}
            pillarRotation={18}
            interactive
            mixBlendMode="screen"
            quality="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/70 to-black dark:from-black dark:via-slate-900 dark:to-black opacity-80" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn()}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">
                  Full-funnel marketing studio
                </span>
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-white">
                Performance marketing that feels like an in-house team.
              </h1>
              <p className="mt-6 text-lg text-slate-200 max-w-xl">
                We blend creative, media, and lifecycle into one operating
                system so you see faster lifts, cleaner attribution, and
                compounding growth.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg shadow-indigo-500/30"
                >
                  Book a growth session
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 backdrop-blur"
                >
                  View playbook
                </motion.button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-full text-xs text-white/90 border border-white/15 bg-white/5 backdrop-blur"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Capabilities
            </p>
            <h2 className="text-4xl font-semibold mt-2">
              Systems that compound.
            </h2>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Modular pods, unified reporting, and an experimentation cadence that
            keeps creative, media, and lifecycle in sync.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              {...fadeIn(idx * 0.05)}
              whileHover={{ y: -8, rotate: 0.2 }}
              className={`relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.35)]`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-70 pointer-events-none`}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-lg font-semibold">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {service.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Work
              </p>
              <h2 className="text-4xl font-semibold mt-2">Recent plays.</h2>
            </div>
            <button className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-800 text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition">
              View more case studies
            </button>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {caseStudies.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeIn(idx * 0.1)}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} pointer-events-none`}
                />
                <div className="relative">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {item.title}
                  </div>
                  <div className="text-3xl font-semibold mt-2">
                    {item.metric}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                    {item.detail}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                    See breakdown
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Operating model
            </p>
            <h2 className="text-4xl font-semibold mt-2">How we move.</h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              We build a testing roadmap in week one, then run two-week sprints
              with transparent reporting and async updates.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                {...fadeIn(idx * 0.08)}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-black shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent font-semibold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 rounded-[40px] max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Signals from partners
            </p>
            <h2 className="text-4xl font-semibold mt-2">What clients see.</h2>
            <p className="mt-3 text-slate-300 text-sm">
              Weekly loom recaps, real dashboards, and a team that ships.
              Here&apos;s what that feels like.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                {...fadeIn(idx * 0.1)}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6"
              >
                <p className="text-sm leading-relaxed text-slate-100">
                  {t.quote}
                </p>
                <div className="mt-4 text-sm text-slate-300">
                  <span className="font-semibold text-white">{t.name}</span> -{" "}
                  {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-500/10 via-accent/15 to-fuchsia-400/10 p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
              Ready?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Let&apos;s build your next growth chapter.
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Share your goals, tech stack, and timelines - we&apos;ll come back
              with a clear plan, projected impact, and the first tests we&apos;d
              run.
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg shadow-indigo-500/25"
            >
              Start a project
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-sm"
            >
              Download creds deck
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
