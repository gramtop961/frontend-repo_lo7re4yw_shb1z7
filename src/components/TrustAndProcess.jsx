import React from 'react';
import { ShieldCheck, BadgeCheck, Users, Workflow } from 'lucide-react';

export default function TrustAndProcess() {
  return (
    <section className="py-16" id="process">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000033]">Preuves & Méthodologie</h2>
          <p className="mt-2 text-black/70">Nous combinons rigueur produit, design émotionnel et IA pour livrer des expériences qui transforment réellement vos indicateurs business.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <div className="font-semibold text-black">Certifications & conformité</div>
                <p className="text-sm text-black/70">RGPD, sécurité, accessibilité AA</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="h-5 w-5 text-blue-700 mt-0.5" />
              <div>
                <div className="font-semibold text-black">Références vérifiables</div>
                <p className="text-sm text-black/70">Études de cas chiffrées</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="h-5 w-5 text-purple-700 mt-0.5" />
              <div>
                <div className="font-semibold text-black">Équipe senior</div>
                <p className="text-sm text-black/70">Produit, design, data, IA</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Workflow className="h-5 w-5 text-rose-700 mt-0.5" />
              <div>
                <div className="font-semibold text-black">Process agile</div>
                <p className="text-sm text-black/70">Sprints courts, reporting clair</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <ol className="space-y-4">
            <Step n={1} title="Audit & stratégie" desc="Analyse marché, concurrents et objectifs business." />
            <Step n={2} title="Expériences & prototypes" desc="Parcours clés, design system, tests rapides." />
            <Step n={3} title="Dév & intégrations" desc="Front, back, IA et connecteurs data." />
            <Step n={4} title="Lancement & CRO" desc="Suivi KPI, A/B tests, itérations continues." />
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, desc }) {
  return (
    <li className="flex gap-4">
      <div className="h-9 w-9 shrink-0 rounded-full bg-[#000033] text-white flex items-center justify-center font-bold">{n}</div>
      <div>
        <div className="font-semibold text-black">{title}</div>
        <p className="text-sm text-black/70">{desc}</p>
      </div>
    </li>
  );
}
