import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home';
import Contact from './componentes/Contact';
import About from './componentes/About';
import Test from './componentes/Test'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
