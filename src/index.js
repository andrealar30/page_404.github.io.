import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tu archivo de estilos globales (si tienes uno)
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento de tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
