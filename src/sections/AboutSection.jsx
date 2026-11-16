import SectionTitle from "../components/SectionTitle";
import { Code, Compass, Users2, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-slate-900 bg-slate-950/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about bridging frontend aesthetics with rock-solid system architecture."
        />

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-800/90 bg-surface-raised p-8 sm:p-10 shadow-xl">
            {/* Story Paragraphs */}
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                I am <span className="font-semibold text-slate-100">Fauzan Azmi Alfiansyah</span>, a Computer Science graduate based in Bogor, Indonesia. With practical enterprise experience at <span className="font-semibold text-slate-100">PT Bank Negara Indonesia (Persero) Tbk</span>, I specialize in architecting modern web applications that unite robust backend engineering with pixel-precise user interfaces.
              </p>
              <p>
                My background spans the entire product lifecycle: from conducting user flow research and establishing design systems in <span className="text-slate-100 font-medium">Figma</span>, to building responsive frontends with <span className="text-slate-100 font-medium">React</span> and implementing secure APIs with <span className="text-slate-100 font-medium">Spring Boot &amp; MySQL</span>. I also have deep curiosity for IoT hardware, having built and deployed micro-controller GPS tracking devices from scratch.
              </p>
              <p>
                Having served as a <span className="text-slate-100 font-medium">Computer Science Teaching Assistant for three years</span>, I developed a strong foundation in algorithmic clarity, clear technical communication, and collaborative mentorship. I believe the best software is not just technically sound, but intuitive, accessible, and delightful to interact with.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="mb-3 inline-flex rounded-lg border border-accent/30 bg-accent-glow p-2 text-accent-light">
                  <Code size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-200">
                  Full-Stack Fluency
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  Comfortable connecting the dots between React components, RESTful Spring Boot services, and MySQL relational schemas.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="mb-3 inline-flex rounded-lg border border-accent/30 bg-accent-glow p-2 text-accent-light">
                  <Compass size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-200">
                  UI/UX Craft
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  Trained in design thinking, creating structured design tokens, accessible contrast, and interactive Figma prototypes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="mb-3 inline-flex rounded-lg border border-accent/30 bg-accent-glow p-2 text-accent-light">
                  <Users2 size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-200">
                  Effective Collaborator
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  Proven track record teaching hundreds of university students, collaborating across multi-disciplinary teams, and adapting swiftly.
                </p>
              </div>
            </div>

            {/* Quick Highlights checklist */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Bachelor of Computer Science (S1 Ilmu Komputer)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Certified in Design Thinking &amp; Digital Transformation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Enterprise BNI internship experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Available for immediate employment &amp; remote work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
