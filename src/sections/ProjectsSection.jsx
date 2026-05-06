import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Projects"
            subtitle="Project showcase will be updated soon."
          />
          <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <p className="text-slate-500">No projects to display yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="Project pilihan yang menunjukkan kemampuan teknis dan problem-solving saya."
        />

        {/* Featured grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-lg font-semibold text-slate-300">
              Other Projects
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {others.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i + featured.length}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
