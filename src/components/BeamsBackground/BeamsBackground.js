import React from 'react';
import styled, { keyframes } from 'styled-components';

const beamAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(0.8);
  }
`;

const BeamsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Beam = styled.div`
  position: absolute;
  width: 2px;
  height: 200px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(99, 102, 241, 0.4) 50%,
    transparent 100%
  );
  animation: ${beamAnimation} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  filter: blur(1px);
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

const FloatingOrb = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(99, 102, 241, 0.05) 50%,
    transparent 100%
  );
  animation: float ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top}%;
  left: ${props => props.left}%;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

const BeamsBackground = () => {
  const beams = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 5,
  }));

  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 60 + Math.random() * 100,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 3,
  }));

  return (
    <BeamsContainer>
      <GridOverlay />
      
      {beams.map(beam => (
        <Beam
          key={beam.id}
          left={beam.left}
          duration={beam.duration}
          delay={beam.delay}
        />
      ))}
      
      {orbs.map(orb => (
        <FloatingOrb
          key={orb.id}
          size={orb.size}
          top={orb.top}
          left={orb.left}
          duration={orb.duration}
          delay={orb.delay}
        />
      ))}
    </BeamsContainer>
  );
};

export default BeamsBackground;