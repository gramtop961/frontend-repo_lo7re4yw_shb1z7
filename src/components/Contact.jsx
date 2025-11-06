import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000033]">Contact & Devis</h1>
          <p className="mt-3 text-black/70">Dites-nous où vous en êtes et ce que vous voulez atteindre. Nous revenons sous 24h.</p>
          <ul className="mt-6 space-y-2 text-sm text-black/70">
            <li>• Adresse: 10 rue de l’Innovation, 75000 Paris</li>
            <li>• Email: contact@samaxan.com</li>
            <li>• Téléphone: +33 1 23 45 67 89</li>
            <li>• Horaires: Lun-Ven 9h-18h</li>
          </ul>
          <div className="mt-6 rounded-xl border border-black/10 bg-white p-4 text-sm text-black/70">
            <div className="font-semibold text-black">Signaux de confiance</div>
            <ul className="mt-2 list-disc list-inside">
              <li>Assurance RC Pro</li>
              <li>Références clients vérifiables</li>
              <li>Contrats et RGPD conformes</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <form className="grid gap-3">
            <input className="h-11 rounded-md border border-black/10 px-3" placeholder="Nom / Société" />
            <input className="h-11 rounded-md border border-black/10 px-3" placeholder="Email" type="email" />
            <input className="h-11 rounded-md border border-black/10 px-3" placeholder="Budget estimé" />
            <textarea className="min-h-[120px] rounded-md border border-black/10 p-3" placeholder="Décrivez votre projet" />
            <button type="button" className="h-11 rounded-md bg-[#000033] text-white font-semibold">Envoyer la demande</button>
            <p className="text-xs text-black/60">Nous répondons sous 24h. Vos données ne sont jamais revendues.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
