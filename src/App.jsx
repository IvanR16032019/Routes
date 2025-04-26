import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentes/Home';
import Contact from './componentes/Contact';
import About from './componentes/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
