import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const backBoton = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>About</h1>

      <button onClick={backBoton}>
        back to home
      </button>
    </div>
  )
}

export default About
