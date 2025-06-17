import styled from 'styled-components';

// Main Global Background Container
export const GlobalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  overflow: hidden;
  background: #0a0e1a;

  /* Flowing Blue Waves */
  .wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
  }

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.1),
      rgba(59, 130, 246, 0.2),
      rgba(59, 130, 246, 0.1),
      transparent
    );
    border-radius: 50% 50% 0 0;
    animation: waveMotion 15s ease-in-out infinite;
  }

  .wave:nth-child(2) {
    height: 80%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.05),
      rgba(59, 130, 246, 0.1),
      rgba(59, 130, 246, 0.05),
      transparent
    );
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes waveMotion {
    0%, 100% { 
      transform: translateX(-50%) rotateZ(0deg);
    }
    50% { 
      transform: translateX(-50%) rotateZ(0.5deg);
    }
  }

  /* Blue Pulsing Circles */
  .pulse-circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .pulse-circle {
    position: absolute;
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 50%;
    animation: expandPulse 8s ease-out infinite;
  }

  .pulse-circle:nth-child(1) {
    top: 20%;
    left: 20%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
  }

  .pulse-circle:nth-child(2) {
    top: 60%;
    right: 25%;
    width: 80px;
    height: 80px;
    animation-delay: -2s;
  }

  .pulse-circle:nth-child(3) {
    bottom: 30%;
    left: 60%;
    width: 60px;
    height: 60px;
    animation-delay: -4s;
  }

  @keyframes expandPulse {
    0% {
      transform: scale(0.5);
      opacity: 0.8;
    }
    50% {
      transform: scale(2);
      opacity: 0.2;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  /* Floating Blue Particles */
  .blue-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .blue-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(59, 130, 246, 0.6);
    border-radius: 50%;
    animation: floatUp 12s linear infinite;
  }

  .blue-particle:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
    animation-duration: 14s;
  }

  .blue-particle:nth-child(2) {
    left: 30%;
    animation-delay: -3s;
    animation-duration: 16s;
  }

  .blue-particle:nth-child(3) {
    left: 60%;
    animation-delay: -6s;
    animation-duration: 18s;
  }

  .blue-particle:nth-child(4) {
    left: 80%;
    animation-delay: -9s;
    animation-duration: 12s;
  }

  @keyframes floatUp {
    0% {
      bottom: -10px;
      opacity: 0;
      transform: translateX(0px);
    }
    10% {
      opacity: 0.6;
    }
    90% {
      opacity: 0.6;
    }
    100% {
      bottom: 100vh;
      opacity: 0;
      transform: translateX(30px);
    }
  }

  /* Subtle Blue Glow */
  .ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.03) 0%,
      rgba(59, 130, 246, 0.01) 60%,
      transparent 100%
    );
    animation: breathe 10s ease-in-out infinite;
  }

  @keyframes breathe {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.8;
    }
  }
`;

// Option 1: Floating Geometric Particles
export const FloatingParticles = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 50vh;
  z-index: -1;
  overflow: hidden;
  background: #0a0a0a;

  .particle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    animation: float 8s ease-in-out infinite;
    opacity: 0.7;
  }

  .particle1 { width: 20px; height: 20px; top: 10%; left: 15%; animation-delay: 0s; }
  .particle2 { width: 15px; height: 15px; top: 30%; left: 60%; animation-delay: -2s; }
  .particle3 { width: 25px; height: 25px; top: 60%; left: 20%; animation-delay: -4s; }
  .particle4 { width: 18px; height: 18px; top: 80%; left: 70%; animation-delay: -6s; }
  .particle5 { width: 22px; height: 22px; top: 20%; left: 80%; animation-delay: -1s; }
  .particle6 { width: 16px; height: 16px; top: 50%; left: 10%; animation-delay: -3s; }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
    25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
    50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
    75% { transform: translateY(-20px) rotate(270deg); opacity: 1; }
  }

  .connection-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.5), transparent);
    animation: pulse 4s ease-in-out infinite;
  }

  .line1 { width: 30%; top: 25%; left: 20%; animation-delay: 0s; }
  .line2 { width: 40%; top: 65%; left: 15%; animation-delay: -2s; }

  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scaleX(1); }
    50% { opacity: 1; transform: scaleX(1.2); }
  }
`;

