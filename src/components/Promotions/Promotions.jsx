import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importar estilos base de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from './Promotions.module.css';

const Promotions = () => {
  // Datos simulados de promociones (luego podrás cambiar las imágenes)
  const promos = [
    {
      id: 1,
      title: "Glow de Verano",
      discount: "20% OFF",
      desc: "En toda la línea de iluminadores para resaltar tu esencia.",
      // Usamos un placeholder provisional con los colores de tu marca
      image: "https://via.placeholder.com/600x400/FFE8F5/4A4A4A?text=Imagen+Promo+1",
    },
    {
      id: 2,
      title: "K-Beauty Essentials",
      discount: "30% OFF",
      desc: "Skincare y preparación de piel para un acabado de porcelana.",
      image: "https://via.placeholder.com/600x400/BEEBFF/4A4A4A?text=Imagen+Promo+2",
    },
    {
      id: 3,
      title: "Labios Perfectos",
      discount: "Envío Gratis",
      desc: "Por la compra de 2 o más labiales matte aterciopelados.",
      image: "https://via.placeholder.com/600x400/DCCBFF/4A4A4A?text=Imagen+Promo+3",
    }
  ];

  return (
    <section className={styles.promoSection} id="promociones">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={styles.container}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className={styles.swiperContainer}
        >
          {promos.map((promo) => (
            <SwiperSlide key={promo.id}>
              {/* Reutilizamos la clase global glass-panel que creamos en App.css */}
              <div className={`${styles.slideCard} glass-panel`}>
                
                <div className={styles.textContainer}>
                  <motion.span 
                    className={styles.discount}
                    whileHover={{ scale: 1.05 }}
                  >
                    {promo.discount}
                  </motion.span>
                  <h2 className={styles.title}>{promo.title}</h2>
                  <p className={styles.desc}>{promo.desc}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.btnAprovechar}
                  >
                    Aprovechar
                  </motion.button>
                </div>

                <div className={styles.imageContainer}>
                  <img src={promo.image} alt={promo.title} className={styles.image} />
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Promotions;