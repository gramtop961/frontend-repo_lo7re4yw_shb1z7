import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-white to-blue-50/40 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">À propos de SAMAXAN</h1>
          <p className="mt-3 text-black/70 max-w-3xl">Nous sommes une équipe senior en produit, design, développement et IA. Notre mission: créer des expériences digitales qui maximisent la valeur business et la satisfaction utilisateur.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <div key={i} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <img src={m.photo} alt="" className="h-16 w-16 rounded-full object-cover" />
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="text-sm text-black/60">{m.role}</div>
                <p className="mt-3 text-sm text-black/70">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#000033]">Notre histoire</h2>
            <p className="mt-3 text-black/70">Née de la rencontre entre produit et IA, SAMAXAN accompagne startups et PME ambitieuses. Nous croyons aux itérations rapides, à la mesure et à l’impact réel sur vos KPI.</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-black/70">
              <li>2019 — Fondation de l’agence</li>
              <li>2020 — 50+ projets livrés</li>
              <li>2022 — Pôle IA & Data</li>
              <li>2024 — 120+ clients accompagnés</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  { name: 'Sarah M.', role: 'CEO • Product', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', bio: 'Produit et stratégie, 10 ans d’expérience.' },
  { name: 'Alex R.', role: 'CTO • IA & Data', photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop', bio: 'IA, automatisations et architectures scalables.' },
  { name: 'Nina P.', role: 'Lead Design', photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop', bio: 'Design émotionnel et conversion.' },
];
