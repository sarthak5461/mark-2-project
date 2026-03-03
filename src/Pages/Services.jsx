const services = [
  {
    title: "Search Engine Optimization",
    desc: "Technical fixes, structured data, and content clusters that increase non-brand demand.",
    bullets: ["Audits & roadmaps", "Keyword & intent mapping", "Content briefs & editing", "Schema & Core Web Vitals"],
  },
  {
    title: "Performance Marketing",
    desc: "Paid search and paid social built on creative iteration and clean attribution.",
    bullets: ["Offer and angle testing", "Creative sprints", "Server-side tracking", "Bid & budget strategies"],
  },
  {
    title: "Social Media Marketing",
    desc: "Always-on social that builds community and supplies high-performing creative.",
    bullets: ["Channel playbooks", "Content calendars", "Engagement systems", "Social listening loops"],
  },
  {
    title: "Affiliate Marketing",
    desc: "Partner programs that expand reach with predictable unit economics.",
    bullets: ["Partner sourcing", "Commission modeling", "Program automation", "Fraud & compliance guardrails"],
  },
  {
    title: "Brand Marketing",
    desc: "Narrative and identity that make every channel coherent and memorable.",
    bullets: ["Messaging architecture", "Visual systems", "Campaign platforms", "Launch toolkits"],
  },
  {
    title: "Influencer Marketing",
    desc: "Creators as a performance channel - briefed, tracked, and iterated.",
    bullets: ["Creator CRM", "Usage rights & whitelisting", "Briefing & offers", "Performance dashboards"],
  },
  {
    title: "Content Marketing",
    desc: "Editorial systems that fuel SEO, social, and sales enablement.",
    bullets: ["Content ops & governance", "Thought-leadership series", "Repurposing frameworks", "Distribution playbooks"],
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Services</p>
          <h1 className="text-4xl font-semibold mt-2">Full-funnel growth, built around seven pillars.</h1>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
          Each pillar runs as a dedicated pod with shared reporting and a two-week test cadence.
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
