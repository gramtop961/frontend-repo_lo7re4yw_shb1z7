import React from 'react';
import { CheckCircle, Rocket, Bot, Layout, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Rocket className="h-5 w-5" />, 
    title: 'Sites vitrines & e-commerce hautes performances',
    points: [
      'Design premium orienté conversion',
      'SEO technique + Core Web Vitals',
      'CMS (Headless) & paiement sécurisé',
    ],
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Agents IA, automatisations & copilotes',
    points: [
      'Assistants IA pour support et vente',
      'Workflows no-code/low-code & APIs',
      'Intégration CRM et data layer',
    ],
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: 'Design produit & UX research',
    points: [
      'Parcours orientés KPI business',
      'Design system & prototypage',
      'Tests utilisateurs rapides',
    ],
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Acquisition & CRO',
    points: [
      'A/B testing & heatmaps',
      'Tracking server-side',
      'Landing pages à forte conversion',
    ],
  },
];

export default function ServiceShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/40" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000033]">Services conçus pour convertir</h2>
            <p className="mt-2 text-black/70 max-w-2xl">Chaque service inclut un focus ROI, une approche data-driven et des itérations rapides pour passer de l’idée au résultat.</p>
          </div>
          <a href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-md border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/5">Demander un devis</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-[#000033] font-semibold">
                <div className="h-9 w-9 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  {s.icon}
                </div>
                <span>{s.title}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline">Obtenir une estimation →</a>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Stat title="Taux de conversion moyen" value="+32%" />
          <Stat title="Time-to-market" value="-40%" />
          <Stat title="Croissance SEO" value="x2" />
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <div className="text-sm text-black/60">{title}</div>
      <div className="mt-1 text-3xl font-extrabold text-[#000033]">{value}</div>
    </div>
  );
}
