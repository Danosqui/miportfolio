"use client";

import { useState } from "react";
import { Mail, Copy, Check, FileDown, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <Mail size={15} />
            <span>{t.contact.emailLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-lg">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                {t.contact.emailLabel}
              </span>
              <a
                href={`mailto:${t.contact.email}`}
                className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                {t.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                title={t.contact.copyEmail}
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t.contact.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Send size={15} />
                <span>{t.contact.sendEmail}</span>
              </a>
            </div>
          </div>

          {/* Additional Channels (LinkedIn, GitHub, CV, Location) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/danteverdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 bg-zinc-50/50 dark:bg-zinc-950/50 group transition-all"
            >
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                <LinkedinIcon size={18} />
                <span className="text-xs font-semibold uppercase">LinkedIn</span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                /in/danteverdi
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/danosqui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-950/50 group transition-all"
            >
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white mb-1">
                <GithubIcon size={18} />
                <span className="text-xs font-semibold uppercase">GitHub</span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                @danosqui
              </span>
            </a>

            {/* CV Download */}
            <a
              href="/cv.pdf"
              download="Dante_Verdi_CV.pdf"
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 bg-zinc-50/50 dark:bg-zinc-950/50 group transition-all"
            >
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mb-1">
                <FileDown size={18} />
                <span className="text-xs font-semibold uppercase">CV (PDF)</span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                {t.contact.cvButton}
              </span>
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
                <MapPin size={18} />
                <span className="text-xs font-semibold uppercase">{t.contact.locationLabel}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                {t.contact.locationValue}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
