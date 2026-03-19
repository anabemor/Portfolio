import React from 'react';
import profilebnImage from '../assets/profilebn.png';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 lg:pl-32
        bg-[#0A2647] text-[#E0D7FF]"
    >
      <div className="max-w-5xl">
        
        {/* Título */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#10a7c2] text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Sobre mí
          </h2>
          <div className="h-[1px] bg-[#10a7c2]/30 flex-grow ml-4"></div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Texto */}
          <div className="md:w-3/5 space-y-5 font-sans text-lg leading-relaxed">

            <p>
              ¡Hola! Soy <span className="text-[#10a7c2] font-semibold">Ana</span> y me apasiona crear 
              experiencias web interactivas, 
              atractivas y funcionales.
            </p>

            <p>
              He trabajado con 
              <span className="text-[#10a7c2] font-medium"> Angular</span>, 
              <span className="text-[#10a7c2] font-medium"> Symfony</span> y 
              <span className="text-[#10a7c2] font-medium"> PostgreSQL</span>, 
              desarrollando paneles de administración
              e interfaces escalables y fáciles de usar. 
              También he implementado funcionalidades como 
              <span className="text-[#10a7c2]"> sistemas de pago</span> y 
              <span className="text-[#10a7c2]"> notificaciones</span>.
            </p>

            <p>
              Me interesa especialmente la 
              <span className="text-[#10a7c2] font-medium"> experiencia de usuario (UX)</span>, 
              la <span className="text-[#10a7c2]">usabilidad</span> y la 
              <span className="text-[#10a7c2]"> accesibilidad</span>, 
              creando interfaces claras y eficientes. 
            </p>

            <p>
              Mi enfoque es siempre <span className="text-[#10a7c2] font-medium">aprender</span> y 
              <span className="text-[#10a7c2] font-medium"> adaptarme</span> a nuevas tecnologías.
              Me entusiasma seguir creando proyectos innovadores y ampliar mis conocimientos en el uso
              de la  <span className="text-[#10a7c2] font-medium">IA</span> como una herramienta estratégica y esencial.
            </p>

          </div>

          {/* Imagen */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group w-64 h-80 rounded-lg shadow-lg overflow-hidden">
              
              {/* Marco decorativo */}
              <div className="absolute inset-2 border-2 border-[#10a7c2] rounded-lg transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

              {/* Foto */}
              <img
                src={profilebnImage}
                alt="Ana Belén Moreno"
                className="relative w-full h-full object-cover object-top rounded-lg shadow-xl"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}