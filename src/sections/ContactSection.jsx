import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { Mail, FileText, Check, Copy, Phone, MapPin } from "lucide-react";
import cvFile from "../assets/CV_Fauzan Azmi Alfiansyah.pdf";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "fauzanazmia@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Whether you have an opening, a freelance project, or just want to connect, my inbox is always open."
        />

        <div className="mx-auto max-w-4xl">
          {/* Main Direct Email Highlight Card */}
          <div className="mb-8 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent-glow via-surface-raised to-surface-raised p-8 text-center sm:p-10">
            <span className="inline-block rounded-full border border-accent/30 bg-accent-glow px-3.5 py-1 text-xs font-semibold text-accent-light">
              Start a Conversation
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-100 sm:text-3xl">
              Let&apos;s build something impactful together
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
              Feel free to reach out directly via email or connect with me on professional platforms.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                <Mail size={15} />
                <span>Send Email ({emailAddress})</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* GitHub Card */}
            <a
              href="https://github.com/Thestucks"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-800 bg-surface-raised p-5 transition-all duration-150 hover:border-accent/40"
              aria-label="GitHub Profile"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:text-accent-light">
                <GithubIcon size={20} />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">GitHub</span>
              <span className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-accent-light">
                @Thestucks
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/fauzan-azmi-alfiansyah-2920aa1a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-800 bg-surface-raised p-5 transition-all duration-150 hover:border-accent/40"
              aria-label="LinkedIn Profile"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:text-accent-light">
                <LinkedinIcon size={20} />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">LinkedIn</span>
              <span className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-accent-light">
                Fauzan Azmi Alfiansyah
              </span>
            </a>

            {/* WhatsApp / Phone Card */}
            <a
              href="https://wa.me/6285156432121"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-800 bg-surface-raised p-5 transition-all duration-150 hover:border-accent/40"
              aria-label="WhatsApp / Phone Contact"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:text-accent-light">
                <Phone size={20} />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">WhatsApp</span>
              <span className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-accent-light">
                +62 851-5643-2121
              </span>
            </a>

            {/* Download Resume Card */}
            <a
              href={cvFile}
              download="CV-Fauzan-Azmi-Alfiansyah.pdf"
              className="group flex flex-col rounded-xl border border-slate-800 bg-surface-raised p-5 transition-all duration-150 hover:border-accent/40"
              aria-label="Download Curriculum Vitae"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:text-accent-light">
                <FileText size={20} />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Curriculum Vitae</span>
              <span className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-accent-light">
                Download PDF &rarr;
              </span>
            </a>
          </div>

          {/* Location note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <MapPin size={14} className="text-accent-light" />
            <span>Currently based in Bogor, West Java, Indonesia &bull; Open for local and remote opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
