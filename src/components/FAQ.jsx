import React from 'react';

const faqs = [
  { q: 'Quels sont vos délais ?', a: 'Démarrage sous 72h, sprints de 1 à 2 semaines selon l’ampleur.' },
  { q: 'Combien ça coûte ?', a: 'Nous travaillons au forfait ou au sprint. Un devis précis est fourni après un court audit.' },
  { q: 'Travaillez-vous à l’international ?', a: 'Oui, nous opérons en remote dans toute l’Europe et au-delà.' },
  { q: 'Pouvez-vous reprendre un projet existant ?', a: 'Absolument, nous auditons et améliorons vos assets existants.' },
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">FAQ</h1>
        <div className="mt-8 divide-y divide-black/10 bg-white rounded-xl border border-black/10">
          {faqs.map((f, i) => (
            <details key={i} className="p-5 group" open={i===0}>
              <summary className="cursor-pointer font-semibold text-black flex items-center justify-between">
                {f.q}
                <span className="text-black/50 text-sm">{i===0 ? '—' : '+'}</span>
              </summary>
              <p className="mt-2 text-black/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
