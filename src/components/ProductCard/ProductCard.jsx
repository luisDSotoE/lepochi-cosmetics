import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Agregamos el ícono FiX para el botón de cerrar
import { FiShoppingCart, FiEye, FiX } from 'react-icons/fi'; 
import { CartContext } from '../../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // NUEVO: Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price);
  };

  // NUEVO: Función para cerrar el modal si hacen clic en el fondo oscuro
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <motion.div 
        className={`${styles.card} glass-panel`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.badges}>
          {product.nuevo && <span className={styles.badgeNew}>Nuevo</span>}
          {product.descuento > 0 && <span className={styles.badgeDiscount}>-{product.descuento}%</span>}
        </div>

        <div className={styles.imageContainer}>
          <img src={product.imagen} alt={product.nombre} className={styles.image} />
        </div>

        <div className={styles.info}>
          <span className={styles.category}>{product.categoria}</span>
          <h3 className={styles.name}>{product.nombre}</h3>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>{formatPrice(product.precio)}</span>
            {product.precioAnterior && (
              <span className={styles.oldPrice}>{formatPrice(product.precioAnterior)}</span>
            )}
          </div>

          <div className={styles.actions}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.btnCart}
              onClick={() => addToCart(product)}
            >
              <FiShoppingCart /> Agregar
            </motion.button>
            
            {/* NUEVO: Le agregamos el evento onClick al ojito para abrir el modal */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.btnDetails}
              onClick={() => setIsModalOpen(true)}
            >
              <FiEye />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* NUEVO: Estructura del Modal (Ventana flotante) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <button className={styles.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
              
              <div className={styles.modalGrid}>
                <div className={styles.modalImageContainer}>
                  <img src={product.imagen} alt={product.nombre} className={styles.modalImage} />
                </div>
                
                <div className={styles.modalInfo}>
                  <span className={styles.category}>{product.categoria}</span>
                  <h2 className={styles.modalName}>{product.nombre}</h2>
                  
                  <div className={styles.modalPriceContainer}>
                    <span className={styles.modalPrice}>{formatPrice(product.precio)}</span>
                    {product.precioAnterior && (
                      <span className={styles.modalOldPrice}>{formatPrice(product.precioAnterior)}</span>
                    )}
                  </div>
                  
                  <p className={styles.modalDescription}>{product.descripcion}</p>
                  
                  <button 
                    className={styles.modalAddToCart}
                    onClick={() => {
                      addToCart(product);
                      setIsModalOpen(false); // Cerramos el modal automáticamente al agregar al carrito
                    }}
                  >
                    <FiShoppingCart /> Agregar al Carrito
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;