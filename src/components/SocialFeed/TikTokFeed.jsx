import React, { useEffect } from 'react';

const TikTokFeed = () => {
  useEffect(() => {
    // 1. Creamos la etiqueta <script> dinámicamente
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;

    // 2. La inyectamos en el cuerpo de la página
    document.body.appendChild(script);

    // 3. Limpiamos el script si el componente desaparece para mantener la app rápida
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={{ padding: '40px 20px', textAlign: 'center', background: '#FCFCFC' }}>
      <h2 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-text-dark)', marginBottom: '20px' }}>
        Síguenos en TikTok ✨
      </h2>
      
      {/* 4. Aquí pegamos el DIV exacto que te dio Elfsight */}
      <div 
        className="elfsight-app-10982134-d2af-4caa-b6d1-4944fbb86feb" 
        data-elfsight-app-lazy="true"
      ></div>
    </section>
  );
};

export default TikTokFeed;