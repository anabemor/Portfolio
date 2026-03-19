import React from "react";
import { motion } from "framer-motion";

import githubIcon from "../assets/GithubLogo.png";
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";

const contacts = [
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/anabemor",
  },
  {
    name: "Gmail",
    icon: gmailIcon,
    url: "mailto:anamorenodevelop@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/ana-bel%C3%A9n-moreno-420239198/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 lg:pl-32 bg-[#0A2647] text-[#E0D7FF]"
      style={{ scrollMarginTop: "96px" }} // Ajusta según la altura del header si lo tienes fijo
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Título estilo Sandy */}
        {/* Título estilo Sandy centrado */}
<div className="flex items-center justify-center gap-4 mb-10">
  <span className="font-mono text-[#10a7c2] text-xl">05.</span>

  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
    Contacto
  </h2>

  <div className="h-[1px] w-32 bg-[#10a7c2]/30"></div>
</div>

        {/* Texto introductorio */}
        <p className="mb-12 text-lg md:text-xl font-sans text-[#E0D7FF]/80 max-w-2xl mx-auto">
          Estoy buscando nuevas oportunidades.
          Si tienes alguna propuesta, estaré encantada de responderte.
          Gracias por visitarme.        </p>

        {/* Iconos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-16 place-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-2 grayscale group-hover:grayscale-0 transition duration-300"
              />
              <span className="text-sm text-[#E0D7FF]/80 group-hover:text-white">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}