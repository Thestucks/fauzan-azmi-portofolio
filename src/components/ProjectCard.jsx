import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-surface-raised transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-snug text-slate-100 transition-colors group-hover:text-accent-light">
              {project.title}
            </h3>
            <span className="mt-1 inline-block text-xs font-medium tracking-wide text-accent uppercase">
              {project.role}
            </span>
          </div>

          {/* Links */}
          <div className="flex shrink-0 items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack badges — pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-glow px-3 py-1 text-xs font-medium text-accent-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
