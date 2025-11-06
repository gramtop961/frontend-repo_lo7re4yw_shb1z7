import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#000033]">
            Agence Web & IA pour des produits digitaux qui performent
          </h1>
          <p className="mt-5 text-lg md:text-xl text-black/70">
            Nous concevons des sites, applications et automatisations guidés par la data et l’IA pour booster votre acquisition et vos revenus.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="rounded-md bg-[#000033] text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md">Demander un devis</a>
            <a href="/portfolio" className="rounded-md border border-black/10 px-5 py-3 text-sm font-semibold hover:bg-black/5">Voir nos réalisations</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-black/60">
            <div>
              <span className="font-bold text-[#000033]">+120</span> projets livrés
            </div>
            <div>
              <span className="font-bold text-[#000033]">4.9/5</span> satisfaction moyenne
            </div>
            <div>
              <span className="font-bold text-[#000033]">72h</span> pour démarrer
            </div>
          </div>
        </div>
        <div className="bg-white/70 rounded-xl border border-black/10 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#000033]">Audit gratuit en 15 minutes</h3>
          <form className="mt-4 grid gap-3">
            <input type="text" placeholder="Nom / Société" className="h-11 rounded-md border border-black/10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input type="email" placeholder="Email" className="h-11 rounded-md border border-black/10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input type="text" placeholder="Projet (site, app, IA...)" className="h-11 rounded-md border border-black/10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <button type="button" className="h-11 rounded-md bg-[#000033] text-white font-semibold">Recevoir mon audit</button>
            <p className="text-xs text-black/60">En cliquant, vous acceptez notre politique de confidentialité.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
