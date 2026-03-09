import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    focus: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        focus: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-500/10 via-accent/15 to-fuchsia-400/10 p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
            Start a project
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Tell us about the growth chapter you want to ship.
          </h1>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            We focus on SEO, performance, social, affiliate, brand, influencer,
            and content marketing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid md:grid-cols-2 gap-4"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Full name"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Work email"
            required
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Company"
          />

          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm"
            placeholder="Website"
          />

          <select
            name="focus"
            value={formData.focus}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm md:col-span-2"
          >
            <option value="">Focus area</option>
            <option>Search Engine Optimization</option>
            <option>Performance Marketing</option>
            <option>Social Media Marketing</option>
            <option>Affiliate Marketing</option>
            <option>Brand Marketing</option>
            <option>Influencer Marketing</option>
            <option>Content Marketing</option>
          </select>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-4 py-3 text-sm md:col-span-2"
            placeholder="What are your goals for the next 90 days?"
          />

          <button
            type="submit"
            className="md:col-span-2 px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-md shadow-indigo-500/25"
          >
            Send request
          </button>
        </form>
      </div>
    </div>
  );
}
