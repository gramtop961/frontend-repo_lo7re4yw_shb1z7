import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', alt: 'Node' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg', alt: 'Git' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', alt: 'MongoDB' },
];

export default function ParallaxLogos() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -40]);
  const y2 = useTransform(scrollY, [0, 600], [0, 60]);
  const y3 = useTransform(scrollY, [0, 600], [0, -20]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-white to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#000033]">Technologies & Partenaires</h3>
        <p className="mt-3 text-black/70 max-w-2xl">Nous maîtrisons un large éventail d'outils modernes pour accélérer vos produits.</p>
        <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          <motion.img style={{ y: y1 }} className="h-12 object-contain opacity-80" src={logos[0].src} alt={logos[0].alt} />
          <motion.img style={{ y: y2 }} className="h-10 object-contain opacity-80" src={logos[1].src} alt={logos[1].alt} />
          <motion.img style={{ y: y3 }} className="h-12 object-contain opacity-80" src={logos[2].src} alt={logos[2].alt} />
          <motion.img style={{ y: y1 }} className="h-10 object-contain opacity-80" src={logos[3].src} alt={logos[3].alt} />
          <motion.img style={{ y: y2 }} className="h-12 object-contain opacity-80" src={logos[4].src} alt={logos[4].alt} />
        </div>
      </div>
    </section>
  );
}
