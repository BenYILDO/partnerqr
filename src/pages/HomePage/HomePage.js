import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  FaQrcode, 
  FaMobile, 
  FaChartLine, 
  FaUsers, 
  FaStar, 
  FaShieldAlt, 
  FaHeadset, 
  FaRocket, 
  FaCog, 
  FaArrowRight
} from 'react-icons/fa';
import HeroSection from '../../components/HeroSection/HeroSection';
import PricingCard from '../../components/PricingCard/PricingCard';
import ContactModal from '../../components/ContactModal/ContactModal';
import FloatingActions from '../../components/FloatingActions/FloatingActions';
import { 
  FloatingShapes, 
  StaggerContainer, 
  StaggerItem
} from '../../components/ParallaxEffects/ParallaxEffects';
import { 
  HoverCard3D, 
  FloatingAnimation,
  ParticleSystem 
} from '../../components/3DEffects/3DEffects';


const PageContainer = styled(motion.div)`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--background-primary);
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  
  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

const Section = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: var(--background-primary);
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
  
  &.dark {
    background: var(--background-secondary);
    color: var(--text-on-dark);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-mesh);
      pointer-events: none;
    }
  }
  
  &.features {
    background: var(--background-secondary);
    
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
  }
  
  &.glass {
    background: var(--background-glass);
    backdrop-filter: blur(20px);
    border-top: 1px solid var(--border-glass);
    border-bottom: 1px solid var(--border-glass);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--background-glass);
  border: 1px solid var(--border-glass);
  color: var(--primary-accent);
  padding: 0.625rem 1.25rem;
  border-radius: var(--border-radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: all var(--transition-normal);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-inset);
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }

  &:hover {
    background: rgba(10, 132, 255, 0.15);
    border-color: var(--primary-accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow-accent), var(--shadow-inset);
  }

  svg {
    font-size: 0.875rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .highlight {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const EnhancedFeatureCard = styled(motion.div)`
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-2xl);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(20px);
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-glass);
    opacity: 0;
    transition: all var(--transition-normal);
    border-radius: var(--border-radius-2xl);
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: var(--primary-accent);
    box-shadow: 
      var(--shadow-accent), 
      var(--shadow-glass),
      0 25px 50px -12px rgba(10, 132, 255, 0.25);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }

    .feature-icon {
      transform: scale(1.15) rotate(10deg);
      background: var(--gradient-primary);
      border-color: var(--primary-accent);
      box-shadow: var(--shadow-accent);
      
      svg {
        color: var(--text-light);
        filter: drop-shadow(0 4px 8px rgba(10, 132, 255, 0.3));
      }
    }
  }

  &:active {
    transform: translateY(-8px) scale(0.98);
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: var(--background-glass);
  border: 2px solid var(--border-glass);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-inset);
  
  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    margin-bottom: 1.25rem;
  }

  svg {
    font-size: 1.75rem;
    color: var(--primary-accent);
    transition: all var(--transition-normal);
    filter: drop-shadow(0 0 8px rgba(10, 132, 255, 0.3));
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.625rem;
  }
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 2rem;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 2rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-2xl);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-glass);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary-accent);
    box-shadow: var(--shadow-accent), var(--shadow-glass);

    &::before {
      opacity: 1;
    }
  }

  h3 {
    font-size: 2.75rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    line-height: 1.1;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.25rem;
    }
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 500;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-2xl);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0.5;
    pointer-events: none;
  }

  h2 {
    font-size: 2.75rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--gradient-primary);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-full);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all var(--transition-normal);
  position: relative;
  z-index: 2;
  overflow: hidden;
  box-shadow: var(--shadow-accent);
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-accent), var(--shadow-lg);
    background: var(--gradient-secondary);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: translateX(3px);
    }
  }

  svg {
    transition: transform var(--transition-normal);
  }
