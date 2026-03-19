import React from "react";
import { motion } from "framer-motion";
// Asegúrate de tener instalado: npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

    
export default function SocialSidebar() {
  const links = [
    { icon: <FaGithub />, href: "https://github.com/anabemor" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/ana-bel%C3%A9n-moreno-420239198/" },
    { icon: <FaEnvelope />, href: "mailto:anamorenodevelop@gmail.com" },
  ];

  return (
    <motion.div
      className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-[#10a7c2] hover:-translate-y-1 transition-transform text-2xl"
          whileHover={{ scale: 1.2, color: "#ffffff" }}
        >
          {link.icon}
        </motion.a>
      ))}
      
      {/* La línea vertical decorativa */}
      <div className="w-[1px] h-24 bg-[#10a7c2] mt-2"></div>
    </motion.div>
  );
}