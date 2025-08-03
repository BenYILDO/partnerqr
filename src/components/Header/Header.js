import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaQrcode, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  background: ${props => props.$scrolled 
    ? 'rgba(0, 0, 0, 0.95)' 
    : 'rgba(0, 0, 0, 0.85)'};
  backdrop-filter: blur(20px);
  border-bottom: ${props => props.$scrolled 
    ? '1px solid var(--border-glass)' 
    : '1px solid rgba(255, 255, 255, 0.05)'};
  transition: all var(--transition-normal);
  padding: 0;
  box-shadow: ${props => props.$scrolled 
    ? 'var(--shadow-glass)' 
    : 'none'};
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: 65px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-light);
  text-decoration: none;
  transition: var(--transition-normal);
  z-index: 1001;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  font-size: 1.2rem;
  box-shadow: var(--shadow-accent);
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
`;

const LogoText = styled.span`
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-light);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  transition: var(--transition-normal);
  position: relative;
  
  &:hover {
    color: var(--primary-accent);
    background: var(--background-glass);
    transform: translateY(-2px);
    box-shadow: var(--shadow-inset);
  }
  
  &.active {
    color: var(--primary-accent);
    background: rgba(10, 132, 255, 0.15);
    box-shadow: var(--shadow-inset);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: var(--transition-normal);
    transform: translateX(-50%);
  }
  
  &:hover::after,
  &.active::after {
    width: 80%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  transition: var(--transition-normal);
  
  &:hover {
    color: var(--primary-accent);
    background: var(--background-glass);
    transform: translateY(-2px);
    box-shadow: var(--shadow-inset);
  }
  
  svg {
    font-size: 0.8rem;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: var(--background-glass);
  border: 1px solid var(--border-glass);
  color: var(--text-light);
  width: 45px;
  height: 45px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: var(--transition-normal);
  z-index: 1001;
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 15, 35, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: var(--text-light);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
  transition: var(--transition-normal);
  text-align: center;
  min-width: 200px;
  
  &:hover {
    color: var(--primary-accent);
    background: rgba(99, 102, 241, 0.1);
    transform: scale(1.05);
  }
  
  &.active {
    color: var(--primary-accent);
    background: rgba(99, 102, 241, 0.15);
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
    min-width: 180px;
  }
`;

const MobileContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.3);
`;

const MobileContactTitle = styled.h3`
  color: var(--primary-accent);
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const MobileContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

const MobileContactItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  padding: 1rem;
  border-radius: var(--border-radius-lg);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: var(--transition-normal);
  text-align: center;
  
  &:hover {
    color: var(--primary-accent);
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-3px);
  }
  
  svg {
    font-size: 1.5rem;
  }
  
  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/demo', label: 'Demo' },
    { path: '/admin', label: 'Admin Panel' },
    { path: '/menu', label: 'Menü Galerisi' }
  ];

  const contactItems = [
    { 
      href: 'tel:+905551234567', 
      icon: <FaPhone />, 
      label: 'Ara',
      text: '+90 555 123 45 67'
    },
    { 
      href: 'mailto:info@partnerqr.com', 
      icon: <FaEnvelope />, 
      label: 'Email',
      text: 'info@partnerqr.com'
    },
    { 
      href: 'https://wa.me/905551234567', 
      icon: <FaWhatsapp />, 
      label: 'WhatsApp',
      text: 'WhatsApp'
    }
  ];

  return (
    <>
      <HeaderContainer
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeaderContent>
          <Logo to="/">
            <LogoIcon>
              <FaQrcode />
            </LogoIcon>
            <LogoText>Partner QR</LogoText>
          </Logo>

          <DesktopNav>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
          </DesktopNav>

          <ContactInfo>
            <ContactItem href="tel:+905551234567">
              <FaPhone />
              +90 555 123 45 67
            </ContactItem>
            <ContactItem href="https://wa.me/905551234567">
              <FaWhatsapp />
              WhatsApp
            </ContactItem>
          </ContactInfo>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MobileNavLink
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              </motion.div>
            ))}

            <MobileContactSection>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <MobileContactTitle>İletişim</MobileContactTitle>
              </motion.div>
              
              <MobileContactGrid>
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <MobileContactItem href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </MobileContactItem>
                  </motion.div>
                ))}
              </MobileContactGrid>
            </MobileContactSection>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;