import { motion } from "framer-motion";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Technical foundations, keyword strategy, and content clusters that compound organic traffic.",
  },
  {
    title: "Performance Marketing",
    desc: "Meta, Google, and LinkedIn campaigns built on creative iteration and clean attribution.",
  },
  {
    title: "Social Media Marketing",
    desc: "Channel-specific playbooks that build community and feed performance creative.",
  },
  {
    title: "Affiliate Marketing",
    desc: "Partner programs with tight unit economics, fraud controls, and clear incentives.",
  },
  {
    title: "Brand Marketing",
    desc: "Narratives and identity systems that make every touchpoint cohesive.",
  },
  {
    title: "Influencer Marketing",
    desc: "Creators briefed, tracked, and iterated as a performance channel.",
  },
  {
    title: "Content Marketing",
    desc: "Editorial engines that fuel SEO, social, and sales enablement.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold text-center mb-16">What We Do</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-[0_20px_40px_-28px_rgba(99,102,241,0.45)] transition-all bg-white/80 dark:bg-slate-950/70"
          >
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
