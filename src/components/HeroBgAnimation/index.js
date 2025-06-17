// src/components/MyLottie.js
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../animations/Animation - 1750156621874.json';
import { AnimationContainer } from './HeroBgAnimationStyle';

const MyLottie = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimationContainer>
      <Lottie 
        animationData={animationData} 
        loop={true}
        autoplay={true}
        onDOMLoaded={() => setIsLoaded(true)}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: false,
          progressiveLoad: false,
          hideOnTransparent: false
        }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </AnimationContainer>
  );
};

export default MyLottie;
