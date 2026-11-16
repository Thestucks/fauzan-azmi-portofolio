export default function SkillGroup({ category, items }) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-surface-raised/70 p-6 backdrop-blur-sm transition-colors duration-150 hover:border-slate-700">
      <h3 className="mb-4 text-xs font-bold tracking-widest text-accent-light uppercase">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {items.map((skill) => {
          const isConfident = skill.level === "confident";
          const isFamiliar = skill.level === "familiar";

          let badgeStyles = "bg-slate-900/60 border-slate-800 text-slate-400";
          let dotColor = "bg-slate-500";

          if (isConfident) {
            badgeStyles = "bg-accent-glow border-accent/30 text-emerald-300";
            dotColor = "bg-accent-light";
          } else if (isFamiliar) {
            badgeStyles = "bg-slate-800/80 border-slate-700 text-slate-200";
            dotColor = "bg-cyan-400";
          }

          return (
            <span
              key={skill.name}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${badgeStyles}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
