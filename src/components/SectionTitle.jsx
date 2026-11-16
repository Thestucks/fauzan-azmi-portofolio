export default function SectionTitle({ title, subtitle, id, centered = true }) {
  return (
    <div id={id} className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <div className={`flex items-center gap-2 ${centered ? "justify-center" : "justify-start"} mb-3`}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
        <span className="h-1 w-8 rounded-full bg-accent/40" />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
