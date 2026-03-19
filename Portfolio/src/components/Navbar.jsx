import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="font-bold text-xl text-blue-600">Ezequiel Dev</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#hero" className="hover:text-blue-500">Inicio</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-blue-500">Tecnologías</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
