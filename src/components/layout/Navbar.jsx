import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Who We Are" },
    { to: "/services", label: "What We Do" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/70 backdrop-blur border-b border-gray-200/80 dark:border-gray-800/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-accent text-white font-semibold flex items-center justify-center shadow-lg shadow-indigo-500/30">
            M
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-lg">Mark Labs</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Growth & Creative Studio
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            aria-label="Toggle theme"
          >
            {dark ? "☾" : "☀"}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold shadow-md shadow-indigo-500/25"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
