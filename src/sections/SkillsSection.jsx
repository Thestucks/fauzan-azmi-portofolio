import SectionTitle from "../components/SectionTitle";
import SkillGroup from "../components/SkillGroup";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Skills & Tech Stack"
          subtitle="Teknologi dan tools yang saya gunakan untuk membangun aplikasi web."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Confident
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
            Familiar
          </span>
        </div>
      </div>
    </section>
  );
}
