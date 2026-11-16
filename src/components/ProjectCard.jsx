import { ExternalLink } from "lucide-react";
import { GithubIcon, FigmaIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-surface-raised transition-all duration-150 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.08)]">
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

      {/* Project Thumbnail / Preview Showcase */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800/80 bg-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={`Preview screenshot of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${
              project.gradient || "from-slate-900 via-slate-850 to-slate-950"
            } p-6 text-center`}
          >
            <div className="mb-2 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              {project.figma ? (
                <FigmaIcon size={28} className="text-pink-400" />
              ) : (
                <span className="text-xl font-bold tracking-tight text-accent-light">
                  &lt;code /&gt;
                </span>
              )}
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              {project.badge || project.role}
            </span>
          </div>
        )}

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-md border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-slate-200 uppercase backdrop-blur-md">
            {project.role}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Header & Quick Action Links */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-slate-100 transition-colors duration-150 group-hover:text-accent-light">
            {project.title}
          </h3>

          <div className="flex shrink-0 items-center gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-colors duration-150 hover:bg-slate-800 hover:text-slate-100"
                aria-label={`GitHub repository for ${project.title}`}
                title="View GitHub Repository"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-colors duration-150 hover:bg-slate-800 hover:text-slate-100"
                aria-label={`Figma design file for ${project.title}`}
                title="Open Figma Design"
              >
                <FigmaIcon size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-colors duration-150 hover:bg-slate-800 hover:text-accent-light"
                aria-label={`Live interactive demo for ${project.title}`}
                title="Open Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-xs leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5 border-t border-slate-800/60 pt-3 text-xs text-slate-300">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-slate-800/60 pt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
