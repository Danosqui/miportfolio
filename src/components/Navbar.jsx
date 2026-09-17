"use client";

import { useState } from "react";
import { Sun, Moon, Menu, X, FileDown } from "lucide-react";

export default function Navbar({ lang, setLang, theme, toggleTheme, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("/profile.png");

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand with Profile Photo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-xs flex-shrink-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              onError={() => setAvatarSrc("/programmer.svg")}
              alt="Dante Verdi Gutiérrez"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-base tracking-tight">
            Dante Verdi Gutiérrez
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Theme, Language, CV, Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1 rounded-md text-xs font-semibold border border-zinc-300 dark:border-zinc-700 bg-zinc-100/70 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download CV (Desktop) */}
          <a
            href="/cv.pdf"
            download="Dante_Verdi_CV.pdf"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <FileDown size={14} />
            <span>{t.nav.downloadCv}</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl transition-all">
          <nav className="flex flex-col gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              <a
                href="/cv.pdf"
                download="Dante_Verdi_CV.pdf"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
              >
                <FileDown size={16} />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
