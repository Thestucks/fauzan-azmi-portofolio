import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Branding */}
        <p className="text-sm text-slate-500">
          &copy; {currentYear} Fauzan Azmi. Built with React + Vite + Tailwind.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/fauzanazmi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/fauzanazmi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:fauzanazmi@email.com"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          {/* Back to top */}
          <a
            href="#hero"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-accent-light"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
