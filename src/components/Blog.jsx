import React from 'react';

const posts = [
  { title: 'CRO: 7 leviers pour booster vos conversions', date: 'Oct 2024' },
  { title: 'Agents IA: cas d’usage concrets en PME', date: 'Sep 2024' },
  { title: 'SEO technique: quick wins en 2025', date: 'Aug 2024' },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">Ressources & Blog</h1>
        <p className="mt-2 text-black/70 max-w-2xl">Guides, études et retours d’expérience pour accélérer vos produits.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-black/60">{p.date}</div>
              <h3 className="mt-1 font-semibold text-black">{p.title}</h3>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">Lire →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
