import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Promotions.module.css';

const listaPromos = [
  {
    id: 1,
    tag: "30% OFF",
    titulo: "K-Beauty Essentials",
    descripcion: "En toda la línea de Skincare y preparación de piel para un acabado de porcelana.",
    boton: "Aprovechar"
  },
  {
    id: 2,
    tag: "NUEVO",
    titulo: "Glow de Verano",
    descripcion: "Iluminadores y bronceadores premium para resaltar tu esencia bajo el sol.",
    boton: "Ver Colección"
  }
];

const Promotions = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % listaPromos.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className={styles.promoSection}>
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="wait"> {/* El modo "wait" evita que se encimen los textos */}
          <motion.div
            key={listaPromos[index].id}
            className={styles.promoCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.tag}>{listaPromos[index].tag}</span>
            <h2 className={styles.titulo}>{listaPromos[index].titulo}</h2>
            <p className={styles.descripcion}>{listaPromos[index].descripcion}</p>
            <button className={styles.btnAction}>{listaPromos[index].boton}</button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de bolitas */}
      <div className={styles.dots}>
        {listaPromos.map((_, i) => (
          <span 
            key={i} 
            className={`${styles.dot} ${index === i ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Promotions;