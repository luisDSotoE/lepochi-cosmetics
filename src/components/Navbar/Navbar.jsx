import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiInstagram } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import styles from './Navbar.module.css';

// Recibimos la prop onOpenCart
const Navbar = ({ onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useContext(CartContext);

  // Detectar el scroll para cambiar el estilo
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

  // Función para volver al inicio suavemente
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <img 
          src="/assets/images/logo-lepochi.jpeg" 
          alt="Lepochi Cosmetics" 
          className={styles.logoImg} 
        />
      </div>

      {/* Enlaces Principales */}
      <ul className={styles.navLinks}>
        {/* Le agregamos el evento onClick al botón de Inicio */}
        <li><a href="#inicio" onClick={scrollToTop}>Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#categorias">Categorías</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      {/* Acciones y Redes */}
      <div className={styles.actions}>
        <div className={styles.socialIcons}>
          <a href="https://instagram.com/lepochi_cosmetics" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://tiktok.com/@lepochi_cosmetics" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
          <a href="https://wa.me/573123198725" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        {/* Contenedor del carrito con el evento para abrirlo */}
        <div 
          className={styles.cartContainer} 
          onClick={onOpenCart}
          style={{ cursor: 'pointer' }}
        >
          <FiShoppingCart className={styles.cartIcon} />
          {/* El badge solo se muestra si hay productos */}
          {totalItems > 0 && (
            <motion.span 
              className={styles.cartBadge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {totalItems}
            </motion.span>
          )}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(248, 187, 217, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className={styles.btnDestacado}
        >
          Comprar Ahora
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;