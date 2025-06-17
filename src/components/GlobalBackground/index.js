import React from 'react';
import { GlobalBackgroundContainer } from './GlobalBackgroundStyle';
// In your index.js file, use any of these:
//import { FloatingParticles as GlobalBackgroundContainer } from './GlobalBackgroundStyle';
// OR
//import { MatrixRain as GlobalBackgroundContainer } from './GlobalBackgroundStyle';
// OR
//import { CyberpunkGrid as GlobalBackgroundContainer } from './GlobalBackgroundStyle';
// OR  
//import { LiquidMorph as GlobalBackgroundContainer } from './GlobalBackgroundStyle';
// OR
//import { DNAHelix as GlobalBackgroundContainer } from './GlobalBackgroundStyle';
const GlobalBackground = () => {
  return (
    <GlobalBackgroundContainer>
      {/* Color-shifting Aurora Base */}
      <div className="aurora"></div>

      {/* Morphing Gradient Blobs */}
      <div className="morphing-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* Flowing Geometric Waves */}
      <div className="geometric-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="twinkling-stars">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
        <div className="star star8"></div>
        <div className="star star9"></div>
        <div className="star star10"></div>
      </div>

      {/* Animated Grid Lines */}
      <div className="animated-grid">
        <div className="grid-line grid-horizontal grid-h1"></div>
        <div className="grid-line grid-horizontal grid-h2"></div>
        <div className="grid-line grid-horizontal grid-h3"></div>
        <div className="grid-line grid-vertical grid-v1"></div>
        <div className="grid-line grid-vertical grid-v2"></div>
        <div className="grid-line grid-vertical grid-v3"></div>
      </div>
    </GlobalBackgroundContainer>
  );
};

export default GlobalBackground;
