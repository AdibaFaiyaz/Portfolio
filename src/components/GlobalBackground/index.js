import React from 'react';
import { GlobalBackgroundContainer } from './GlobalBackgroundStyle';

const GlobalBackground = () => {
  return (
    <GlobalBackgroundContainer>
      <div className="geometric-shapes">
        <div className="shape triangle triangle1"></div>
        <div className="shape triangle triangle2"></div>
        <div className="shape circle circle1"></div>
        <div className="shape circle circle2"></div>
        <div className="shape square square1"></div>
        <div className="shape square square2"></div>
        <div className="shape hexagon hexagon1"></div>
        <div className="shape hexagon hexagon2"></div>
      </div>
      <div className="flowing-lines">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <div className="gradient-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
    </GlobalBackgroundContainer>
  );
};

export default GlobalBackground;
