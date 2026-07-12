// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Inicializamos el carrito buscando si hay algo guardado de antes
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('lepochi_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Cada vez que el carrito cambie, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('lepochi_cart', JSON.stringify(cart));
  }, [cart]);

  // 3. Función para agregar productos
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, cantidad: item.cantidad + quantity } : item
        );
      }
      return [...prevCart, { ...product, cantidad: quantity }];
    });
  };

  // 4. Función para eliminar un producto por completo
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // 5. Función para los botones de + y - en el carrito
  const updateQuantity = (id, cantidad) => {
    // Evitamos que la cantidad sea cero o negativa
    if (cantidad < 1) return;
    
    setCart(prevCart => prevCart.map(item => 
      item.id === id ? { ...item, cantidad } : item
    ));
  };

  // 6. Función para vaciar todo (útil si luego agregas un botón de "Vaciar carrito")
  const clearCart = () => setCart([]);

  // 7. Cálculos matemáticos en tiempo real
  const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const total = subtotal; // Aquí podrías añadir costo de envío después si lo necesitas
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      subtotal, 
      total, 
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};