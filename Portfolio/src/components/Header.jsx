import React from "react";
import { motion } from "framer-motion";
import logoAm from "../assets/logoAm.png";

export default function Header() {
  return (
    <motion.header
      className="bg-[#0A2647] fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero">
          <motion.img
            src={logoAm}
            alt="Ana Belén Moreno"
            className="h-14 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </a>

        <nav className="flex items-center space-x-6 text-[13px] font-mono text-[#10a7c2]">
          {[
            { name: "Sobre mí", href: "#about" },
            { name: "Formación", href: "#education" },
            { name: "Proyectos", href: "#projects" },
            { name: "Tecnologías", href: "#technologies" },
            { name: "Contacto", href: "#contact" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}

          <motion.a
            href="/cv.pdf"
            className="px-4 py-1.5 border-2 border-[#10a7c2] text-[#10a7c2] rounded-full hover:bg-[#10a7c2] hover:text-white transition-all text-[13px] font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            CV
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}