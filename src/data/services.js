export const servicesCatalog = [
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    category: "Marketing & Performance",
    summary: "Technical, on-page, and content SEO that compounds qualified organic demand.",
    bullets: ["Audits & roadmaps", "Keyword intent mapping", "Schema & Core Web Vitals"],
    gradient: "from-amber-500/80 via-orange-500/70 to-rose-500/70",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Marketing & Performance",
    summary: "Meta, Google, and LinkedIn campaigns engineered for efficient CAC and ROAS.",
    bullets: ["Offer & angle testing", "Creative velocity", "Attribution clarity"],
    gradient: "from-indigo-500/80 via-purple-500/70 to-fuchsia-500/70",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing & Performance",
    summary: "Channel-specific playbooks that build community and feed paid performance.",
    bullets: ["Channel calendars", "Engagement systems", "UGC pipelines"],
    gradient: "from-sky-500/80 via-blue-500/70 to-indigo-500/70",
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing",
    category: "Marketing & Performance",
    summary: "Partner programs that scale reach with predictable unit economics.",
    bullets: ["Partner sourcing", "Commission design", "Fraud controls"],
    gradient: "from-emerald-500/80 via-teal-500/70 to-cyan-500/70",
  },
  {
    slug: "brand-marketing",
    title: "Brand Marketing",
    category: "Brand & Creative",
    summary: "Identity, messaging, and campaigns that make every touchpoint cohesive.",
    bullets: ["Narrative arcs", "Design language", "Campaign platforms"],
    gradient: "from-pink-500/80 via-rose-500/70 to-orange-500/70",
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    category: "Marketing & Performance",
    summary: "Creator collaborations tied to performance, not vanity metrics.",
    bullets: ["Creator CRM", "Briefs & offers", "Usage rights"],
    gradient: "from-lime-400/80 via-emerald-400/70 to-teal-400/70",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    category: "Brand & Creative",
    summary: "Editorial systems that fuel SEO, social, and sales enablement.",
    bullets: ["Content ops", "Repurposing", "Thought leadership"],
    gradient: "from-amber-400/80 via-yellow-400/70 to-orange-400/70",
  },
];

export function getServiceBySlug(slug) {
  return servicesCatalog.find((service) => service.slug === slug);
}
