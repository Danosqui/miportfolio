import { FolderGit2, ExternalLink, Check, Sparkles, Server, Terminal, ShieldAlert } from "lucide-react";
import { GithubIcon } from "./Icons.jsx";

export default function Projects({ t }) {
  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <FolderGit2 size={15} />
            <span>{t.projects.title}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.projects.subtitle}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.list.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group"
            >
              <div>
                
                {/* Header with category and badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                    {proj.category}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium">
                    {proj.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {proj.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {proj.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 italic">
                      <span>{t.projects.enterpriseNotice}</span>
                    </span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
