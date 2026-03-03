export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-500/10 via-accent/15 to-fuchsia-400/10 p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">Start a project</p>
          <h1 className="text-4xl font-semibold mt-2">Tell us about the growth chapter you want to ship.</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            We focus on SEO, performance, social, affiliate, brand, influencer, and content marketing. Share your goals and timelines - expect a response within one business day.
          </p>
        </div>

        <form className="mt-8 grid md:grid-cols-2 gap-4">
          <input
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Full name"
          />
          <input
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Work email"
            type="email"
          />
          <input
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Company"
          />
          <input
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Website"
          />
          <select className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm md:col-span-2">
            <option>Focus area</option>
            <option>Search Engine Optimization</option>
            <option>Performance Marketing</option>
            <option>Social Media Marketing</option>
            <option>Affiliate Marketing</option>
            <option>Brand Marketing</option>
            <option>Influencer Marketing</option>
            <option>Content Marketing</option>
          </select>
          <textarea
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm md:col-span-2"
            rows="4"
            placeholder="What are your goals for the next 90 days?"
          />
          <button
            type="button"
            className="md:col-span-2 px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-md shadow-indigo-500/25"
          >
            Send request
          </button>
        </form>
      </div>
    </div>
  );
}
