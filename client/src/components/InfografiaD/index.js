import React from "react";
import "./infografiaD.css";
import imagen2 from "../../assets/image2.jpg";

function InfografiaD() {
  return (
    <div className="infografiaContainerD">
      <div className="pack1D">
        <div className="overlayImage1D"></div>
        <h2 className="preguntaD">NUESTRAS METODOLOGÍAS</h2>
        <img src={imagen2} className="imagen1D" />
        <p className="parrafo1D">
          Nuestros expertos están comprometidos en desarrollar proyectos
          respaldados por metodologías ágiles e innovadoras, que aseguran el
          éxito de nuestras soluciones de analítica. Nuestro trabajo es tu
          éxito.
        </p>
      </div>
    </div>
  );
}

export default InfografiaD;
