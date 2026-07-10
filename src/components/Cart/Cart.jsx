import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((suma, item) => suma + item.precio, 0);

  const handleWhatsAppCheckout = () => {
    const numeroWhatsApp = "573123198725"; 
    
    let mensaje = "✨ *¡Hola Lepochi Cosmetics!* ✨\n\nMe encantaría hacer el siguiente pedido:\n\n";
    
    cart.forEach((item) => {
      mensaje += `🛍️ ${item.nombre} - $${item.precio.toLocaleString('es-CO')}\n`;
    });
    
    mensaje += `\n💰 *Total a pagar: $${total.toLocaleString('es-CO')}*`;
    mensaje += `\n\n¡Quedo atenta para coordinar el pago y el envío! 💖`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(url, '_blank');
  };

  const handleOverlayClick = (e) => {
    // Esto asegura que solo se cierre si das clic en lo oscuro, no en lo blanco
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`${styles.cartOverlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.cartPanel}>
        
        <div className={styles.cartHeader}>
          <h2>Tu Carrito 🛍️</h2>
          <button className={styles.closeBtn} onClick={onClose}>✖</button>
        </div>

        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <p className={styles.emptyCart}>Tu carrito está vacío. ¡Agrega un poco de glamour! ✨</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={item.imagen} alt={item.nombre} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h4>{item.nombre}</h4>
                  <p>${item.precio.toLocaleString('es-CO')}</p>
                </div>
                <button 
                  className={styles.deleteBtn}
                  onClick={() => removeFromCart(item.id)}
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.total}>
            <span>Total:</span>
            <span>${total.toLocaleString('es-CO')}</span>
          </div>
          <button 
            className={styles.checkoutBtn} 
            disabled={cart.length === 0}
            onClick={handleWhatsAppCheckout}
            style={{ opacity: cart.length === 0 ? 0.5 : 1 }}
          >
            Comprar por WhatsApp 💬
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;