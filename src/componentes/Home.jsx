import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Home.css'; // Importamos el CSS

function Home() {
  const navigate = useNavigate();

  const goContact = () => navigate('/contact');
  const goAbout = () => navigate('/about');

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la Página Principal</h1>
      <p className="home-subtitle">Explora nuestras secciones para saber más.</p>

      <div className="home-buttons">
        <button className="home-button" onClick={goContact}>
          Ir a Contacto
        </button>

        <button className="home-button" onClick={goAbout}>
          Ir a Sobre Nosotros
        </button>
      </div>
    </div>
  );
}

export default Home;
