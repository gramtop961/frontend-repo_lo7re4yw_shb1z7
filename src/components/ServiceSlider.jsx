import React from 'react';
import { motion } from 'framer-motion';

// Simple auto-scrolling slider for tags/services using CSS animation
function AutoStrip({ items = [], reverse = false }) {
  return (
    <div className="relative overflow-hidden select-none">
      <div
        className={`flex gap-6 py-3 animate-[marquee_22s_linear_infinite] ${reverse ? 'direction-rtl' : ''}`}
        style={{
          // Define keyframes via tailwind config or inline in index.css; we fallback to inline @keyframes below
          // but since we can't inject here, we use two duplicated rows and translate via framer-motion if needed
        }}
      >
        {items.concat(items).map((it, i) => (
          <span key={i} className="px-4 py-2 rounded-full border border-black/10 bg-white shadow text-sm font-semibold">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServiceSlider() {
  const items = ['IA Générative', 'Agents', 'Intégrations API', 'SaaS', 'UI/UX', 'WebGL', 'SEO', 'Automation', 'Cloud', 'Marketplace', 'WordPress', 'Shopify'];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#000033]">Excellence Multicore</h3>
        <p className="mt-3 text-black/70 max-w-2xl">Nous combinons IA, design et développement pour délivrer des produits performants et élégants.</p>
        <div className="mt-8">
          <AutoStrip items={items} />
        </div>
      </div>
    </section>
  );
}
