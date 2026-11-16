import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";
import cvFile from "../assets/CV_Fauzan Azmi Alfiansyah.pdf";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-800/90 bg-slate-950/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main Navigation">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-base font-bold tracking-tight text-slate-100 transition-colors hover:text-accent-light"
        >
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-accent/40 bg-accent-glow shadow-sm">
            <span className="font-display text-sm font-extrabold text-accent-light">FA</span>
          </span>
          <span className="font-display text-lg tracking-tight">
            Fauzan Azmi<span className="text-accent-light">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300 transition-colors duration-150 hover:bg-slate-800/70 hover:text-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Quick Resume CTA */}
          <a
            href={cvFile}
            download="CV-Fauzan-Azmi-Alfiansyah.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold text-accent-light transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden transition-all duration-200 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 pb-6 pt-3 backdrop-blur-xl">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/60 hover:text-accent-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-slate-800/80">
            <a
              href={cvFile}
              download="CV-Fauzan-Azmi-Alfiansyah.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              <FileDown size={16} />
              <span>Download Resume / CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
