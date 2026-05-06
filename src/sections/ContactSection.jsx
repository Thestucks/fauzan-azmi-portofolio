import SectionTitle from "../components/SectionTitle";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { Mail, FileText } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "fauzanazmi@email.com",
    href: "mailto:fauzanazmi@email.com",
    isBrand: false,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/fauzanazmi",
    href: "https://github.com/fauzanazmi",
    isBrand: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/fauzanazmi",
    href: "https://linkedin.com/in/fauzanazmi",
    isBrand: true,
  },
  {
    icon: FileText,
    label: "Resume / CV",
    value: "Download CV",
    href: "#",
    isBrand: false,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya."
        />

        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-surface-raised p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]"
                  id={`contact-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="rounded-xl bg-accent-glow p-3 transition-colors group-hover:bg-accent-glow-strong">
                    <Icon
                      size={20}
                      className="text-accent-light"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-slate-300 transition-colors group-hover:text-accent-light">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