`;

const HomePage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    setSelectedPlan(null);
  };



  const pricingPlans = [
    {
      name: "Başlangıç",
      description: "Küçük işletmeler için ideal başlangıç paketi",
      price: 299,
      period: "ay",
      features: [
        "1 Restoran",
        "50 Menü Öğesi",
        "Temel Analitik",
        "QR Kod Oluşturma",
        "E-posta Desteği"
      ],
      popular: false
    },
    {
      name: "Profesyonel",
      description: "Büyüyen işletmeler için gelişmiş özellikler",
      price: 599,
      period: "ay",
      originalPrice: 799,
      features: [
        "3 Restoran",
        "Sınırsız Menü Öğesi",
        "Gelişmiş Analitik",
        "Sipariş Yönetimi",
        "Öncelikli Destek"
      ],
      popular: true
    },
    {
      name: "Premium",
      description: "Kurumsal çözümler ve premium destek",
      price: 999,
      period: "ay",
      features: [
        "Sınırsız Restoran",
        "Sınırsız Menü Öğesi",
        "Premium Analitik",
        "API Entegrasyonu",
        "7/24 Destek"
      ],
      popular: false
    }
  ];



  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ParticleSystem particleCount={50} />
      <FloatingShapes />
      <HeroSection />

      <Section className="features">
        <Container>
          <SectionHeader>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaRocket />
              Özellikler
            </Badge>
            
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Neden <span className="highlight">Partner QR</span>?
            </SectionTitle>
            
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Restoran işletmenizi dijital çağa taşıyan premium özellikler ve 
              müşteri deneyimini artıracak yenilikçi çözümler.
            </SectionSubtitle>
          </SectionHeader>

          <StaggerContainer staggerDelay={0.15}>
            <FeaturesGrid>
              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={0}>
                    <FeatureIcon className="feature-icon">
                      <FaQrcode />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>QR Kod Menü</FeatureTitle>
                  <FeatureDescription>Müşterileriniz QR kodu tarayarak anında menünüze erişebilir. Fiziksel menü maliyetlerini sıfırlayın.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={0.5}>
                    <FeatureIcon className="feature-icon">
                      <FaMobile />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Mobil Uyumlu Tasarım</FeatureTitle>
                  <FeatureDescription>Tüm cihazlarda mükemmel görünen responsive menü tasarımları. Her ekran boyutunda optimal deneyim.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={1}>
                    <FeatureIcon className="feature-icon">
                      <FaChartLine />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Detaylı Analitik</FeatureTitle>
                  <FeatureDescription>Müşteri davranışlarını analiz edin, satış trendlerini takip edin ve işletmenizi büyütün.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={1.5}>
                    <FeatureIcon className="feature-icon">
                      <FaUsers />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Çoklu Dil Desteği</FeatureTitle>
                  <FeatureDescription>Farklı dillerde menü seçenekleri ile uluslararası müşterilerinize hitap edin.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={2}>
                    <FeatureIcon className="feature-icon">
                      <FaStar />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Özelleştirilebilir Tasarım</FeatureTitle>
                  <FeatureDescription>Markanıza uygun renkler, logolar ve tasarım elementleri ile menünüzü kişiselleştirin.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={2.5}>
                    <FeatureIcon className="feature-icon">
                      <FaRocket />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Hızlı Kurulum</FeatureTitle>
                  <FeatureDescription>5 dakikada kurulum tamamlanır. Anında kullanmaya başlayın, teknik bilgi gerektirmez.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={3}>
                    <FeatureIcon className="feature-icon">
                      <FaCog />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Bulut Tabanlı</FeatureTitle>
                  <FeatureDescription>Verileriniz güvenli bulut sunucularında saklanır. Her yerden erişim imkanı.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={3.5}>
                    <FeatureIcon className="feature-icon">
                      <FaHeadset />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>7/24 Destek</FeatureTitle>
                  <FeatureDescription>Uzman ekibimiz her zaman yanınızda. WhatsApp, telefon ve e-posta desteği.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>

              <StaggerItem>
                <EnhancedFeatureCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FloatingAnimation intensity={6} duration={4} delay={4}>
                    <FeatureIcon className="feature-icon">
                      <FaShieldAlt />
                    </FeatureIcon>
                  </FloatingAnimation>
                  <FeatureTitle>Güvenli Altyapı</FeatureTitle>
                  <FeatureDescription>SSL sertifikası ve güvenli ödeme altyapısı ile müşteri bilgileri korunur.</FeatureDescription>
                </EnhancedFeatureCard>
              </StaggerItem>
            </FeaturesGrid>
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="dark" id="stats">
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Rakamlarla <span className="highlight">Partner QR</span>
          </SectionTitle>

          <StatsSection>
            <HoverCard3D rotationIntensity={10} scaleOnHover={1.1} glowEffect={true}>
              <StatCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FloatingAnimation intensity={6} duration={3} delay={0}>
                  <h3>10K+</h3>
                </FloatingAnimation>
                <p>Mutlu Müşteri</p>
              </StatCard>
            </HoverCard3D>
            <HoverCard3D rotationIntensity={10} scaleOnHover={1.1} glowEffect={true}>
              <StatCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FloatingAnimation intensity={6} duration={3} delay={0.5}>
                  <h3>50K+</h3>
                </FloatingAnimation>
                <p>QR Kod Taraması</p>
              </StatCard>
            </HoverCard3D>
            <HoverCard3D rotationIntensity={10} scaleOnHover={1.1} glowEffect={true}>
              <StatCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FloatingAnimation intensity={6} duration={3} delay={1}>
                  <h3>99.9%</h3>
                </FloatingAnimation>
                <p>Uptime Garantisi</p>
              </StatCard>
            </HoverCard3D>
            <HoverCard3D rotationIntensity={10} scaleOnHover={1.1} glowEffect={true}>
              <StatCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FloatingAnimation intensity={6} duration={3} delay={1.5}>
                  <h3>24/7</h3>
                </FloatingAnimation>
                <p>Teknik Destek</p>
              </StatCard>
            </HoverCard3D>
          </StatsSection>
        </Container>
      </Section>

      <Section id="pricing">
        <Container>
          <SectionHeader>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaCog />
              Fiyatlandırma
            </Badge>
            
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="highlight">Esnek</span> Paketler
            </SectionTitle>
            
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              İşletmenizin büyüklüğüne uygun esnek paketler. 
              14 gün ücretsiz deneme ile başlayın.
            </SectionSubtitle>
          </SectionHeader>

          <PricingGrid>
            {pricingPlans.map((plan, index) => (
              <HoverCard3D 
                key={index}
                rotationIntensity={15} 
                scaleOnHover={1.08} 
                glowEffect={true}
              >
                <PricingCard
                  plan={plan}
                  onSelectPlan={handleSelectPlan}
                />
              </HoverCard3D>
            ))}
          </PricingGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Hemen Başlayın!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              14 gün ücretsiz deneme ile Partner QR'ın gücünü keşfedin. 
              Kredi kartı bilgisi gerektirmez.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CTAButton to="/demo">
                Hemen Başlayın
                <FaArrowRight />
              </CTAButton>
            </motion.div>
          </CTASection>
        </Container>
      </Section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        selectedPlan={selectedPlan}
      />
      
      <FloatingActions />
    </PageContainer>
  );
};

export default HomePage;