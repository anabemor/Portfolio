import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Desarrollo de Aplicaciones Web (DAW)",
    institution: "Cesur",
    period: "2023 – 2025",
    description: "Ciclo formativo de grado superior en desarrollo de aplicaciones web full stack.",
  },
  {
    icon: GraduationCap,
    title: "Máster en Diseño Gráfico",
    institution: "Escuela de Diseño Gauss Multimedia",
    period: "2003 – 2004",
    description: "Formación avanzada en diseño gráfico y comunicación visual.",
  },
  {
    icon: GraduationCap,
    title: "Licenciatura en Periodismo",
    institution: "Universidad de Málaga",
    period: "2000 – 2004",
    description: "Comunicación, redacción, gestión de contenidos y estrategia mediática.",
  }
];

const experience = [
  {
    icon: Briefcase,
    title: "Desarrolladora Front-End",
    institution: "CodeArts Solutions (Remoto)",
    period: "Marzo 2025 – Junio 2025",
    description: "Desarrollo de aplicación web con Angular y TypeScript. Docker, tests con Postman y metodología SCRUM.",
  },
  {
    icon: Briefcase,
    title: "Gestora Atención al Cliente",
    institution: "GDA Grupo Assista",
    period: "Nov 2010 – Nov 2020",
    description: "Soporte técnico, gestión de TPVs virtuales y administración de plataformas de venta.",
  },
  {
    icon: Briefcase,
    title: "Content Manager",
    institution: "Obra Social Unicaja Banco",
    period: "Marzo 2007 – Enero 2009",
    description: "Gestión de contenidos web y coordinación de campañas de comunicación.",
  }
];

function TimelineItem({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-5 items-start"
    >
      <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-[#10a7c2]/10 border-2 border-[#10a7c2]/30 items-center justify-center z-10">
        <item.icon className="w-5 h-5 text-[#10a7c2]" />
      </div>
      <div className="flex-1 rounded-2xl border border-[#10a7c2]/20 bg-[#0A2647]/30 backdrop-blur-sm p-5 hover:border-[#10a7c2]/50 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <span className="text-xs font-mono text-[#10a7c2] bg-[#10a7c2]/10 px-2 py-0.5 rounded-full">
            {item.period}
          </span>
        </div>
        <p className="text-[#10a7c2]/80 text-sm font-mono mb-2">{item.institution}</p>
        <p className="text-[#E0D7FF]/70 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-20 lg:pl-32 bg-[#0A2647] text-[#E0D7FF]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título estilo Sandy */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#10a7c2] text-xl">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Formación y Experiencia
          </h2>
          <div className="h-[1px] bg-[#10a7c2]/30 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna Educación */}
          <div>
            <h3 className="text-xl font-mono text-[#10a7c2] mb-8 flex items-center gap-3">
              <GraduationCap /> Educación
            </h3>
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-[#10a7c2]/20 hidden md:block" />
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Columna Experiencia */}
          <div>
            <h3 className="text-xl font-mono text-[#10a7c2] mb-8 flex items-center gap-3">
              <Briefcase /> Experiencia
            </h3>
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-[#10a7c2]/20 hidden md:block" />
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}