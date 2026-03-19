import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import cvPdf from "../assets/cv.pdf";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Estado para efecto typing
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hola, me llamo";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex items-start 
        pt-32 md:pt-40
        bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295]"
    >
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="relative z-10 px-6 md:px-12 lg:px-20 lg:pl-32"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="max-w-2xl">
          {/* Typing effect */}
          <p className="text-lg md:text-xl font-mono text-[#10a7c2] mb-4">
            {displayText}
            <span className="animate-blink">|</span>
          </p>

          {/* Nombre con gradiente animado */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 
            bg-clip-text text-transparent animate-gradient-x"
          >
            Ana Belén Moreno
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-[#E0D7FF] mb-6">
            Desarrolladora Full Stack
          </h2>

          <p className="text-lg md:text-xl text-[#E0D7FF] mb-6">
            Mi motor es la curiosidad constante. Me implico en cada proyecto
            con responsabilidad y exigencia personal.
          </p>

          <div className="flex gap-4 font-mono">
            <motion.a
              href="#contact"
              className="px-6 py-2 border-2 border-[#10a7c2] text-[#10a7c2] font-semibold rounded-full hover:bg-[#10a7c2] hover:text-white transition text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Contáctame
            </motion.a>

            <motion.a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 border-2 border-[#10a7c2] 
                text-[#10a7c2] font-semibold rounded-full 
                hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 
                hover:text-white transition text-sm"
              whileHover={{ scale: 1.05 }}
              title="Abrir CV en PDF"
            >
              <FaFilePdf className="text-base" />
              Mi CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}