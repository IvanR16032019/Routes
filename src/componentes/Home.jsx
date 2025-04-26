import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const goContact = () => {
    navigate("/contact");
  };

  const goAbout = () => {
    navigate("/about");
  }

  return (

    <div>

      <h1>Home</h1>
    <button onClick={goContact}>
      Ir a Contacto
    </button>

    <button onClick={goAbout}>
      Go to about
    </button>
    </div>
  );
};

export default MyComponent;
