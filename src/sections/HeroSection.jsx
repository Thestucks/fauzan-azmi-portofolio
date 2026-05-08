import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          {/* Tag */}
          <span className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-glow px-4 py-1.5 text-xs font-medium tracking-wide text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Open to opportunities
          </span>

          {/* Heading */}
          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-accent-light">Fauzan Azmi</span>
            <br />
            <span className="text-slate-400">UI/UX Designer & Frontend Developer</span>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-in-up mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
            style={{ animationDelay: "150ms" }}
          >
            Fresh graduate IT yang fokus membangun antarmuka web yang bersih,
            fungsional, dan berorientasi pada pengalaman pengguna.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-accent/30 active:scale-[0.97]"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-slate-100 active:scale-[0.97]"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="animate-fade-in-up mt-10 flex items-center gap-3"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href="https://github.com/Thestucks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fauzan-azmi-alfiansyah-2920aa1a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
