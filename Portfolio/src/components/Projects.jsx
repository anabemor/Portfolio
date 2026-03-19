import React from "react";
import { motion } from "framer-motion";
import tickfantasiaImg from "../assets/tickfantasia.png";
import vuela21clienteImg from "../assets/vuela21cliente.png";
import GithubLogo from '../assets/GithubLogo.png';

const projects = [
  {
    title: "TickFantasía",
    description:
      "Aplicación de reservas y gestión de entradas para el Circo Escuela Fantasía. Incluye autenticación, panel de administración y un diseño alineado con la identidad corporativa.",
    tech: [
      "HTML",
      "CSS",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Symfony",
      "PHP",
      "PostgreSQL",
    ],
    url: "https://github.com/anabemor/CircoFantasia_TFG",
    image: tickfantasiaImg,
  },
  {
    title: "Vuela 21",
    description:
      "Aplicación web para la empresa de reparto Vuela 21. Con autenticación, paneles de administración para cada rol y funcionalidades como gestión de rutas, asignación de repartidores y seguimiento de envíos.",
    tech: [
      "HTML",
      "TypeScript",
      "PHP",
      "Angular",
      "Tailwind CSS",
      "Symfony",
      "PostgreSQL",
    ],
    url: "https://github.com/CodeArts-Solutions/bats-A-Vuela21",
    image: vuela21clienteImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 lg:pl-32 bg-[#0A2647] text-[#E0D7FF]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título estilo Sandy */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#10a7c2] text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Proyectos
          </h2>
          <div className="h-[1px] bg-[#10a7c2]/30 flex-grow ml-4"></div>
        </div>

        {/* Grid responsive centrado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group w-full max-w-md rounded-2xl overflow-hidden border border-[#10a7c2]/20 bg-[#0A2647]/30 backdrop-blur-sm shadow-lg transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-[#E0D7FF]/80 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="bg-[#10a7c2]/10 text-[#10a7c2] px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <img src={GithubLogo} alt="GitHub Logo" className="w-10 h-10" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 