import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--background-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
`;

const ComingSoon = styled(motion.div)`
  background: var(--gradient-card);
  border-radius: 16px;
  padding: 4rem 2rem;
  box-shadow: var(--shadow-glass);
  border: 1px solid var(--border-light);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(20px);

  .icon {
    font-size: 4rem;
    color: var(--primary-accent);
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: -0.003em;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.003em;
  }
`;

const MenuPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Menü Galerisi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Farklı restoran menülerini keşfedin
          </motion.p>
        </Header>

        <ComingSoon
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="icon">🚀</div>
          <h2>Çok Yakında!</h2>
          <p>
            Menü galerisi özelliği üzerinde çalışıyoruz. 
            Yakında farklı restoran menülerini inceleyebilecek 
            ve kendi menünüz için ilham alabileceksiniz.
          </p>
        </ComingSoon>
      </Container>
    </PageContainer>
  );
};

export default MenuPage;