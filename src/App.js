import React, { useEffect } from 'react';
import '../src/css/404-style.css'; // Tu archivo CSS personalizado

function App() {
  useEffect(() => {
    // Verifica si particlesJS está disponible y lo inicializa
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          size: {
            value: 3
          }
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="error container-fluid">
        {/* Contenedor para el gif de error */}
        <div className="error_code">
          <img
            src="/assets/img/404-img/404 gif.gif" // Ruta de tu imagen en public/assets/img
            alt="Error 404 GIF"
            className="error_gif"
          />
        </div>

        {/* Título del error */}
        <div className="error_title">
          <span className="opps">Opps!</span>
        </div>

        {/* Descripción del error */}
        <div className="error_description">
          Parece que no podemos encontrar esa página. Puede que se haya eliminado.
        </div>

        {/* Enlace para ir a inicio */}
        <a href="/" className="action">Ir a Inicio</a>
      </div>

      {/* Aquí agregamos el contenedor de Particles.js */}
      <div id="particles-js"></div>
    </div>
  );
}

export default App;
