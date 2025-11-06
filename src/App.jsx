import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import ServiceShowcase from './components/ServiceShowcase.jsx';
import TrustAndProcess from './components/TrustAndProcess.jsx';
import FooterPro from './components/FooterPro.jsx';
import LiveChatWidget from './components/LiveChatWidget.jsx';

import ServicesPage from './components/ServicesPage.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import FAQ from './components/FAQ.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import { MentionsLegales, PolitiqueConfidentialite, CGV } from './components/Legal.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceShowcase />
      <TrustAndProcess />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>
        <FooterPro />
        <LiveChatWidget />
      </BrowserRouter>
    </div>
  );
}
