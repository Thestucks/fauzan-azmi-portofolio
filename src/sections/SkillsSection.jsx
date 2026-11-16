import SectionTitle from "../components/SectionTitle";
import SkillGroup from "../components/SkillGroup";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Skills &amp; Technical Capabilities"
          subtitle="Specialized in building full-stack applications with modern JavaScript frameworks, robust backends, and responsive design systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-slate-800/60 bg-slate-900/40 px-6 py-3.5 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Proficiency Legend:</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-light" aria-hidden="true" />
            <span className="text-slate-300">Proficient / Primary Stack</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
            <span className="text-slate-300">Working Experience</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-500" aria-hidden="true" />
            <span className="text-slate-300">Fundamental / Exploratory</span>
          </span>
        </div>
      </div>
    </section>
  );
}
