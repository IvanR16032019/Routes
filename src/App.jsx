import React from 'react';
import { Routes, Route } from "react-router-dom"; // Quitamos BrowserRouter
import Home from './componentes/Home';
import Contact from './componentes/Contact';
import About from './componentes/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
