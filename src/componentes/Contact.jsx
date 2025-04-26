import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Contact.css'; // Importamos el CSS

const Contact = () => {
  const navigate = useNavigate();

  const backBoton = () => {
    navigate("/");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-description">
        ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
        Escríbenos y te responderemos lo antes posible.
      </p>

      <button className="contact-button" onClick={backBoton}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Contact;
