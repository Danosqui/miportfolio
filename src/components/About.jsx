import { User, CheckCircle2, Award, Rocket, Users } from "lucide-react";

export default function About({ t, lang }) {
  const highlights = lang === "es" ? [
    { title: "Proactividad e Iniciativa", desc: "Autodidacta constante, siempre explorando nuevas tecnologías y buscando optimizar procesos." },
    { title: "Trabajo en Equipo y Comunicación", desc: "Capacidad de articular requerimientos técnicos con objetivos de negocio y colaborar eficazmente." },
    { title: "Ingeniería de Software & Buenas Prácticas", desc: "Énfasis en código limpio, modularidad (SOLID), control de versiones y documentación clara." },
  ] : [
    { title: "Proactivity & Initiative", desc: "Constant self-learner, always exploring emerging technologies and optimizing delivery pipelines." },
    { title: "Team Collaboration & Communication", desc: "Skilled at bridging technical concepts with business goals and collaborating in agile squads." },
    { title: "Software Engineering & Best Practices", desc: "Committed to clean code, modular architecture (SOLID), version control, and clear documentation." },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <User size={15} />
            <span>{t.about.title}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            {t.about.subtitle}
          </h2>
        </div>

        {/* Story Text */}
        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        {/* Soft Skills & Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 shadow-sm"
            >
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold text-base mb-2">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
