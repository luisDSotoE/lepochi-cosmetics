import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contacto">
      <div className={styles.header}>
        <h2>Ponte en <span>Contacto</span></h2>
        <p>¡Estamos aquí para ayudarte a brillar! Escríbenos por tu canal favorito.</p>
      </div>

      <motion.div 
        className={styles.contactCards}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="https://wa.me/573123198725" target="_blank" rel="noreferrer" className={styles.card}>
          <FaWhatsapp className={styles.icon} />
          <h3>WhatsApp</h3>
          <p>Escríbenos directamente</p>
        </a>

        <a href="https://instagram.com/lepochi_cosmetics" target="_blank" rel="noreferrer" className={styles.card}>
          <FaInstagram className={styles.icon} />
          <h3>Instagram</h3>
          <p>Síguenos @lepochi_cosmetics</p>
        </a>

        <a href="https://tiktok.com/@lepochi_cosmetics" target="_blank" rel="noreferrer" className={styles.card}>
          <FaTiktok className={styles.icon} />
          <h3>TikTok</h3>
          <p>Mira nuestros tutoriales</p>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;