import React from 'react';
import ServiceShowcase from './ServiceShowcase';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <header className="py-14 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">Nos Services</h1>
          <p className="mt-3 text-black/70 max-w-2xl">Des offres pensées pour générer un maximum d’impact: visibilité, acquisition, rétention et revenus.</p>
        </div>
      </header>
      <ServiceShowcase />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {addons.map((a, i) => (
            <div key={i} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-semibold text-black">{a.title}</div>
              <p className="mt-2 text-sm text-black/70">{a.desc}</p>
              <a href="/contact" className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">Inclure dans mon devis →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const addons = [
  { title: 'Maintenance & SLA', desc: 'Support prioritaire, mises à jour, monitoring 24/7.' },
  { title: 'CRO avancé', desc: 'A/B testing, heatmaps, scripts d’optimisation.' },
  { title: 'SEO & contenu', desc: 'Stratégie éditoriale, maillage, netlinking.' },
];
