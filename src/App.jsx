import React from 'react';
import StickyNavbar from './components/StickyNavbar.jsx';
import HeroAuraSpline from './components/HeroAuraSpline.jsx';
import ServiceSlider from './components/ServiceSlider.jsx';
import ParallaxLogos from './components/ParallaxLogos.jsx';

// Keep previous immersive components to enrich the experience
import MarqueeBands from './components/MarqueeBands.jsx';
import GiantWatermark from './components/GiantWatermark.jsx';
import FullWidthSections from './components/FullWidthSections.jsx';
import KenBurnsImage from './components/KenBurnsImage.jsx';

function App() {
  return (
    <div className="bg-white text-black font-sans" id="home">
      <StickyNavbar />
      <main>
        <HeroAuraSpline />
        <MarqueeBands />
        <ServiceSlider />
        <ParallaxLogos />
        <GiantWatermark />
        <KenBurnsImage />
        <FullWidthSections />
        <footer className="bg-[#000033] text-white py-12 mt-24">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xl font-extrabold">SAMAXAN Agency</div>
            <p className="text-white/70">© {new Date().getFullYear()} — Tous droits réservés.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
