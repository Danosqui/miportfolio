"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { content } from "../data/content.js";

export default function Home() {
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme and language on client mount
  useEffect(() => {
    // Check saved theme - default to light mode as requested
    const savedTheme = localStorage.getItem("dv_portfolio_theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    // Check saved language
    const savedLang = localStorage.getItem("dv_portfolio_lang");
    if (savedLang === "es" || savedLang === "en") {
      setLang(savedLang);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("dv_portfolio_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("dv_portfolio_lang", newLang);
  };

  const t = content[lang] || content.es;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero t={t} />
        <Stats stats={t.stats} />
        <About t={t} lang={lang} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}
