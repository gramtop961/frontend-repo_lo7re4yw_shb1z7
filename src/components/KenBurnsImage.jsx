import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function KenBurnsImage() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.2]);

  return (
    <section className="relative h-screen w-full overflow-hidden border-y-4 border-black">
      <motion.img
        src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Cosmic city"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ scale }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white font-black text-9xl text-center drop-shadow-2xl">LE FUTUR EST ICI</h3>
      </div>
    </section>
  );
}
