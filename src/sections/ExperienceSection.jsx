import SectionTitle from "../components/SectionTitle";
import { experiences, education } from "../data/experience";
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Experience &amp; Education"
          subtitle="A track record of enterprise digital operations, software development, academic teaching, and continuous learning."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-accent-light uppercase">
              <Briefcase size={16} />
              <span>Professional Journey</span>
            </div>

            <div className="relative space-y-6 border-l-2 border-slate-800 pl-6 sm:pl-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-accent transition-colors group-hover:bg-accent-light" />

                  <div className="rounded-2xl border border-slate-800/80 bg-surface-raised/70 p-6 transition-colors duration-150 hover:border-slate-700">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-accent-light">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-slate-300">
                      {exp.company}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-slate-800 bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8 lg:col-span-5">
            {/* Education Card */}
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-accent-light uppercase">
                <GraduationCap size={16} />
                <span>Education</span>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-surface-raised/70 p-6">
                <span className="inline-block rounded-md border border-accent/30 bg-accent-glow px-2.5 py-1 text-[11px] font-semibold text-accent-light">
                  {education.status}
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-100">
                  {education.degree}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Undergraduate thesis: Real-Time IoT GPS Tracking System &amp; Geofencing Protection for Kujang Relics.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={13} />
                  Bogor, Indonesia
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-accent-light uppercase">
                <Award size={16} />
                <span>Certifications &amp; Workshops</span>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-surface-raised/70 p-6">
                <ul className="space-y-3">
                  {education.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
