import { GraduationCap, BookOpen, Layers, Briefcase } from "lucide-react";

export default function Stats({ stats }) {
  const icons = [
    <GraduationCap key="uade" className="text-blue-500" size={22} />,
    <BookOpen key="ort" className="text-emerald-500" size={22} />,
    <Layers key="stack" className="text-indigo-500" size={22} />,
    <Briefcase key="softtek" className="text-amber-500" size={22} />,
  ];

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs"
          >
            <div className="mb-3 flex items-center justify-between">
              {icons[idx]}
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">0{idx + 1}</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
