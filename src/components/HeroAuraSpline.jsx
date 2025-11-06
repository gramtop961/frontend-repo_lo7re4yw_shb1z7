import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroAuraSpline() {
  return (
    <section id="home" className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients should not block Spline interactions */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#000033]/70 via-transparent to-[#000033]/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-black tracking-tight leading-tight text-white"
          style={{ fontSize: 'clamp(40px,8vw,120px)' }}
        >
          L'IA au cœur de l'innovation digitale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 text-white/90 text-lg md:text-2xl font-semibold max-w-3xl"
        >
          Développement Full Stack, Design AAA et intégration d'agents IA pour une expérience premium.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#contact" className="rounded-full bg-white text-[#000033] font-extrabold px-6 py-3 shadow hover:shadow-lg transition-shadow">
            Obtenez une consultation IA gratuite
          </a>
          <a href="#ia" className="rounded-full border border-white/40 text-white font-bold px-6 py-3 hover:bg-white/10 transition">
            Voir notre expertise
          </a>
        </motion.div>
      </div>
    </section>
  );
}
