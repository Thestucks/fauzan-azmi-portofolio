export default function SkillGroup({ category, items }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-surface-raised p-6 transition-all duration-300 hover:border-slate-700">
      <h3 className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.name}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              skill.level === "confident"
                ? "bg-accent-glow text-accent-light"
                : "bg-slate-800/80 text-slate-400"
            }`}
          >
            {skill.level === "confident" && (
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            )}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
