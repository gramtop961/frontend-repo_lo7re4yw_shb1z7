import React from 'react';

export default function FooterPro() {
  return (
    <footer className="bg-[#000033] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-extrabold">SAMAXAN</div>
          <p className="mt-2 text-white/70">Agence Web & IA – Paris • Remote Europe</p>
          <p className="mt-1 text-white/60 text-sm">SIREN: 123 456 789</p>
        </div>
        <div>
          <div className="font-semibold">Navigation</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a href="/about" className="hover:underline">À propos</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/blog" className="hover:underline">Ressources</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Légal</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="/cgv" className="hover:underline">CGV</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>contact@samaxan.com</li>
            <li>+33 1 23 45 67 89</li>
            <li>Chat en direct disponible</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SAMAXAN. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/60">ISO-27001 ready</span>
            <span className="text-white/60">RGPD</span>
            <span className="text-white/60">Made in EU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
