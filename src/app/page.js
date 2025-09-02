import Image from "next/image";
import Titulo from "../components/Titulo.jsx"; 
import CustList from "../components/CustList.jsx"; 
export default function Home() {
  return (
    <div className="text-gray-100 text-xl h-screen overflow-y-scroll snap-y snap-mandatory font-sans">
      
      {/* Welcome Section */}
      <div className="h-screen flex flex-row items-center w-full justify-evenly snap-start bg-slate-500">
        <Image
          src="/guy.svg"
          width="300"
          height="300"
          alt="Illustration"
        ></Image>

        <div>
          <h1 className="text-6xl">Hola! Soy Dante.</h1>
          <p className="text-justify max-w-md pt-2">Soy un desarrollador web full-stack y el resto de lo que voy a poner aca lo dejo 
            para despues pero tengo que rellenar aca el parrafo para ver como va quedando en terminos de estilo</p>
        </div>
      </div>
      
      {/* Sobre mí Section */}
      <div className="h-screen flex flex-col justify-center items-center snap-start px-4 bg-slate-600">
        <Titulo>Sobre mí</Titulo>
        <p className="max-w-2xl text-center">Soy un apasionado desarrollador web con experiencia en tecnologías modernas, incluyendo React, Node.js y bases de datos SQL.
          Me encanta aprender nuevas herramientas y resolver problemas complejos. 
        </p>
      </div>

      {/* Conocimientos Section */}
      <div className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-500">
        <Titulo>Conocimientos</Titulo>
        <div className="w-max flex flex-col items-center">
          <p className="max-w-2xl text-2xl font-bold mb-5 text-center">
            Tengo experiencia en una variedad de tecnologías y herramientas, incluyendo:
          </p>
          <div className="flex flex-row justify-center gap-24">
            <CustList className="list-disc">
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
            </CustList>
            <CustList className="list-disc">
              <span>Control de versiones Git</span>
              <span>Tailwind CSS</span>
              <span>APIs REST</span>
            </CustList>
          </div>
        </div>
      </div>

      {/* Proyectos Section */}
      <div className="h-screen flex flex-col items-center justify-center snap-start bg-slate-600">
        <Titulo>Proyectos personales</Titulo>
        <div className="flex flex-wrap justify-center gap-8 py-8">
          {/* Card 1 */}
          <div className="bg-slate-900 rounded-lg shadow-lg p-6 max-w-xs flex flex-col items-center justify-around">
            <Image src="/hangoverLogo.png" alt="Proyecto 1" width={200} height={120} className="rounded-md mb-4 " />
            <h3 className="text-xl font-semibold mb-2">Hangover</h3>
            <p className="text-gray-300 mb-4 text-center">
              Una red social de prendas de ropa personalizables, con funcionalidades de red social, e-commerce, y diseñador de ropa integrado.
            </p>
            <p className="text-gray-300 mb-4 text-center">
              Stack tecnologico: React.js + Node.js + PostgreSQL + ExpressJS.
            </p>
            <a href="https://github.com/danosqui/hangover1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Ver en GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Contacto Section */}
      <div className="h-screen flex flex-col items-center justify-center snap-start bg-slate-500">
        <Titulo>Sigamos en contacto</Titulo>
        <div className="flex justify-center text-center max-w-2xl">
          <p>Si deseas ponerte en contacto conmigo, no dudes en escribirme a mi correo electrónico: <a className="text-cyan-400 hover:underline" href="mailto:danteverdigutierrez@gmail.com" target="_blank" rel="noopener noreferrer">danteverdigutierrez@gmail.com</a></p>
        </div>
      </div>
    
    </div>
  );
}
