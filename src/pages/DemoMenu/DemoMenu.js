import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUtensils, FaCoffee, FaWineGlass, FaLeaf, FaFire, FaHeart, FaStar, FaShoppingCart, FaPlus, FaMinus, FaArrowLeft, FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--background-primary);

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Header = styled.div`
  background: var(--gradient-dark);
  color: var(--text-light);
  padding: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary-accent);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10;

  &:hover {
    background: rgba(212, 175, 55, 0.25);
    transform: translateY(-50%) translateX(-5px);
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 1024px) {
    left: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 1.5rem;
    align-self: flex-start;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const DemoNotice = styled(motion.div)`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-gold);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.1);

  svg {
    font-size: 1.5rem;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const RestaurantInfo = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--primary-gold);
    font-family: 'Playfair Display', serif;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--primary-gold);
    font-size: 1.1rem;
    
    svg {
      font-size: 1.2rem;
      filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5));
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
    .rating {
      font-size: 1rem;
      
      svg {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 1024px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CategoryNav = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0.5rem 0 1rem 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-gold);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 2rem;
    padding-bottom: 0.8rem;
  }
`;

const CategoryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background: ${props => props.active ? 'var(--gradient-primary)' : 'white'};
  color: ${props => props.active ? 'var(--primary-dark)' : 'var(--text-secondary)'};
  border: 2px solid ${props => props.active ? 'transparent' : 'var(--border-light)'};
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 8px 25px rgba(212, 175, 55, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.active ? '0 12px 30px rgba(212, 175, 55, 0.4)' : '0 8px 25px rgba(0, 0, 0, 0.15)'};
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    gap: 0.5rem;
    
    svg {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MenuItem = styled(motion.div)`
  background: var(--background-primary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 1px solid var(--border-light);
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--primary-accent);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ItemImage = styled.div`
  height: 220px;
  background: ${props => props.image ? `url(${props.image})` : 'var(--gradient-gold)'};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  }

  @media (max-width: 768px) {
    height: 200px;
    font-size: 3.5rem;
  }
`;

const ItemBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-gold);
  color: var(--primary-dark);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    top: 0.8rem;
    right: 0.8rem;
  }
`;

const ItemContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ItemName = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ItemPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-gold);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ItemDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
    font-size: 0.9rem;
  }
`;

const ItemTags = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
`;

const Tag = styled.span`
  background: rgba(212, 175, 55, 0.15);
  color: var(--primary-gold);
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.25);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  background: var(--gradient-gold);
  color: var(--primary-dark);
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.2rem;
    font-size: 0.95rem;
    
    svg {
      font-size: 1rem;
    }
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 1.2rem;
    padding: 0.8rem;
  }
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-gold);
  color: var(--primary-dark);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`;

const Quantity = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  min-width: 40px;
  text-align: center;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    min-width: 35px;
  }
`;

