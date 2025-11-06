import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#ia', label: 'Expertise IA' },
  { href: '#design', label: 'Web Design' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#formations', label: 'Formations' },
  { href: '#marketplace', label: 'Marketplace' },
  { href: '#contact', label: 'Contact' },
];

export default function StickyNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#000033]/95 backdrop-blur supports-[backdrop-filter]:bg-[#000033]/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#home" className="font-black tracking-tight text-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">SAMAXAN</span>
          <span className="ml-2 opacity-80 font-semibold">Agency</span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2 }}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-[#000033] px-4 py-2 text-sm font-extrabold shadow hover:shadow-lg transition-shadow">
          Consultation IA
        </a>
      </nav>
    </header>
  );
}
