import React from 'react';
import { motion } from 'framer-motion';
import styles from './Categories.module.css';

// NUEVAS RUTAS: Apuntando directamente a /assets/category/
const categoriasData = [
  { id: 'Todos', nombre: 'Todos', imagen: '/assets/category/Todos.png' },
  { id: 'Skincare', nombre: 'Skincare', imagen: '/assets/category/Skincare.jpg' },
  { id: 'Rostro', nombre: 'Rostro', imagen: '/assets/category/Rostro.jpg' },
  { id: 'Cejas', nombre: 'Cejas', imagen: '/assets/category/Cejas.jpg' },
  { id: 'Labiales', nombre: 'Labiales', imagen: '/assets/category/Labiales.jpg' },
  { id: 'Capilar', nombre: 'Capilar', imagen: '/assets/category/capilar.jpg' }, // 'c' minúscula corregida
  { id: 'Accesorios', nombre: 'Accesorios', imagen: '/assets/category/Accesorios.jpg' }
];

const Categories = ({ categoriaSeleccionada, setCategoriaSeleccionada }) => {
  return (
    <section className={styles.categoriesSection} id="categorias">
      <div className={styles.header}>
        <h2>Explora por <span>Categorías</span></h2>
        <p>Encuentra exactamente lo que necesitas para resaltar tu belleza.</p>
      </div>

      <div className={styles.categoriesContainer}>
        {categoriasData.map((cat, index) => (
          <motion.div
            key={cat.id}
            className={`${styles.categoryCard} ${categoriaSeleccionada === cat.id ? styles.active : ''}`}
            onClick={() => setCategoriaSeleccionada(cat.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.imageWrapper}>
              <img src={cat.imagen} alt={`Categoría ${cat.nombre}`} className={styles.categoryImage} />
            </div>
            <span className={styles.categoryName}>{cat.nombre}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;