const Cart = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--gradient-gold);
  color: var(--primary-dark);
  padding: 1.2rem 1.8rem;
  border-radius: 50px;
  box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 1000;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.5);
  }

  svg {
    font-size: 1.3rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    
    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

const DemoMenu = () => {
  const [activeCategory, setActiveCategory] = useState('ana-yemek');
  const [cart, setCart] = useState({});

  const categories = [
    { id: 'ana-yemek', name: 'Ana Yemek', icon: <FaUtensils /> },
    { id: 'icecek', name: 'İçecek', icon: <FaCoffee /> },
    { id: 'tatli', name: 'Tatlı', icon: <FaHeart /> },
    { id: 'alkol', name: 'Alkol', icon: <FaWineGlass /> }
  ];

  const menuItems = {
    'ana-yemek': [
      {
        id: 1,
        name: 'Izgara Somon',
        price: '₺85',
        description: 'Taze somon fileto, sebze garnitürü ve özel sos ile',
        image: null,
        emoji: '🐟',
        tags: ['Protein', 'Sağlıklı'],
        badge: { text: 'Popüler', icon: <FaStar /> }
      },
      {
        id: 2,
        name: 'Kuzu Pirzola',
        price: '₺120',
        description: 'Özel baharatlarla marine edilmiş kuzu pirzola',
        image: null,
        emoji: '🥩',
        tags: ['Premium', 'Protein'],
        badge: { text: 'Şef Önerisi', icon: <FaFire /> }
      },
      {
        id: 3,
        name: 'Vegan Burger',
        price: '₺65',
        description: 'Ev yapımı vegan köfte, avokado ve özel sos',
        image: null,
        emoji: '🍔',
        tags: ['Vegan', 'Sağlıklı'],
        badge: { text: 'Vegan', icon: <FaLeaf /> }
      }
    ],
    'icecek': [
      {
        id: 4,
        name: 'Türk Kahvesi',
        price: '₺25',
        description: 'Geleneksel Türk kahvesi, lokum ile',
        image: null,
        emoji: '☕',
        tags: ['Geleneksel', 'Sıcak']
      },
      {
        id: 5,
        name: 'Taze Sıkılmış Portakal',
        price: '₺30',
        description: '100% doğal, taze sıkılmış portakal suyu',
        image: null,
        emoji: '🍊',
        tags: ['Taze', 'Vitamin C']
      }
    ],
    'tatli': [
      {
        id: 6,
        name: 'Tiramisu',
        price: '₺45',
        description: 'İtalyan usulü tiramisu, taze mascarpone ile',
        image: null,
        emoji: '🍰',
        tags: ['İtalyan', 'Kremsi']
      }
    ],
    'alkol': [
      {
        id: 7,
        name: 'Kırmızı Şarap',
        price: '₺180',
        description: 'Seçkin Türk şarabı, 2019 vintage',
        image: null,
        emoji: '🍷',
        tags: ['Vintage', 'Türk']
      }
    ]
  };

  const updateQuantity = (itemId, change) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentQty = newCart[itemId] || 0;
      const newQty = Math.max(0, currentQty + change);
      
      if (newQty === 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = newQty;
      }
      
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header>
        <BackButton to="/">
          <FaArrowLeft />
          Ana Sayfaya Dön
        </BackButton>
        <RestaurantInfo>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bella Vista Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modern Türk ve Dünya Mutfağı
          </motion.p>
          <motion.div
            className="rating"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4.8 (324 değerlendirme)</span>
          </motion.div>
        </RestaurantInfo>
      </Header>

      <Container>
        <DemoNotice
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaQrcode />
          Bu bir demo menüdür. Partner QR ile kendi menünüzü oluşturabilirsiniz!
        </DemoNotice>
        
        <CategoryNav>
          {categories.map((category, index) => (
            <CategoryButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </CategoryButton>
          ))}
        </CategoryNav>

        <MenuGrid>
          {menuItems[activeCategory]?.map((item, index) => (
            <MenuItem
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ItemImage>
                {item.badge && (
                  <ItemBadge>
                    {item.badge.icon}
                    {item.badge.text}
                  </ItemBadge>
                )}
                <span style={{ fontSize: '4rem', position: 'relative', zIndex: 5 }}>{item.emoji}</span>
              </ItemImage>
              
              <ItemContent>
                <ItemHeader>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemHeader>
                
                <ItemDescription>{item.description}</ItemDescription>
                
                {item.tags && (
                  <ItemTags>
                    {item.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </ItemTags>
                )}

                {cart[item.id] ? (
                  <QuantityControl>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={cart[item.id] <= 1}
                    >
                      <FaMinus />
                    </QuantityButton>
                    <Quantity>{cart[item.id]}</Quantity>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FaPlus />
                    </QuantityButton>
                  </QuantityControl>
                ) : null}

                <AddToCartButton
                  onClick={() => updateQuantity(item.id, 1)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaShoppingCart />
                  {cart[item.id] ? 'Miktarı Artır' : 'Sepete Ekle'}
                </AddToCartButton>
              </ItemContent>
            </MenuItem>
          ))}
        </MenuGrid>
      </Container>

      {getTotalItems() > 0 && (
        <Cart
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaShoppingCart />
          {getTotalItems()} ürün
        </Cart>
      )}
    </PageContainer>
  );
};

export default DemoMenu;