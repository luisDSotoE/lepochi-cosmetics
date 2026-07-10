import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="nosotros">
      <div className={styles.header}>
        <h2>Sobre <span>Nosotros</span></h2>
        <p>Conoce la esencia y el propósito detrás de Lepochi Cosmetics.</p>
      </div>

      <div className={styles.content}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3>Nuestra Misión 🎯</h3>
          <p>
            En Lepochi Cosmétics nos dedicamos a ofrecer productos de maquillaje de excelente calidad, 
            accesibles y en tendencia, para que cada persona pueda resaltar su belleza y expresar su 
            estilo con confianza. Nuestro compromiso es brindar una atención cercana, honesta y una 
            experiencia de compra que inspire seguridad y satisfacción.
          </p>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Nuestra Visión 🌟</h3>
          <p>
            Ser una marca de maquillaje reconocida en Colombia por su calidad, innovación y excelente 
            servicio, convirtiéndonos en la primera opción de nuestros clientes. Aspiramos a seguir 
            creciendo, ampliar nuestro catálogo y llevar la belleza de Lepochi Cosmétics a miles de 
            personas, creando una comunidad que se identifique con nuestra marca y confíe en cada uno 
            de nuestros productos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;