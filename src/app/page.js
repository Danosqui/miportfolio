"use client";
import Image from "next/image";
import Titulo from "../components/Titulo.jsx"; 
import CustList from "../components/CustList.jsx"; 
import { useState, useEffect } from 'react';
export default function Home() {

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const translations = {
    es: {
      navWelcome: 'Inicio',
      navAbout: 'Sobre mí',
      navSkills: 'Conocimientos',
      navProjects: 'Proyectos',
      navContact: 'Contacto',
      welcomeTitle: 'Hola! Soy Dante.',
      welcomeSubtitle: 'Desarrollador web full-stack',
      aboutTitle: 'Sobre mí',
      aboutText: 'Soy un desarrollador web full-stack, egresado de Ort con bachiller en desarrollo de aplicaciones y estudiante de Lic. en Gestion de las Tecnologias de la información en UADE.',
      skillsTitle: 'Conocimientos',
      skillsIntro: 'Tengo experiencia en una variedad de tecnologías y herramientas, incluyendo:',
      skillsList1: ['React', 'Node.js', 'SQL'],
      skillsList2: ['Control de versiones Git', 'Tailwind CSS', 'APIs REST'],
      projectsTitle: 'Proyectos personales',
      project1Name: 'Hangover',
      project1Desc: 'Una red social de prendas de ropa personalizables, con funcionalidades de red social, e-commerce, y diseñador de ropa integrado.',
      project1Stack: 'Stack tecnologico: React.js + Node.js + PostgreSQL + ExpressJS.',
      project1Link: 'Ver en GitHub ↗',
      contactTitle: 'Sigamos en contacto',
      contactText: 'Si deseas ponerte en contacto conmigo, no dudes en escribirme a mi correo electrónico: '
    },
    en: {
      navWelcome: 'Home',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      welcomeTitle: "Hi! I'm Dante.",
      welcomeSubtitle: 'Full-stack web developer',
      aboutTitle: 'About me',
      aboutText: "I am a full-stack web developer, a graduate of Ort with a bachelor's degree in application development, and a student of Information Technology Management at UADE.",
      skillsTitle: 'Skills',
      skillsIntro: 'I have experience in a variety of technologies and tools, including:',
      skillsList1: ['React', 'Node.js', 'SQL'],
      skillsList2: ['Git version control', 'Tailwind CSS', 'REST APIs'],
      projectsTitle: 'Personal Projects',
      project1Name: 'Hangover',
      project1Desc: 'A social network for customizable clothing, with social media features, e-commerce, and an integrated clothing designer.',
      project1Stack: 'Tech stack: React.js + Node.js + PostgreSQL + ExpressJS.',
      project1Link: 'View on GitHub ↗',
      contactTitle: "Let's keep in touch",
      contactText: 'If you wish to get in touch with me, feel free to write to my email: '
    }
  };

  const [language, setLanguage] = useState('es');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-slate-800 bg-opacity-75 text-white p-4 flex justify-between items-center z-50 backdrop-blur-sm">
        <nav className="flex gap-4">
          <a href="#welcome" className="hover:text-cyan-400">{t.navWelcome}</a>
          <a href="#about" className="hover:text-cyan-400">{t.navAbout}</a>
          <a href="#skills" className="hover:text-cyan-400">{t.navSkills}</a>
          <a href="#projects" className="hover:text-cyan-400">{t.navProjects}</a>
          <a href="#contact" className="hover:text-cyan-400">{t.navContact}</a>
        </nav>
        <button onClick={toggleLanguage} className="border px-3 py-1 rounded hover:bg-cyan-400 hover:text-slate-900 font-bold">
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <div className="text-gray-100 text-xl h-screen overflow-y-scroll snap-y snap-mandatory font-sans">
        
        {/* Welcome Section */}
        <div id="welcome" className="h-screen flex flex-row items-center w-full justify-evenly snap-start bg-slate-500">
          <Image
            src="/guy.svg"
            width="300"
            height="300"
            alt="Illustration"
          ></Image>

          <div>
            <h1 className="text-6xl">{t.welcomeTitle}</h1>
            <p className="text-justify max-w-md pt-2 text-2xl text-gray-300">{t.welcomeSubtitle}</p>
          </div>
        </div>
        
        {/* Sobre mí Section */}
        <div id="about" className="h-screen flex flex-col justify-center items-center snap-start px-4 bg-slate-600">
          <Titulo>{t.aboutTitle}</Titulo>
          <p className="max-w-2xl text-center">{t.aboutText}</p>
        </div>

        {/* Conocimientos Section */}
        <div id="skills" className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-500">
          <Titulo>{t.skillsTitle}</Titulo>
          <div className="w-max flex flex-col items-center">
            <p className="max-w-2xl text-2xl font-bold mb-5 text-center">
              {t.skillsIntro}
            </p>
            <div className="flex flex-row justify-center gap-24">
              <CustList className="list-disc">
                {t.skillsList1.map(skill => <span key={skill}>{skill}</span>)}
              </CustList>
              <CustList className="list-disc">
                {t.skillsList2.map(skill => <span key={skill}>{skill}</span>)}
              </CustList>
            </div>
          </div>
        </div>

        {/* Proyectos Section */}
        <div id="projects" className="h-screen flex flex-col items-center justify-center snap-start bg-slate-600">
          <Titulo>{t.projectsTitle}</Titulo>
          <div className="flex flex-wrap justify-center gap-8 py-8">
            {/* Card 1 */}
            <div className="bg-slate-900 rounded-lg shadow-lg p-6 max-w-xs flex flex-col items-center justify-around">
              <Image src="/hangoverLogo.png" alt="Proyecto 1" width={200} height={120} className="rounded-md mb-4 " />
              <h3 className="text-xl font-semibold mb-2">{t.project1Name}</h3>
              <p className="text-gray-300 mb-4 text-center">
                {t.project1Desc}
              </p>
              <p className="text-gray-300 mb-4 text-center">
                {t.project1Stack}
              </p>
              <a href="https://github.com/danosqui/hangover1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                {t.project1Link}
              </a>
            </div>
          </div>
        </div>

        {/* Contacto Section */}
        <div id="contact" className="h-screen flex flex-col items-center justify-center snap-start bg-slate-500">
          <Titulo>{t.contactTitle}</Titulo>
          <div className="flex justify-center text-center max-w-2xl">
            <p>{t.contactText}<a className="text-cyan-400 hover:underline" href="mailto:danteverdigutierrez@gmail.com" target="_blank" rel="noopener noreferrer">danteverdigutierrez@gmail.com</a></p>
          </div>
        </div>
      
      </div>
    </>
  );
}
