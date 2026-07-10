// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('lepochi_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('lepochi_cart', JSON.stringify(cart));
  }, [cart]);

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

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, cantidad) => {
    if (cantidad < 1) return;
    setCart(prevCart => prevCart.map(item => 
      item.id === id ? { ...item, cantidad } : item
    ));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const total = subtotal; // Aquí podrías añadir envío después
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, total, totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};