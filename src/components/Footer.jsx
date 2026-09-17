import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/danosqui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/danteverdi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Volver arriba"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
