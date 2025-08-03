import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaQrcode, FaEdit, FaEye, FaPlus, FaTrash, FaImage } from 'react-icons/fa';

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

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DashboardCard = styled(motion.div)`
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(20px);
  transition: all var(--transition-normal);
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-accent);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--primary-dark);
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ActionButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: var(--text-light);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }
`;

const MenuEditor = styled.div`
  background: var(--background-primary);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  margin-bottom: 2rem;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    color: var(--text-primary);
    margin: 0;
  }
`;

const EditorActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MenuForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--text-primary);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid var(--border-light);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-accent);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid var(--border-light);
  border-radius: 10px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--background-secondary);
  transition: all var(--transition-normal);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-accent);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }
`;

const ImageUpload = styled.div`
  border: 2px dashed var(--border-light);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-gold);
    background: rgba(212, 175, 55, 0.05);
  }

  input {
    display: none;
  }
`;

const MenuItemsList = styled.div`
  display: grid;
  gap: 1rem;
`;

const MenuItem = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-light);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ItemInfo = styled.div`
  flex: 1;

  h4 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }

  .price {
    font-weight: 700;
    color: var(--primary-gold);
    font-size: 1.1rem;
  }
`;

const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${props => props.danger ? '#ff4757' : 'var(--primary-gold)'};
  color: ${props => props.danger ? 'white' : 'var(--primary-dark)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const QRPreview = styled.div`
  background: var(--background-primary);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  text-align: center;

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .qr-placeholder {
    width: 200px;
    height: 200px;
    background: var(--primary-accent);
    border-radius: 12px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: var(--text-on-dark);
  }
`;

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Izgara Somon',
      description: 'Taze somon fileto, sebze garnitürü ve özel sos ile',
      price: '85',
      category: 'ana-yemek'
    },
    {
      id: 2,
      name: 'Türk Kahvesi',
      description: 'Geleneksel Türk kahvesi, lokum ile',
      price: '25',
      category: 'icecek'
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: 'ana-yemek'
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, {
        id: Date.now(),
        ...newItem
      }]);
      setNewItem({
        name: '',
        description: '',
        price: '',
        category: 'ana-yemek'
      });
    }
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

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
            Yönetim Paneli
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            QR menünüzü kolayca yönetin ve güncelleyin
          </motion.p>
        </Header>

        {activeTab === 'dashboard' && (
          <Dashboard>
            <DashboardCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon>
                <FaEdit />
              </CardIcon>
              <CardTitle>Menü Düzenle</CardTitle>
              <CardDescription>
                Menü öğelerinizi ekleyin, düzenleyin veya silin
              </CardDescription>
              <ActionButton
                onClick={() => setActiveTab('editor')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Düzenlemeye Başla
              </ActionButton>
            </DashboardCard>

            <DashboardCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon>
                <FaQrcode />
              </CardIcon>
              <CardTitle>QR Kod</CardTitle>
              <CardDescription>
                QR kodunuzu oluşturun ve indirin
              </CardDescription>
              <ActionButton
                onClick={() => setActiveTab('qr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                QR Kod Oluştur
              </ActionButton>
            </DashboardCard>

            <DashboardCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon>
                <FaEye />
              </CardIcon>
              <CardTitle>Önizleme</CardTitle>
              <CardDescription>
                Menünüzün müşteri görünümünü inceleyin
              </CardDescription>
              <ActionButton
                onClick={() => window.open('/demo-menu', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Önizlemeyi Aç
              </ActionButton>
            </DashboardCard>
          </Dashboard>
        )}

        {activeTab === 'editor' && (
          <MenuEditor>
            <EditorHeader>
              <h2>Menü Düzenleyici</h2>
              <EditorActions>
                <ActionButton
                  onClick={() => setActiveTab('dashboard')}
                  whileHover={{ scale: 1.05 }}
                >
                  Geri Dön
                </ActionButton>
              </EditorActions>
            </EditorHeader>

            <MenuForm onSubmit={handleAddItem}>
              <FormGroup>
                <Label>Ürün Adı</Label>
                <Input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  placeholder="Örn: Izgara Somon"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Açıklama</Label>
                <TextArea
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  placeholder="Ürün açıklaması..."
                />
              </FormGroup>

              <FormGroup>
                <Label>Fiyat (₺)</Label>
                <Input
                  type="number"
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                  placeholder="85"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Kategori</Label>
                <Select
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                >
                  <option value="ana-yemek">Ana Yemek</option>
                  <option value="icecek">İçecek</option>
                  <option value="tatli">Tatlı</option>
                  <option value="alkol">Alkol</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Ürün Görseli</Label>
                <ImageUpload>
                  <input type="file" accept="image/*" />
                  <FaImage size={24} color="var(--text-secondary)" />
                  <p>Görsel yüklemek için tıklayın</p>
                </ImageUpload>
              </FormGroup>

              <ActionButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPlus style={{ marginRight: '0.5rem' }} />
                Ürün Ekle
              </ActionButton>
            </MenuForm>

            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Mevcut Ürünler ({menuItems.length})
              </h3>
              <MenuItemsList>
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ItemInfo>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="price">₺{item.price}</div>
                    </ItemInfo>
                    <ItemActions>
                      <IconButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEdit />
                      </IconButton>
                      <IconButton
                        danger
                        onClick={() => handleDeleteItem(item.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTrash />
                      </IconButton>
                    </ItemActions>
                  </MenuItem>
                ))}
              </MenuItemsList>
            </div>
          </MenuEditor>
        )}

        {activeTab === 'qr' && (
          <QRPreview>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>QR Kodunuz</h3>
              <div className="qr-placeholder">
                <FaQrcode />
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Bu QR kodu müşterilerinizin menünüze erişmesi için kullanabilirsiniz
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <ActionButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  QR Kodu İndir
                </ActionButton>
                <ActionButton
                  onClick={() => setActiveTab('dashboard')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Geri Dön
                </ActionButton>
              </div>
            </motion.div>
          </QRPreview>
        )}
      </Container>
    </PageContainer>
  );
};

export default AdminPage;