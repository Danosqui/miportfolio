import { Briefcase, GraduationCap, Building2, Calendar, CheckCircle } from "lucide-react";

export default function Experience({ t }) {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <GraduationCap size={16} />
            <span>{t.experience.title}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.experience.subtitle}
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
          {t.experience.items.map((item, idx) => {
            const isEducation = item.type.includes("Educación") || item.type.includes("Education");
            return (
              <div key={idx} className="relative pl-8 sm:pl-10 ">
                
                {/* Timeline node icon */}
                <div className="absolute left-3 sm:left-4 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center">
                  {isEducation ? (
                    <GraduationCap size={12} className="text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Building2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>

                {/* Card content */}
                <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {item.institution}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