// Option 2: Matrix-style Code Rain
export const MatrixRain = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 50vh;
  z-index: -1;
  overflow: hidden;
  background: #0a0a0a;

  .rain-column {
    position: absolute;
    top: -100%;
    color: #00ff41;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    animation: rain 4s linear infinite;
    opacity: 0.8;
  }

  .column1 { left: 10%; animation-delay: 0s; }
  .column2 { left: 25%; animation-delay: -1s; }
  .column3 { left: 40%; animation-delay: -2s; }
  .column4 { left: 55%; animation-delay: -0.5s; }
  .column5 { left: 70%; animation-delay: -1.5s; }
  .column6 { left: 85%; animation-delay: -2.5s; }

  @keyframes rain {
    0% { top: -100%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  .matrix-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 255, 65, 0.1), transparent);
    animation: glow 3s ease-in-out infinite alternate;
  }

  @keyframes glow {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

// Option 3: Cyberpunk Neon Grid
export const CyberpunkGrid = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 50vh;
  z-index: -1;
  overflow: hidden;
  background: #0a0a0a;
  perspective: 1000px;

  .grid-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateX(45deg);
  }

  .grid-line {
    position: absolute;
    background: linear-gradient(90deg, transparent, #ff0080, transparent);
    opacity: 0.6;
    animation: gridScan 3s ease-in-out infinite;
  }

  .horizontal-line {
    width: 100%;
    height: 2px;
  }

  .vertical-line {
    width: 2px;
    height: 100%;
  }

  .h1 { top: 20%; animation-delay: 0s; }
  .h2 { top: 40%; animation-delay: -1s; }
  .h3 { top: 60%; animation-delay: -2s; }
  .h4 { top: 80%; animation-delay: -0.5s; }

  .v1 { left: 20%; animation-delay: -1.5s; }
  .v2 { left: 40%; animation-delay: -2.5s; }
  .v3 { left: 60%; animation-delay: -0.8s; }
  .v4 { left: 80%; animation-delay: -1.8s; }

  @keyframes gridScan {
    0%, 100% { opacity: 0.3; box-shadow: none; }
    50% { opacity: 1; box-shadow: 0 0 20px #ff0080; }
  }

  .neon-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .neon-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ffff;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ffff;
    animation: neonPulse 2s ease-in-out infinite;
  }

  .dot1 { top: 20%; left: 20%; animation-delay: 0s; }
  .dot2 { top: 40%; left: 60%; animation-delay: -1s; }
  .dot3 { top: 80%; left: 40%; animation-delay: -0.5s; }

  @keyframes neonPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }
`;

// Option 4: Liquid Morphing Shapes
export const LiquidMorph = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 50vh;
  z-index: -1;
  overflow: hidden;
  background: #0a0a0a;

  .liquid-blob {
    position: absolute;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 50%;
    filter: blur(20px);
    animation: liquidMorph 8s ease-in-out infinite;
    opacity: 0.7;
  }

  .blob1 {
    width: 200px;
    height: 200px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .blob2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 20%;
    background: linear-gradient(45deg, #f093fb, #f5576c);
    animation-delay: -4s;
  }

  .blob3 {
    width: 180px;
    height: 180px;
    top: 40%;
    left: 60%;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    animation-delay: -2s;
  }

  @keyframes liquidMorph {
    0%, 100% {
      border-radius: 50% 50% 50% 50%;
      transform: rotate(0deg) scale(1);
    }
    25% {
      border-radius: 60% 40% 70% 30%;
      transform: rotate(90deg) scale(1.1);
    }
    50% {
      border-radius: 30% 70% 40% 60%;
      transform: rotate(180deg) scale(0.9);
    }
    75% {
      border-radius: 70% 30% 50% 50%;
      transform: rotate(270deg) scale(1.05);
    }
  }

  .ripple-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ripple 4s ease-out infinite;
  }

  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;

// Option 5: DNA Helix Animation
export const DNAHelix = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 50vh;
  z-index: -1;
  overflow: hidden;
  background: #0a0a0a;

  .helix-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 400px;
    transform: translate(-50%, -50%);
    animation: rotate3D 20s linear infinite;
  }

  .helix-strand {
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    border-radius: 2px;
    animation: wave 4s ease-in-out infinite;
  }

  .strand1 {
    left: 40%;
    animation-delay: 0s;
  }

  .strand2 {
    right: 40%;
    animation-delay: -2s;
  }

  .connector {
    position: absolute;
    width: 120px;
    height: 2px;
    background: rgba(255, 255, 255, 0.4);
    left: 50%;
    transform: translateX(-50%);
    animation: connect 2s ease-in-out infinite;
  }

  .conn1 { top: 20%; animation-delay: 0s; }
  .conn2 { top: 40%; animation-delay: -0.5s; }
  .conn3 { top: 60%; animation-delay: -1s; }
  .conn4 { top: 80%; animation-delay: -1.5s; }

  @keyframes rotate3D {
    0% { transform: translate(-50%, -50%) rotateY(0deg); }
    100% { transform: translate(-50%, -50%) rotateY(360deg); }
  }

  @keyframes wave {
    0%, 100% { transform: translateX(0px); }
    50% { transform: translateX(20px); }
  }

  @keyframes connect {
    0%, 100% { opacity: 0.4; width: 120px; }
    50% { opacity: 1; width: 140px; }
  }

  .particle-system {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dna-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #4ecdc4;
    border-radius: 50%;
    animation: orbit 6s linear infinite;
  }

  .particle1 { top: 30%; left: 20%; animation-delay: 0s; }
  .particle2 { top: 70%; left: 80%; animation-delay: -3s; }

  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
  }
`;

// Usage Component to demonstrate all options
export const BackgroundShowcase = styled.div`
  .option-container {
    margin-bottom: 50px;
    border: 2px solid #333;
    position: relative;
    height: 300px;
  }
  
  .option-title {
    color: white;
    text-align: center;
    padding: 10px;
    background: #333;
    margin: 0;
  }
`;