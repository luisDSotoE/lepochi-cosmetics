import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Promotions from './components/Promotions/Promotions';
import Categories from './components/Categories/Categories';
import ProductGrid from './components/ProductGrid/ProductGrid';
// 1. Importamos las dos secciones nuevas
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import './App.css'; 

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  return (
    <CartProvider>
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Promotions />
        <Categories 
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada} 
        />
        <ProductGrid 
          categoriaSeleccionada={categoriaSeleccionada} 
        />
        {/* 2. Agregamos las secciones al final */}
        <About />
        <Contact />
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
}

export default App;