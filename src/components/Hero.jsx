"use client";

import { useState } from "react";
import { ArrowRight, Mail, FileDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";

export default function Hero({ t }) {
  const [photoSrc, setPhotoSrc] = useState("/profile.png");

  return (
    <section id="top" className="pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Profile Picture & Headline Layout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md flex-shrink-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              onError={() => setPhotoSrc("/programmer.svg")}
              alt="Dante Verdi Gutiérrez"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
              {t.hero.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400">
              {t.hero.role}
            </p>
          </div>
        </div>

        {/* Description Tagline */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl">
          {t.hero.tagline}
        </p>

        {/* Location Info */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <MapPin size={16} className="text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
          <span>{t.hero.location}</span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            <Mail size={16} />
            <span>{t.hero.ctaContact}</span>
          </a>

          <a
            href="/cv.pdf"
            download="Dante_Verdi_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
          >
            <FileDown size={16} />
            <span>{t.hero.ctaCv}</span>
          </a>
        </div>

        {/* Social Badges / Direct Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Perfiles & Redes:
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/danosqui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub: @danosqui"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/danteverdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn: /in/danteverdi"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href="mailto:danteverdigutierrez@gmail.com"
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Email"
              title="danteverdigutierrez@gmail.com"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
