export default function SectionTitle({ title, subtitle, id }) {
  return (
    <div id={id} className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
    </div>
  );
}
