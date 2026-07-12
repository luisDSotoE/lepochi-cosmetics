// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css'; // Usando CSS Modules

const Hero = () => {

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajustamos un poco la posición para que el navbar no tape el título
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={styles.heroSection} id="inicio">
      {/* Elementos decorativos flotantes */}
      <motion.div 
        className={styles.floatingStar}
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tu toque diario de <br/>
            <span className={styles.highlight}>glamour ✨</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Maquillaje pensado para resaltar tu esencia.
          </motion.p>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* BOTÓN 1: COMPRAR AHORA -> Va a Productos */}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(248, 187, 217, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => scrollToSection('productos')}
            >
              Comprar ahora
            </motion.button>
            
            {/* BOTÓN 2: VER CATÁLOGO -> Va a Categorías */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnSecondary} glass-panel`}
              onClick={() => scrollToSection('categorias')}
            >
              Ver catálogo
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Aquí irá tu imagen principal, mientras tanto un placeholder con glassmorphism */}
          <motion.img 
            src="/assets/images/hero-image.jpg" 
            alt="Maquillaje Lepochi" 
            className={styles.heroImg}
            initial={{ y: 20 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;