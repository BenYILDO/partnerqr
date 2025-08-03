import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaQrcode, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled(motion.footer)`
  background: var(--gradient-card);
  border-top: 1px solid var(--border-light);
  padding: 3rem 0 1rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    padding: 3rem 0 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: var(--text-on-dark);
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    position: relative;
    letter-spacing: -0.003em;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--primary-accent);
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  p, a, button {
    color: var(--text-muted);
    line-height: 1.47059;
    transition: all var(--transition-normal);
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: -0.003em;
  }

  a:hover, button:hover {
    color: var(--primary-accent);
    transform: translateX(2px);
  }
`;

const CompanySection = styled(FooterSection)`
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-on-dark);
  margin-bottom: 1.5rem;
  letter-spacing: -0.005em;

  svg {
    font-size: 2.2rem;
    color: var(--primary-accent);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    
    svg {
      font-size: 2rem;
    }
  }
`;

const CompanyDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateX(2px);
    
    svg {
      transform: scale(1.05);
    }
  }

  svg {
    color: var(--primary-accent);
    min-width: 18px;
    font-size: 1.1rem;
    transition: all var(--transition-normal);
  }

  span {
    font-size: 0.95rem;
    color: var(--text-on-dark);
    font-weight: 400;
    letter-spacing: -0.003em;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
    
    svg {
      min-width: 16px;
      font-size: 1rem;
    }
    
    span {
      font-size: 0.9rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: var(--background-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    transition: all var(--transition-normal);
    cursor: pointer;
    color: var(--text-muted);

    &:hover {
      background: var(--primary-accent);
      color: var(--text-on-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary-accent);
    }

    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-top: 1.5rem;
    
    button {
      width: 40px;
      height: 40px;
      
      svg {
        font-size: 1.1rem;
      }
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a, button {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    padding: 0.5rem 0;
    position: relative;
    transition: all var(--transition-normal);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background: var(--primary-accent);
      transition: width var(--transition-normal);
    }
    
    &:hover {
      color: var(--primary-accent);
      transform: translateX(4px);
      
      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
    
    a, button {
      padding: 0.4rem 0;
      font-size: 0.9rem;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border-light);
  margin-top: 3rem;
  padding: 2rem 0;
  background: var(--background-tertiary);
  
  .footer-bottom-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
      text-align: center;
    }
  }

  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin: 0;
    font-weight: 400;
    letter-spacing: -0.003em;
  }
`;

const BackToTop = styled(motion.button)`
  background: var(--primary-accent);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-on-dark);
  font-size: 1.2rem;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    background: var(--primary-accent-hover);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <CompanySection variants={itemVariants}>
            <Logo>
              <FaQrcode />
              Partner QR
            </Logo>
            <CompanyDescription>
              Partner Innovation Technologies olarak, restoran ve kafe işletmelerine 
              premium dijital menü çözümleri sunuyoruz. Teknoloji ile lezzeti buluşturarak, 
              işletmenizin dijital dönüşümünde yanınızdayız.
            </CompanyDescription>
            <SocialLinks>
              <motion.button 
                type="button" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.button>
              <motion.button 
                type="button" 
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </motion.button>
              <motion.button 
                type="button" 
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.button>
            </SocialLinks>
          </CompanySection>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FooterSection variants={itemVariants}>
            <h3>Hızlı Bağlantılar</h3>
            <QuickLinks>
              <a href="/">Ana Sayfa</a>
              <a href="/demo">Demo Menü</a>
              <a href="#features">Özellikler</a>
              <a href="#pricing">Fiyatlar</a>
              <a href="/admin">Yönetim Paneli</a>
            </QuickLinks>
          </FooterSection>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FooterSection variants={itemVariants}>
            <h3>Hizmetlerimiz</h3>
            <QuickLinks>
              <button type="button">QR Menü Tasarımı</button>
              <button type="button">Sipariş Yönetimi</button>
              <button type="button">Analitik Raporlar</button>
              <button type="button">Çoklu Dil Desteği</button>
              <button type="button">7/24 Teknik Destek</button>
            </QuickLinks>
          </FooterSection>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FooterSection variants={itemVariants}>
            <h3>İletişim</h3>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Maslak, İstanbul, Türkiye</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+90 (212) 555 0123</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@partnerinnovation.com</span>
            </ContactItem>
          </FooterSection>
        </motion.div>
      </FooterContent>

      <FooterBottom>
        <div className="footer-bottom-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            &copy; 2024 Partner Innovation Technologies. Tüm hakları saklıdır.
          </motion.p>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            aria-label="Başa dön"
          >
            <FaArrowUp />
          </BackToTop>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;