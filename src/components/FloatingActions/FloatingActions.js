import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowUp, FaWhatsapp, FaPhone, FaEnvelope, FaPlus, FaTimes } from 'react-icons/fa';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: var(--z-tooltip);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const FloatingButton = styled(motion.button)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--gradient-primary);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
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
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-accent), var(--shadow-xl);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ScrollToTopButton = styled(FloatingButton)`
  background: var(--background-glass);
  border: 1px solid var(--border-glass);
  color: var(--primary-accent);
  
  &:hover {
    background: var(--primary-accent);
    color: var(--text-light);
    border-color: var(--primary-accent);
  }
`;

const ContactButton = styled(FloatingButton)`
  width: 48px;
  height: 48px;
  font-size: 1.1rem;
  
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }

  &.whatsapp {
    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  }

  &.phone {
    background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
  }

  &.email {
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  }
`;

const MainActionButton = styled(FloatingButton)`
  width: 64px;
  height: 64px;
  font-size: 1.5rem;
  background: var(--gradient-primary);
  
  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    font-size: 1.3rem;
  }
`;

const ContactMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
`;

const ButtonLabel = styled(motion.div)`
  background: var(--background-glass);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 1rem;
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-right: 0.75rem;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleContact = (type) => {
    switch (type) {
      case 'whatsapp':
        window.open('https://wa.me/905555555555', '_blank');
        break;
      case 'phone':
        window.open('tel:+905555555555', '_blank');
        break;
      case 'email':
        window.open('mailto:info@partner-qr.com', '_blank');
        break;
      default:
        break;
    }
    setShowContactMenu(false);
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0,
      rotate: 180,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1
    },
    exit: { 
      opacity: 0, 
      x: 20,
      scale: 0.8
    }
  };

  return (
    <FloatingContainer>
      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </ScrollToTopButton>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContactMenu && (
          <ContactMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ContactItem variants={itemVariants}>
              <ButtonLabel>WhatsApp</ButtonLabel>
              <ContactButton
                className="whatsapp"
                onClick={() => handleContact('whatsapp')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </ContactButton>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <ButtonLabel>Telefon</ButtonLabel>
              <ContactButton
                className="phone"
                onClick={() => handleContact('phone')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPhone />
              </ContactButton>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <ButtonLabel>E-posta</ButtonLabel>
              <ContactButton
                className="email"
                onClick={() => handleContact('email')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </ContactButton>
            </ContactItem>
          </ContactMenu>
        )}
      </AnimatePresence>

      <MainActionButton
        onClick={() => setShowContactMenu(!showContactMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: showContactMenu ? 45 : 0 }}
      >
        {showContactMenu ? <FaTimes /> : <FaPlus />}
      </MainActionButton>
    </FloatingContainer>
  );
};

export default FloatingActions;