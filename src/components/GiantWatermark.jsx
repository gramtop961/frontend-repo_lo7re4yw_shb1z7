import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GiantWatermark() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1.5, 1]);
  const translateY = useTransform(scrollY, [0, 800], [200, 0]);
  const opacity = useTransform(scrollY, [0, 800], [0.1, 0.08]);

  return (
    <div ref={ref} className="relative py-40">
      <motion.div
        style={{ scale, y: translateY, opacity }}
        className="select-none pointer-events-none fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-tight text-[20vw] leading-none text-black/10 whitespace-nowrap"
        aria-hidden
      >
        SAMAXAN
      </motion.div>
    </div>
  );
}
