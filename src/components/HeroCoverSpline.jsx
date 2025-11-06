import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroCoverSpline() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden border-b-4 border-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + copy overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-black tracking-tight drop-shadow-xl leading-none"
          style={{ fontSize: 'clamp(48px,10vw,160px)' }}
        >
          LE FUTUR EST ICI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-2xl md:text-3xl font-semibold text-white/90"
        >
          Trippy galaxy • Neon futurism • Immersive digital
        </motion.p>
      </div>
    </section>
  );
}
