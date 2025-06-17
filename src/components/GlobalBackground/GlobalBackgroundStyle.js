import styled from 'styled-components';

export const GlobalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background: transparent;

  /* Geometric Shapes */
  .geometric-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: shapeFloat 15s ease-in-out infinite;
  }

  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
  }

  .triangle1 {
    top: 20%;
    left: 15%;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid rgba(133, 76, 230, 0.3);
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .triangle2 {
    top: 70%;
    right: 20%;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 43px solid rgba(133, 76, 230, 0.25);
    animation-delay: -6s;
    animation-duration: 22s;
  }

  .circle {
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(133, 76, 230, 0.2) 0%,
      rgba(133, 76, 230, 0.05) 70%,
      transparent 100%
    );
  }

  .circle1 {
    top: 40%;
    left: 80%;
    width: 60px;
    height: 60px;
    animation-delay: -3s;
    animation-duration: 20s;
  }

  .circle2 {
    top: 80%;
    left: 30%;
    width: 40px;
    height: 40px;
    animation-delay: -9s;
    animation-duration: 16s;
  }

  .square {
    background: linear-gradient(
      45deg,
      rgba(133, 76, 230, 0.15) 0%,
      rgba(133, 76, 230, 0.05) 100%
    );
    transform-origin: center;
  }

  .square1 {
    top: 15%;
    right: 15%;
    width: 35px;
    height: 35px;
    animation-delay: -2s;
    animation-duration: 24s;
  }

  .square2 {
    bottom: 20%;
    left: 60%;
    width: 28px;
    height: 28px;
    animation-delay: -8s;
    animation-duration: 19s;
  }

  .hexagon {
    width: 40px;
    height: 23px;
    background: rgba(133, 76, 230, 0.2);
    position: relative;
  }

  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 11.5px solid rgba(133, 76, 230, 0.2);
  }

  .hexagon:after {
    top: 100%;
    border-top: 11.5px solid rgba(133, 76, 230, 0.2);
  }

  .hexagon1 {
    top: 60%;
    left: 10%;
    animation-delay: -4s;
    animation-duration: 21s;
  }

  .hexagon2 {
    top: 30%;
    right: 40%;
    animation-delay: -10s;
    animation-duration: 17s;
  }

  @keyframes shapeFloat {
    0%, 100% {
      transform: translateY(0) rotate(0deg) scale(1);
      opacity: 0.1;
    }
    25% {
      transform: translateY(-20px) rotate(90deg) scale(1.2);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-10px) rotate(180deg) scale(0.8);
      opacity: 0.2;
    }
    75% {
      transform: translateY(-30px) rotate(270deg) scale(1.1);
      opacity: 0.25;
    }
  }

  /* Flowing Lines */
  .flowing-lines {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .line {
    position: absolute;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(133, 76, 230, 0.4) 20%,
      rgba(133, 76, 230, 0.6) 50%,
      rgba(133, 76, 230, 0.4) 80%,
      transparent 100%
    );
    animation: lineFlow 8s ease-in-out infinite;
  }

  .line1 {
    top: 25%;
    left: -200px;
    width: 300px;
    transform: rotate(15deg);
    animation-delay: 0s;
  }

  .line2 {
    top: 55%;
    right: -200px;
    width: 250px;
    transform: rotate(-20deg);
    animation-delay: -3s;
  }

  .line3 {
    bottom: 30%;
    left: -200px;
    width: 350px;
    transform: rotate(10deg);
    animation-delay: -6s;
  }

  @keyframes lineFlow {
    0% {
      transform: translateX(0) rotate(var(--rotation, 0deg));
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(100vw + 200px)) rotate(var(--rotation, 0deg));
      opacity: 0;
    }
  }

  /* Gradient Blobs */
  .gradient-blobs {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(133, 76, 230, 0.08) 0%,
      rgba(133, 76, 230, 0.04) 50%,
      transparent 100%
    );
    animation: blobMorph 12s ease-in-out infinite;
    filter: blur(1px);
  }

  .blob1 {
    top: 10%;
    left: 20%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
  }

  .blob2 {
    bottom: 20%;
    right: 25%;
    width: 120px;
    height: 120px;
    animation-delay: -4s;
  }

  .blob3 {
    top: 50%;
    left: 60%;
    width: 100px;
    height: 100px;
    animation-delay: -8s;
  }

  @keyframes blobMorph {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      border-radius: 50%;
    }
    25% {
      transform: scale(1.3) rotate(90deg);
      border-radius: 60% 40% 30% 70%;
    }
    50% {
      transform: scale(0.8) rotate(180deg);
      border-radius: 30% 60% 70% 40%;
    }
    75% {
      transform: scale(1.1) rotate(270deg);
      border-radius: 40% 30% 60% 70%;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .shape {
      opacity: 0.05;
      animation-duration: 12s;
    }
    
    .triangle1,
    .triangle2 {
      border-left-width: 20px;
      border-right-width: 20px;
      border-bottom-width: 35px;
    }
    
    .circle1,
    .circle2 {
      width: 40px;
      height: 40px;
    }
    
    .square1,
    .square2 {
      width: 25px;
      height: 25px;
    }
    
    .line {
      display: none;
    }
    
    .blob {
      width: 80px;
      height: 80px;
      animation-duration: 8s;
    }
  }
`;
