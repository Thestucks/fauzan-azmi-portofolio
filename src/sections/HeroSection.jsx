import { ArrowDown, FileDown, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import cvFile from "../assets/CV_Fauzan Azmi Alfiansyah.pdf";
import profilePhoto from "../assets/icon.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92dvh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]" />
        <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-cyan-accent/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to full-time roles &amp; freelance projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-accent-light">Fauzan Azmi</span>
              <br />
              <span className="text-slate-300 font-semibold">
                Full-Stack &amp; UI/UX Developer
              </span>
            </h1>

            {/* Subhead / Value Proposition */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Computer Science graduate with hands-on enterprise experience at{" "}
              <span className="font-semibold text-slate-100">
                PT Bank Negara Indonesia (Persero) Tbk
              </span>
              . I engineer scalable web systems with{" "}
              <span className="text-slate-100 font-medium">React</span>,{" "}
              <span className="text-slate-100 font-medium">Spring Boot</span>, and{" "}
              <span className="text-slate-100 font-medium">IoT</span>, crafted with
              human-centered UI/UX precision.
            </p>

            {/* Quick Location & Availability */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-accent-light" />
                Bogor, Indonesia (Remote / On-site)
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-emerald-400" />
                S1 Ilmu Komputer
              </span>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-xs font-semibold text-white shadow-md shadow-accent/20 transition-colors duration-150 hover:bg-accent-hover"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={cvFile}
                download="CV-Fauzan-Azmi-Alfiansyah.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent-glow px-5 py-3 text-xs font-semibold text-accent-light transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white"
              >
                <FileDown size={15} />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-5 py-3 text-xs font-semibold text-slate-300 transition-colors duration-150 hover:border-slate-600 hover:bg-slate-800 hover:text-slate-100"
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-2.5">
              <span className="text-xs font-medium text-slate-400">Connect:</span>
              <a
                href="https://github.com/Thestucks"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-200"
                aria-label="GitHub Profile"
                title="GitHub @Thestucks"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/fauzan-azmi-alfiansyah-2920aa1a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:fauzanazmia@gmail.com"
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-200"
                aria-label="Send direct email"
                title="Email fauzanazmia@gmail.com"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Highlights */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[340px] sm:max-w-sm">
              {/* Outer decorative card */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-surface-raised p-5 shadow-2xl backdrop-blur-sm">
                {/* Photo Container with natural portrait aspect ratio and clear breathing room */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 shadow-inner">
                  <img
                    src={profilePhoto}
                    alt="Fauzan Azmi Alfiansyah"
                    className="h-full w-full object-cover object-top"
                  />
                  {/* Floating location tag at top-right without covering chest or face */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Bogor, ID
                    </span>
                  </div>
                </div>

                {/* Profile Identity Bar */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-100">
                      Fauzan Azmi Alfiansyah
                    </h3>
                    <p className="text-xs text-accent-light font-medium">
                      Full-Stack &amp; UI/UX Developer
                    </p>
                  </div>
                  <span className="rounded-md border border-accent/30 bg-accent-glow px-2 py-0.5 text-[10px] font-bold text-accent-light uppercase tracking-wider">
                    Available
                  </span>
                </div>

                {/* Key Experience Callouts */}
                <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-3.5">
                  <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/80 px-3.5 py-2.5 text-xs">
                    <span className="text-slate-400 font-medium">Enterprise Internship</span>
                    <span className="font-semibold text-slate-200">PT Bank Negara Indonesia</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/80 px-3.5 py-2.5 text-xs">
                    <span className="text-slate-400 font-medium">Core Stack</span>
                    <span className="font-semibold text-accent-light">React &bull; Spring Boot &bull; IoT</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/80 px-3.5 py-2.5 text-xs">
                    <span className="text-slate-400 font-medium">Design &amp; Prototyping</span>
                    <span className="font-semibold text-slate-200">Figma Design Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
