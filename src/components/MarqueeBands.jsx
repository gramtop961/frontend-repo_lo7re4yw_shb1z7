import React from 'react';
import { motion } from 'framer-motion';

function MarqueeRow({ text, direction = 'left', speed = 20, className = '' }) {
  const base = direction === 'left' ? 0 : -50;
  const to = direction === 'left' ? -50 : 0;
  return (
    <div className={`relative overflow-hidden border-y-4 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap py-6"
        animate={{ x: ['0%', `${to}%`] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {/* duplicate content to create seamless loop */}
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}

export default function MarqueeBands() {
  return (
    <section className="w-full"> 
      {/* Bande 1 */}
      <MarqueeRow
        text={<span className="font-black text-white text-8xl">INTELLIGENCE ARTIFICIELLE ★ DESIGN AAA</span>}
        direction="left"
        speed={24}
        className="bg-[#000033]"
      />
      {/* Bande 2 */}
      <MarqueeRow
        text={<span className="font-black text-transparent bg-clip-text text-6xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400">INNOVATION ● PERFORMANCE</span>}
        direction="right"
        speed={18}
        className="bg-white"
      />
      {/* Bande 3 */}
      <MarqueeRow
        text={<span className="font-black text-black text-7xl">DESIGN ▲ DÉVELOPPEMENT</span>}
        direction="left"
        speed={22}
        className="bg-white border-black"
      />
      {/* Bande 4 */}
      <MarqueeRow
        text={<span className="font-black text-transparent bg-clip-text text-9xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500">EXPERTISE ◆ QUALITÉ</span>}
        direction="right"
        speed={16}
        className="bg-[#0a0a0a] border-black"
      />
      {/* Bande 5 */}
      <MarqueeRow
        text={<span className="font-black text-white text-7xl">CREATIVITY ▣ IMPACT</span>}
        direction="left"
        speed={26}
        className="bg-black"
      />
    </section>
  );
}
