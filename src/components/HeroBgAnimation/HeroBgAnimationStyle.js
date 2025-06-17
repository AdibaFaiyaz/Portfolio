import styled from 'styled-components';

export const AnimationContainer = styled.div`
  width: 600px;
  height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  canvas {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(16, 16, 20, 0.95) 0%,
      rgba(25, 25, 35, 0.9) 50%,
      rgba(16, 16, 20, 0.95) 100%
    );
    border-radius: 20px;
    box-shadow: 
      0 0 50px rgba(133, 76, 230, 0.1),
      inset 0 0 50px rgba(133, 76, 230, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(133, 76, 230, 0.03) 50%,
      transparent 70%
    );
    border-radius: 20px;
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgba(133, 76, 230, 0.3),
      rgba(19, 173, 199, 0.3),
      rgba(133, 76, 230, 0.3)
    );
    border-radius: 22px;
    z-index: -1;
    animation: borderGlow 3s ease-in-out infinite alternate;
  }

  @keyframes borderGlow {
    0% {
      opacity: 0.3;
      transform: scale(1);
    }
    100% {
      opacity: 0.6;
      transform: scale(1.02);
    }
  }
`;