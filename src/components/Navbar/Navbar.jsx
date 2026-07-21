import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiInstagram, FiMenu, FiX } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = ({ onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Botón menú hamburguesa (Solo móvil) */}
      <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Logo */}
      <div className={styles.logo} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img 
          src="/assets/images/logo-lepochi.jpeg" 
          alt="Lepochi Cosmetics" 
          className={styles.logoImg} 
        />
      </div>

      {/* Enlaces Principales */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <li><a href="#inicio" onClick={scrollToTop}>Inicio</a></li>
        <li><a href="#productos" onClick={() => setIsMenuOpen(false)}>Productos</a></li>
        <li><a href="#categorias" onClick={() => setIsMenuOpen(false)}>Categorías</a></li>
        <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
        <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
      </ul>

      {/* Acciones y Redes */}
      <div className={styles.actions}>
        <div className={styles.socialIcons}>
          <a href="https://instagram.com/lepochi_cosmetics" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          <a href="https://tiktok.com/@lepochi_cosmetics" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
          <a href="https://wa.me/573123198725" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>

        <div className={styles.cartContainer} onClick={onOpenCart} style={{ cursor: 'pointer' }}>
          <FiShoppingCart className={styles.cartIcon} />
          {totalItems > 0 && (
            <motion.span 
              className={styles.cartBadge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {totalItems}
            </motion.span>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;