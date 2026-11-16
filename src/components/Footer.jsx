import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        {/* Branding & Status */}
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-slate-200">
            Fauzan Azmi Alfiansyah
          </p>
          <p className="mt-1 text-xs text-slate-500">
            &copy; {currentYear} &bull; Full-Stack &amp; Frontend Developer &bull; Bogor, Indonesia
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Thestucks"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-100"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/fauzan-azmi-alfiansyah-2920aa1a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-100"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href="mailto:fauzanazmia@gmail.com"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-slate-100"
            aria-label="Send Email"
            title="Send Email"
          >
            <Mail size={18} />
          </a>

          <a
            href="#hero"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-400 transition-colors duration-150 hover:border-accent/40 hover:text-accent-light"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
