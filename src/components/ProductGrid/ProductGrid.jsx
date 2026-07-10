import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products'; 
import styles from './ProductGrid.module.css';

// Recibimos la prop desde App.jsx
const ProductGrid = ({ categoriaSeleccionada }) => {
  
  // Lógica de filtrado
  const productosFiltrados = categoriaSeleccionada === 'Todos' 
    ? products // Si es "Todos", pasamos el arreglo completo
    : products.filter(product => product.categoria === categoriaSeleccionada); // Si no, solo los que coinciden

  return (
    <section className={styles.gridSection} id="productos">
      <div className={styles.header}>
        <h2>
          {categoriaSeleccionada === 'Todos' ? (
            <>Nuestros <span>Favoritos</span></>
          ) : (
            <>Resultados para <span>{categoriaSeleccionada}</span></>
          )}
        </h2>
        <p>Los productos más amados para tu rutina diaria.</p>
      </div>

      {/* Si no hay productos en esa categoría, mostramos un mensaje */}
      {productosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', fontSize: '1.2rem', marginTop: '30px' }}>
          Próximamente tendremos productos en esta categoría ✨
        </p>
      ) : (
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {productosFiltrados.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ProductGrid;