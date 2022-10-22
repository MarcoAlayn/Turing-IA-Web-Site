import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Blog from "./Pages/Blog";
import Contacto from "./Pages/Contacto";
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios";
import Tableau from "./Pages/Tableau";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tableau" element={<Tableau />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
