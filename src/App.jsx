import React from 'react';
import HeroCoverSpline from './components/HeroCoverSpline.jsx';
import MarqueeBands from './components/MarqueeBands.jsx';
import GiantWatermark from './components/GiantWatermark.jsx';
import FullWidthSections from './components/FullWidthSections.jsx';
import KenBurnsImage from './components/KenBurnsImage.jsx';

function App() {
  return (
    <div className="bg-white text-black font-black">
      {/* 3D Spline cover hero */}
      <HeroCoverSpline />

      {/* Massive marquees */}
      <MarqueeBands />

      {/* Giant watermark text */}
      <GiantWatermark />

      {/* Full screen Ken Burns image section */}
      <KenBurnsImage />

      {/* Full width sections with breathing effect */}
      <FullWidthSections />

      {/* Spacer */}
      <div className="py-40" />
    </div>
  );
}

export default App;
