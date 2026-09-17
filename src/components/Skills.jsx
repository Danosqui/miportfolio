import { Cpu, Layout, Server, Database, Wrench } from "lucide-react";

export default function Skills({ t }) {
  const categoryIcons = {
    Frontend: <Layout size={18} className="text-blue-500" />,
    "Backend & Core": <Server size={18} className="text-emerald-500" />,
    "Bases de Datos & Datos": <Database size={18} className="text-purple-500" />,
    "Databases & Storage": <Database size={18} className="text-purple-500" />,
    "AI & Herramientas": <Cpu size={18} className="text-amber-500" />,
    "AI & Developer Tools": <Cpu size={18} className="text-amber-500" />,
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <Cpu size={15} />
            <span>{t.skills.title}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.skills.subtitle}
          </h2>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                {categoryIcons[cat.name] || <Wrench size={18} className="text-zinc-500" />}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {cat.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 flex flex-col justify-between"
                  >
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                      {skill.name}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
