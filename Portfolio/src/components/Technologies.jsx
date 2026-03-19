import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

// Colores personalizados por tecnología
const iconColors = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f0db4f",
  TypeScript: "#3178c6",
  Python: "#3776AB",
  Java: "#e34c26",
  PHP: "#7952b3",
  SQL: "#0db7ed",
  XML: "#3c873a",
  Markdown: "#083fa1",

  Angular: "#dd0031",
  React: "#61dafb",
  Vite: "#646cff",
  "Tailwind CSS": "#38bdf8",
  Bootstrap: "#7952b3",
  Django: "#3c873a",
  "Spring Boot": "#6db33f",
  Symfony: "#7952b3",
  "Node.js": "#3c873a",
  PostgreSQL: "#0db7ed",
  MariaDB: "#f7931e",
  Moodle: "#f7931e",

  Git: "#f1502f",
  GitHub: "#ffffff",
  Docker: "#0db7ed",
  "VS Code": "#007ACC",
  Eclipse: "#7952b3",
  "Notepad++": "#90e59a",
  Apache: "#d22128",
  Virtualenv: "#3c873a",
  DBeaver: "#e38c00",
  Workbench: "#0db7ed",
};

// Secciones y nombre de íconos dinámicos
const sections = [
  {
    title: "Lenguajes",
    items: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCssthree" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "FaJava" },
      { name: "PHP", icon: "SiPhp" },
      { name: "SQL", icon: "FaDatabase" },
      { name: "XML", icon: "SiXml" },
      { name: "Markdown", icon: "SiMarkdown" },
    ],
  },
  {
    title: "Frameworks y Plataformas",
    items: [
      { name: "Angular", icon: "SiAngular" },
      { name: "React", icon: "SiReact" },
      { name: "Vite", icon: "SiVite" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Django", icon: "SiDjango" },
      { name: "Spring Boot", icon: "SiSpring" },
      { name: "Symfony", icon: "SiSymfony" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MariaDB", icon: "SiMariadb" },
      { name: "Moodle", icon: "SiMoodle" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Docker", icon: "SiDocker" },
      { name: "VS Code", icon: "FaCode" },
      { name: "Eclipse", icon: "SiEclipseide" },
      { name: "Notepad++", icon: "SiNotepadplusplus" },
      { name: "Apache", icon: "SiApache" },
      { name: "Virtualenv", icon: "SiVirtualbox" },
      { name: "DBeaver", icon: "SiDbeaver" },
      { name: "Workbench", icon: "SiMysql" },
    ],
  },
];

// Función para obtener componente dinámicamente
const getIconComponent = (iconName) => {
  if (SiIcons[iconName]) return SiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  return null;
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-24 px-6 md:px-12 lg:px-20 lg:pl-32 bg-[#0A2647] text-[#E0D7FF]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título estilo Sandy */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#10a7c2] text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tecnologías
          </h2>
          <div className="h-[1px] bg-[#10a7c2]/30 flex-grow ml-4"></div>
        </div>

        {/* Grid de secciones */}
        <div className="grid gap-12 md:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-[#0A2647]/30 backdrop-blur-sm border border-[#10a7c2]/20 rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono text-[#10a7c2] mb-4">
                {section.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {section.items.map((item, i) => {
                  const IconComponent = getIconComponent(item.icon);
                  return (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 bg-[#0A2647]/50 hover:bg-[#10a7c2]/10 transition duration-300 px-3 py-2 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {IconComponent && (
                        <span
                          className="text-lg"
                          style={{ color: iconColors[item.name] || "#93c5fd" }}
                        >
                          <IconComponent />
                        </span>
                      )}
                      <span>{item.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}