import React from 'react';

export function MentionsLegales() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#000033]">Mentions légales</h1>
      <p className="mt-3 text-black/70">SAMAXAN • RCS Paris • Directeur de publication: S. Martin • Hébergeur: Vercel</p>
    </div>
  );
}

export function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#000033]">Politique de confidentialité</h1>
      <p className="mt-3 text-black/70">Nous respectons le RGPD et appliquons le principe de minimisation des données. Contact: dpo@samaxan.com</p>
    </div>
  );
}

export function CGV() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#000033]">Conditions Générales de Vente</h1>
      <p className="mt-3 text-black/70">Conditions applicables à nos prestations de services numériques. Demandez la version signée lors du devis.</p>
    </div>
  );
}
