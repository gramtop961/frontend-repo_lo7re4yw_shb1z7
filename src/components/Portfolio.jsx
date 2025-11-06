import React from 'react';

const projects = [
  {
    title: 'E-commerce mode premium',
    impact: '+38% CA en 3 mois',
    img: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics B2B',
    impact: 'x2 MQL & +27% activation',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Agent IA support 24/7',
    impact: '-35% coûts support',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">Réalisations & Études de cas</h1>
        <p className="mt-2 text-black/70 max-w-2xl">Des résultats concrets: croissance, conversion et satisfaction. Voici un aperçu de nos projets récents.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt="" className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform" />
              <div className="p-5">
                <h3 className="font-semibold text-black">{p.title}</h3>
                <p className="text-sm text-black/60">Impact: {p.impact}</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">Lire l’étude de cas →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
