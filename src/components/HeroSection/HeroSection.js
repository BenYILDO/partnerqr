import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQrcode, FaMobile, FaChartLine, FaUsers, FaStar, FaPlay } from 'react-icons/fa';
import BeamsBackground from '../BeamsBackground';

const HeroContainer = styled.section`
  min-height: 100vh;
  background: var(--background-primary);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-hero);
    pointer-events: none;
  }
`;



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  color: var(--text-primary);
  position: relative;
  z-index: 2;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 122, 255, 0.08);
  border: 1px solid rgba(0, 122, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-full);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  color: var(--primary-accent);
  backdrop-filter: blur(20px);
  font-weight: 500;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.07143;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  letter-spacing: -0.005em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  .highlight {
    color: var(--primary-accent);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.47059;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: -0.003em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-accent);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-full);
  font-weight: 500;
  font-size: 1.1rem;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
  letter-spacing: -0.003em;

  &:hover {
    background: #0056cc;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: 1px solid var(--border-medium);
  border-radius: var(--border-radius-full);
  font-weight: 500;
  transition: all var(--transition-normal);
  background: var(--background-primary);
  letter-spacing: -0.003em;

  &:hover {
    border-color: var(--primary-accent);
    color: var(--primary-accent);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PhoneFrame = styled(motion.div)`
  width: 300px;
  height: 600px;
  background: linear-gradient(145deg, #2C2C2C, #1A1A1A);
  border-radius: 30px;
  padding: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #666;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="80" height="8" x="10" y="20" fill="%23fff" opacity="0.3" rx="4"/><rect width="60" height="8" x="10" y="35" fill="%23fff" opacity="0.2" rx="4"/><rect width="70" height="8" x="10" y="50" fill="%23fff" opacity="0.3" rx="4"/><circle cx="20" cy="70" r="8" fill="%23fff" opacity="0.2"/><rect width="50" height="6" x="35" y="67" fill="%23fff" opacity="0.2" rx="3"/><rect width="40" height="6" x="35" y="77" fill="%23fff" opacity="0.1" rx="3"/></svg>') repeat;
    background-size: 100px 100px;
    opacity: 0.1;
  }
`;

const QRCode = styled(motion.div)`
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--primary-dark);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: var(--primary-accent);
  font-size: 1.5rem;
  opacity: 0.3;
`;



const TrustBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--text-tertiary);
  font-size: 0.9rem;
  font-weight: 400;

  .stars {
    display: flex;
    gap: 0.2rem;
    color: var(--warning);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <BeamsBackground />
      <Container>
        <HeroContent>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaStar />
            #1 QR Menü Çözümü
          </Badge>

          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            İşletmenizi
            <br />
            <span className="highlight">Dijital Çağa</span> Taşıyın
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Partner Innovation Technologies ile premium QR menü çözümleri. 
            Müşterilerinize temassız, hızlı ve etkileyici menü deneyimi sunun.
          </HeroSubtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <PrimaryButton to="/admin">
              Hemen Başlayın
              <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/demo">
              <FaPlay />
              Demo İzleyin
            </SecondaryButton>
          </ButtonGroup>

          <TrustBadge
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            500+ mutlu müşteri tarafından tercih ediliyor
          </TrustBadge>
        </HeroContent>

        <HeroVisual>
          <PhoneFrame
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <PhoneScreen>
              <QRCode
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
              >
                📱
              </QRCode>
            </PhoneScreen>
          </PhoneFrame>

          <FloatingElements>
            <FloatingIcon
              style={{ top: '10%', left: '10%' }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🍽️
            </FloatingIcon>
            <FloatingIcon
              style={{ top: '20%', right: '10%' }}
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ⭐
            </FloatingIcon>
            <FloatingIcon
              style={{ bottom: '20%', left: '5%' }}
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              📊
            </FloatingIcon>
          </FloatingElements>
        </HeroVisual>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;