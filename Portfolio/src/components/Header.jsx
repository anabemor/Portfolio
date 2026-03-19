import React, { useState } from "react";
import { motion } from "framer-motion";
import logoAm from "../assets/logoAm.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa";
import cvPdf from "../assets/cv.pdf";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Formación", href: "#education" },
    { name: "Proyectos", href: "#projects" },
    { name: "Tecnologías", href: "#technologies" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      className="bg-[#0A2647] fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero">
          <motion.img
            src={logoAm}
            alt="Ana Belén Moreno"
            className="h-12 md:h-14 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </a>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-6 text-[13px] font-mono text-[#10a7c2]">
          {navItems.map((item, i) => (
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
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 border-2 border-[#10a7c2] text-[#10a7c2] rounded-full hover:bg-[#10a7c2] hover:text-white transition-all text-[13px] font-semibold"
            whileHover={{ scale: 1.05 }}
            title="Abrir CV en PDF"
          >
            <FaFilePdf className="text-sm" />
            CV
          </motion.a>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-[#10a7c2] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-[#0A2647] px-4 py-4 flex flex-col space-y-3 text-[#10a7c2] font-mono text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 border-2 border-[#10a7c2] text-[#10a7c2] rounded-full hover:bg-[#10a7c2] hover:text-white transition-colors text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
            title="Abrir CV en PDF"
          >
            <FaFilePdf className="text-sm" />
            CV
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}