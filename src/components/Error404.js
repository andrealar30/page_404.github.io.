import React, { useEffect } from 'react';
import '../styles/404-style.css'; // Importa tu CSS personalizado

const Error404 = () => {
  useEffect(() => {
    // Carga particles.js desde public
    const script = document.createElement('script');
    script.src = '/assets/js/404.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      <div className="error container-fluid">
        <div className="error_code">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/404-gif.gif`}
            alt="Error 404 GIF"
            className="error_gif"
          />
        </div>
        <div className="error_title">
          <span className="opps">Opps!</span>
        </div>
        <div className="error_description">
          Parece que no podemos encontrar esa página. Puede que se haya eliminado.
        </div>
        <a href="/" className="action">
          Ir a Inicio
        </a>
      </div>
    </>
  );
};

export default Error404;
