import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCheck, FaStar, FaCrown, FaRocket } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: ${props => props.$popular 
    ? 'var(--gradient-card)' 
    : 'var(--gradient-card)'};
  border: ${props => props.$popular 
    ? '1px solid var(--primary-accent)' 
    : '1px solid var(--border-light)'};
  border-radius: var(--border-radius-2xl);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(20px);
  cursor: pointer;
  box-shadow: ${props => props.$popular 
    ? 'var(--shadow-accent), var(--shadow-glass)' 
    : 'var(--shadow-glass)'};
  
  @media (max-width: 1024px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.8s ease;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$popular 
      ? 'var(--gradient-primary)' 
      : 'var(--gradient-glass)'};
    opacity: ${props => props.$popular ? '0.05' : '0'};
    transition: all var(--transition-normal);
    pointer-events: none;
    border-radius: var(--border-radius-2xl);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: ${props => props.$popular 
      ? 'var(--secondary-accent)' 
      : 'var(--primary-accent)'};
    box-shadow: ${props => props.$popular 
      ? 'var(--shadow-accent), var(--shadow-glass), 0 25px 50px -12px rgba(10, 132, 255, 0.3)' 
      : 'var(--shadow-accent), var(--shadow-glass), 0 20px 40px -12px rgba(0, 0, 0, 0.25)'};
    
    &::before {
      left: 100%;
    }

    &::after {
      opacity: ${props => props.$popular ? '0.1' : '0.05'};
    }
  }

  &:active {
    transform: translateY(-4px) scale(0.98);
  }
`;

const PopularBadge = styled(motion.div)`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-accent);
  color: var(--text-light);
  padding: 0.5rem 1.25rem;
  border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: var(--shadow-sm);
  z-index: 2;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.7rem;
  }

  svg {
    animation: sparkle 2s infinite;
  }

  @keyframes sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.05) rotate(180deg); }
  }
`;

const PlanIcon = styled.div`
  width: 56px;
  height: 56px;
  background: ${props => props.$popular 
    ? 'var(--gradient-primary)' 
    : 'var(--background-secondary)'};
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$popular 
    ? 'var(--text-light)' 
    : 'var(--primary-accent)'};
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
  border: ${props => props.$popular 
    ? 'none' 
    : '1px solid var(--border-light)'};
  transition: all var(--transition-normal);
  box-shadow: ${props => props.$popular 
    ? 'var(--shadow-accent)' 
    : 'var(--shadow-sm)'};
  
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
    margin-bottom: 0.875rem;
  }

  ${Card}:hover & {
    transform: scale(1.05) rotate(3deg);
    box-shadow: ${props => props.$popular 
      ? 'var(--shadow-accent), var(--shadow-md)' 
      : 'var(--shadow-accent)'};
  }
`;

const PlanName = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const PlanDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 1.25rem;
  }
`;

const PriceContainer = styled.div`
  margin-bottom: 1.75rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
  margin-bottom: 0.5rem;
`;

const PriceAmount = styled.span`
  font-size: 2.75rem;
  font-weight: 700;
  color: ${props => props.$popular 
    ? 'var(--primary-accent)' 
    : 'var(--text-primary)'};
  line-height: 1;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 2.375rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.125rem;
  }
`;

const PriceCurrency = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-secondary);
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PricePeriod = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PriceNote = styled.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
  
  @media (max-width: 768px) {
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0;
  color: var(--text-primary);
  font-size: 0.875rem;
  border-bottom: 1px solid var(--border-light);
  transition: all var(--transition-normal);
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.4rem 0;
    gap: 0.6rem;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--primary-accent);
    transform: translateX(3px);
  }

  svg {
    color: var(--primary-accent);
    font-size: 0.75rem;
    flex-shrink: 0;
    
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

const CTAButton = styled(motion.button)`
  background: ${props => props.$popular 
    ? 'var(--gradient-primary)' 
    : 'var(--background-secondary)'};
  border: ${props => props.$popular 
    ? 'none' 
    : '1px solid var(--border-light)'};
  color: ${props => props.$popular 
    ? 'var(--text-light)' 
    : 'var(--text-primary)'};
  padding: 0.875rem 1.75rem;
  border-radius: var(--border-radius-xl);
  font-weight: 600;
  font-size: 0.9rem;
  width: 100%;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.$popular 
    ? 'var(--shadow-accent)' 
    : 'var(--shadow-sm)'};
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.875rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.$popular 
      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' 
      : 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)'};
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${props => props.$popular 
      ? 'var(--secondary-accent)' 
      : 'var(--primary-accent)'};
    border-color: ${props => props.$popular 
      ? 'var(--secondary-accent)' 
      : 'var(--primary-accent)'};
    color: ${props => props.$popular 
      ? 'var(--text-light)' 
      : 'var(--text-light)'};
    box-shadow: ${props => props.$popular 
      ? 'var(--shadow-accent), var(--shadow-md)' 
      : 'var(--shadow-accent), var(--shadow-md)'};
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const PricingCard = ({ plan, onSelectPlan }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const getIcon = (planName) => {
    switch (planName.toLowerCase()) {
      case 'başlangıç':
        return <FaRocket />;
      case 'profesyonel':
        return <FaStar />;
      case 'premium':
        return <FaCrown />;
      default:
        return <FaRocket />;
    }
  };

  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      $popular={plan.popular}
    >
      {plan.popular && (
        <PopularBadge
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FaStar />
          En Popüler
        </PopularBadge>
      )}

      <PlanIcon $popular={plan.popular}>
        {getIcon(plan.name)}
      </PlanIcon>

      <PlanName>{plan.name}</PlanName>
      <PlanDescription>{plan.description}</PlanDescription>

      <PriceContainer>
        <Price>
          <PriceAmount $popular={plan.popular}>
            {plan.price === 0 ? 'Ücretsiz' : `₺${plan.price}`}
          </PriceAmount>
          {plan.price > 0 && (
            <>
              <PriceCurrency>TL</PriceCurrency>
              <PricePeriod>/{plan.period}</PricePeriod>
            </>
          )}
        </Price>
        {plan.originalPrice && (
          <PriceNote>
            Normal fiyat: ₺{plan.originalPrice}/{plan.period}
          </PriceNote>
        )}
      </PriceContainer>

      <FeaturesList>
        {plan.features.map((feature, index) => (
          <FeatureItem
            key={index}
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <FaCheck />
            {feature}
          </FeatureItem>
        ))}
      </FeaturesList>

      <CTAButton
        $popular={plan.popular}
        onClick={() => onSelectPlan(plan.name, plan.price, plan.period)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {plan.price === 0 ? 'Ücretsiz Başla' : 'Planı Seç'}
      </CTAButton>
    </Card>
  );
};

export default PricingCard;