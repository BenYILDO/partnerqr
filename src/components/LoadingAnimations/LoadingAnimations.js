import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// Wave animation
const wave = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-15px);
  }
`;

// Skeleton Base
const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    var(--gray-200) 25%,
    var(--gray-300) 37%,
    var(--gray-200) 63%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: var(--border-radius-md);
`;

// Loading Spinner
const SpinnerContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid var(--gray-300);
  border-top: 3px solid var(--primary-accent);
  border-radius: 50%;
`;

// Dots Loading
const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
`;

const Dot = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: var(--primary-accent);
  border-radius: 50%;
`;

// Wave Loading
const WaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 2rem;
`;

const WaveBar = styled.div`
  width: 4px;
  height: 20px;
  background: var(--primary-accent);
  border-radius: 2px;
  animation: ${wave} 1.2s ease-in-out infinite;
  
  &:nth-child(1) { animation-delay: -1.1s; }
  &:nth-child(2) { animation-delay: -1.0s; }
  &:nth-child(3) { animation-delay: -0.9s; }
  &:nth-child(4) { animation-delay: -0.8s; }
  &:nth-child(5) { animation-delay: -0.7s; }
`;

// Skeleton Components
const SkeletonText = styled(SkeletonBase)`
  height: ${props => props.height || '1rem'};
  width: ${props => props.width || '100%'};
  margin-bottom: ${props => props.marginBottom || '0.5rem'};
`;

const SkeletonCard = styled(SkeletonBase)`
  height: ${props => props.height || '200px'};
  width: 100%;
  margin-bottom: 1rem;
`;

const SkeletonAvatar = styled(SkeletonBase)`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: 50%;
`;

const SkeletonButton = styled(SkeletonBase)`
  height: 40px;
  width: ${props => props.width || '120px'};
  border-radius: var(--border-radius-lg);
`;

// Pulse Loading
const PulseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const PulseCircle = styled.div`
  width: 60px;
  height: 60px;
  background: var(--primary-accent);
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

// Loading Components
export const LoadingSpinner = () => (
  <SpinnerContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Spinner
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </SpinnerContainer>
);

export const LoadingDots = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 }
  };

  return (
    <DotsContainer>
      {[0, 1, 2].map((index) => (
        <Dot
          key={index}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        />
      ))}
    </DotsContainer>
  );
};

export const LoadingWave = () => (
  <WaveContainer>
    {[1, 2, 3, 4, 5].map((index) => (
      <WaveBar key={index} />
    ))}
  </WaveContainer>
);

export const LoadingPulse = () => (
  <PulseContainer>
    <PulseCircle />
  </PulseContainer>
);

// Skeleton Screens
export const SkeletonCardGrid = ({ count = 3 }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} style={{ padding: '1rem' }}>
        <SkeletonCard height="200px" />
        <SkeletonText width="80%" height="1.5rem" />
        <SkeletonText width="60%" height="1rem" />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <SkeletonButton width="100px" />
          <SkeletonButton width="80px" />
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonProfile = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
    <SkeletonAvatar size="60px" />
    <div style={{ flex: 1 }}>
      <SkeletonText width="40%" height="1.25rem" marginBottom="0.5rem" />
      <SkeletonText width="60%" height="1rem" marginBottom="0.5rem" />
      <SkeletonText width="30%" height="0.875rem" />
    </div>
  </div>
);

export const SkeletonMenu = () => (
  <div style={{ padding: '1rem' }}>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        <SkeletonCard height="80px" style={{ width: '80px', marginBottom: 0 }} />
        <div style={{ flex: 1 }}>
          <SkeletonText width="70%" height="1.25rem" marginBottom="0.5rem" />
          <SkeletonText width="90%" height="1rem" marginBottom="0.5rem" />
          <SkeletonText width="40%" height="1.125rem" />
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonStats = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} style={{ textAlign: 'center', padding: '2rem' }}>
        <SkeletonText width="60%" height="2rem" marginBottom="1rem" style={{ margin: '0 auto 1rem' }} />
        <SkeletonText width="80%" height="1rem" style={{ margin: '0 auto' }} />
      </div>
    ))}
  </div>
);

// Advanced Loading with Text
const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
`;

const LoadingText = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 500;
`;

export const LoadingWithText = ({ text = "Yükleniyor..." }) => (
  <LoadingContainer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <LoadingSpinner />
    <LoadingText
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {text}
    </LoadingText>
  </LoadingContainer>
);

// Page Loading Overlay
const OverlayContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background-overlay);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`;

export const PageLoadingOverlay = ({ text = "Sayfa yükleniyor..." }) => (
  <OverlayContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <LoadingWithText text={text} />
  </OverlayContainer>
);

export default {
  LoadingSpinner,
  LoadingDots,
  LoadingWave,
  LoadingPulse,
  LoadingWithText,
  PageLoadingOverlay,
  SkeletonCardGrid,
  SkeletonProfile,
  SkeletonMenu,
  SkeletonStats
};