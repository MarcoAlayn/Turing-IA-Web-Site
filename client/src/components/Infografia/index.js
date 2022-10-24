import React from "react";
import "./infografia.css";
import imagen1 from "../../assets/image1.jpg";

function Infografia() {
  return (
    <div className="infografiaContainer">
      <div className="pack1">
        <div className="overlayImage1"></div>
        <img src={imagen1} className="imagen1" />
        <h2 className="pregunta">¿Porque Nosotros?</h2>
        <p className="parrafo1">
          Somos el socio estratégico que necesitas para potenciar los datos de
          tu organización. Contamos con más de 15 años de experiencia brindando
          soluciones innovadoras, adaptadas a las necesidades de nuestros
          clientes, en más de 10 industrias y diferentes áreas funcionales.
        </p>
      </div>
    </div>
  );
}

export default Infografia;
