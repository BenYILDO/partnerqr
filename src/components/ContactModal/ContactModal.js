import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaTimes, FaPhone, FaWhatsapp, FaEnvelope, FaUser, FaBuilding, FaComment, FaPaperPlane } from 'react-icons/fa';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: var(--gradient-dark);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--border-radius-xl);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-accent-lg);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    max-height: 100vh;
    border-radius: var(--border-radius-lg);
    margin: 0;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: 3px;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1rem 0.8rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--text-light);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all var(--transition-normal);
  z-index: 10;
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    top: 0.8rem;
    right: 0.8rem;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.2);
    border-color: var(--primary-accent);
    color: var(--primary-gold);
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--text-light) 0%, var(--primary-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ModalSubtitle = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SelectedPlanBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  color: var(--text-light);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  svg {
    color: var(--primary-accent);
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  background: var(--background-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  font-weight: 400;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-accent);
    background: var(--background-primary);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }

  &:hover {
    border-color: var(--border-medium);
  }
`;

const TextArea = styled.textarea`
  background: var(--background-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
    min-height: 80px;
  }

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-accent);
    background: var(--background-primary);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }

  &:hover {
    border-color: var(--border-medium);
  }
`;

const Select = styled.select`
  background: var(--background-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  cursor: pointer;
  font-weight: 400;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-accent);
    background: var(--background-primary);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }

  &:hover {
    border-color: var(--border-medium);
  }

  option {
    background: var(--background-primary);
    color: var(--text-primary);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: var(--text-light);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
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
    transform: translateY(-2px);
    box-shadow: var(--shadow-accent);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform var(--transition-normal);
  }
`;

const ContactOptions = styled.div`
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  padding-top: 2rem;
  
  @media (max-width: 480px) {
    padding-top: 1.5rem;
  }
`;

const ContactTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.003em;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const ContactOption = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: var(--border-radius-lg);
  color: var(--text-light);
  text-decoration: none;
  transition: all var(--transition-normal);
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;
    gap: 0.6rem;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    border-color: var(--primary-gold);
    color: var(--primary-gold);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  svg {
    font-size: 1.5rem;
    transition: transform var(--transition-normal);
    
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const ContactLabel = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ContactInfo = styled.span`
  font-size: 0.8rem;
  color: var(--text-muted);
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ContactModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    plan: selectedPlan?.name || '',
    message: ''
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        plan: selectedPlan.name
      }));
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic here
    onClose();
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <ModalOverlay
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <ModalContent
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </CloseButton>
            
            <ModalTitle>İletişime Geçin</ModalTitle>
            <ModalSubtitle>
              Size en uygun çözümü sunabilmemiz için bilgilerinizi paylaşın.
            </ModalSubtitle>
            
            {selectedPlan && (
              <SelectedPlanBadge
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Seçilen Plan: {selectedPlan.name}
              </SelectedPlanBadge>
            )}
          </ModalHeader>

          <ModalBody>
            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label>
                    <FaUser />
                    Ad Soyad *
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Adınızı ve soyadınızı girin"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>
                    <FaBuilding />
                    Şirket Adı
                  </Label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Şirket adınızı girin"
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label>
                    <FaEnvelope />
                    E-posta *
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-posta adresinizi girin"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>
                    <FaPhone />
                    Telefon *
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon numaranızı girin"
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label>
                  Plan Seçimi
                </Label>
                <Select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                >
                  <option value="">Plan seçiniz</option>
                  <option value="Başlangıç">Başlangıç Paketi</option>
                  <option value="Profesyonel">Profesyonel Paket</option>
                  <option value="Premium">Premium Paket</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>
                  <FaComment />
                  Mesajınız
                </Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Özel isteklerinizi veya sorularınızı yazabilirsiniz..."
                  rows={4}
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Gönder
              </SubmitButton>
            </ContactForm>

            <ContactOptions>
              <ContactTitle>Veya Direkt İletişime Geçin</ContactTitle>
              <ContactGrid>
                <ContactOption
                  href="tel:+905551234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  <ContactLabel>Telefon</ContactLabel>
                  <ContactInfo>+90 555 123 45 67</ContactInfo>
                </ContactOption>

                <ContactOption
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                  <ContactLabel>WhatsApp</ContactLabel>
                  <ContactInfo>Hızlı Yanıt</ContactInfo>
                </ContactOption>

                <ContactOption
                  href="mailto:info@partnerqr.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  <ContactLabel>E-posta</ContactLabel>
                  <ContactInfo>info@partnerqr.com</ContactInfo>
                </ContactOption>
              </ContactGrid>
            </ContactOptions>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default ContactModal;