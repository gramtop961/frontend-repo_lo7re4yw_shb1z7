import React from 'react';
import { motion } from 'framer-motion';

function Section({ children }) {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-screen w-full flex items-center justify-center bg-[#000033] text-white border-y-4 border-black"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 text-center"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default function FullWidthSections() {
  return (
    <div>
      <Section>
        <h2 className="font-black text-8xl md:text-9xl leading-none">VISION</h2>
        <p className="mt-8 text-5xl font-black text-white/80 max-w-5xl mx-auto">Nous concevons des expériences immersives qui fusionnent IA, design et performance.</p>
      </Section>
      <Section>
        <h2 className="font-black text-9xl leading-none">PRÊT À PROPULSER</h2>
        <button className="mt-10 inline-flex items-center justify-center px-10 py-6 bg-white text-black font-black text-2xl rounded-full border-4 border-black shadow-[8px_8px_0_0_#000] active:shadow-[4px_4px_0_0_#000] transition-shadow">Lancer le projet</button>
      </Section>
    </div>
  );
}
