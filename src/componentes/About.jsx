import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/About.css'; // Importamos el CSS

const About = () => {
  const navigate = useNavigate();

  const backBoton = () => {
    navigate("/");
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Sobre Nosotros</h1>
      <p className="about-description">
        Somos una empresa apasionada por ofrecer soluciones innovadoras y de calidad. 
        Nuestro equipo trabaja cada día para brindarte el mejor servicio.
      </p>

      <button className="about-button" onClick={backBoton}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default About;
