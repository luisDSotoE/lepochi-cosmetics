import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`${styles.loaderContainer} ${fullScreen ? styles.fullScreen : ''}`}>
      <motion.div
        className={styles.imageWrapper}
        animate={{ 
          scale: [1, 1.15, 1], // Efecto de latido (crece y se encoge)
          opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img 
          src="/assets/images/logo-lepochi.jpeg" 
          alt="Cargando Lepochi..." 
          className={styles.logoImage} 
        />
      </motion.div>
      <motion.p 
        className={styles.text}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Preparando tu toque de glamour...
      </motion.p>
    </div>
  );
};

export default Loader;