import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';
import styles from './CartDrawer.module.css';

// Reemplaza esto con tu número real (incluye el código de país, ej: 57 para Colombia)
const WHATSAPP_NUMBER = "573000000000"; 

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calcula el total sumando el precio de cada producto
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Esta función arma el mensaje y abre WhatsApp
  const handleCheckout = () => {
    if (cart.length === 0) return;

    let text = "💖 *¡Hola Lepochi Cosmetics!* 💖\n\nQuiero hacer el siguiente pedido:\n\n";
    
    cart.forEach((item, index) => {
      text += `✨ ${index + 1}. ${item.nombre} - ${formatPrice(item.precio)}\n`;
    });

    text += `\n*Total a pagar: ${formatPrice(total)}*\n\n¡Quedo atenta a los pasos para el pago!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro detrás del carrito */}
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Panel del carrito */}
          <motion.div 
            className={`${styles.drawer} glass-panel`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className={styles.header}>
              <h2>Tu Carrito 🛍️</h2>
              <button className={styles.closeBtn} onClick={onClose}>
                <FiX />
              </button>
            </div>

            <div className={styles.cartItems}>
              {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                  <p>Tu carrito está vacío.</p>
                  <p>¡Agrega un poco de magia! ✨</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <img src={item.imagen} alt={item.nombre} className={styles.itemImage} />
                    <div className={styles.itemInfo}>
                      <h4>{item.nombre}</h4>
                      <p>{formatPrice(item.precio)}</p>
                    </div>
                    <button 
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button 
                className={styles.checkoutBtn} 
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                <FiMessageCircle /> Pedir por WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;