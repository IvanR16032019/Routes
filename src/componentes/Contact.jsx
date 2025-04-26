import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  const backBoton = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Contact</h1>

      <button onClick={backBoton}>
        back to home
      </button>
    </div>
  )
}

export default Contact
