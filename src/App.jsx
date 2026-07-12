import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Promotions from './components/Promotions/Promotions';
import Categories from './components/Categories/Categories';
import ProductGrid from './components/ProductGrid/ProductGrid';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Loader from './components/Loader/Loader'; // Importamos el nuevo Loader
import './App.css'; 

function App() {
  // 1. Estado para controlar la pantalla de carga inicial
  const [isAppLoading, setIsAppLoading] = useState(true);
  
  // Estados que ya tenías
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // 2. Efecto para mostrar el logo latiendo durante 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
    
    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  // 3. Si la app está "cargando", mostramos SOLO la pantalla de bienvenida
  if (isAppLoading) {
    return <Loader fullScreen={true} />;
  }

  // 4. Una vez que termina la carga, mostramos toda tu página
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
        <About />
        <Contact />
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
}

export default App;