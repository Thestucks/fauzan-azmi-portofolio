import SectionTitle from "../components/SectionTitle";
import { Code2, GraduationCap, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="About Me"
          subtitle="Sedikit tentang latar belakang dan fokus saya."
        />

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-800 bg-surface-raised p-8 sm:p-10">
            <p className="text-base leading-relaxed text-slate-300">
              Saya <span className="font-semibold text-slate-100">Fauzan Azmi</span>,
              fresh graduate di bidang IT yang memiliki ketertarikan kuat
              pada pengembangan web. Saya fokus pada UI/UX & Frontend Development
              dengan React, namun juga berpengalaman membangun aplikasi
              full-stack menggunakan Spring Boot dan MySQL.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Saat ini saya aktif mengembangkan skill dan membangun project
              nyata untuk memperkuat portofolio. Saya percaya bahwa antarmuka
              yang baik bukan hanya soal visual — tapi tentang bagaimana
              sebuah produk terasa intuitif dan menyenangkan untuk digunakan.
            </p>

            {/* Key points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl bg-slate-800/40 p-4">
                <div className="rounded-lg bg-accent-glow p-2">
                  <GraduationCap size={18} className="text-accent-light" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">
                    Education
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    IT Graduate
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-800/40 p-4">
                <div className="rounded-lg bg-accent-glow p-2">
                  <Code2 size={18} className="text-accent-light" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">
                    Focus
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Frontend & Full Stack
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-800/40 p-4">
                <div className="rounded-lg bg-accent-glow p-2">
                  <Target size={18} className="text-accent-light" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">
                    Goal
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Build great products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
