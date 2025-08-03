import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AdminPage from './pages/AdminPage/AdminPage';
import DemoMenu from './pages/DemoMenu/DemoMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/:restaurantId" element={<MenuPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/demo" element={<DemoMenu />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;