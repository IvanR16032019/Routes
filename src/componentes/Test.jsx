import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Test.css'; // Importamos el CSS

const Test = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <div className="test-container">
      <h1 className="test-title">Prueba de la App</h1>
      <p className="test-description">
        Esta es una sección de prueba para asegurarnos que la navegación y el diseño funcionan correctamente.
      </p>

      <button className="test-button" onClick={backHome}>
        Ir al Inicio
      </button>
    </div>
  );
};

export default Test;
