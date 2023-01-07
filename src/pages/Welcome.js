import React from "react";
import "../css/bienvenida.css";
import fondo from "../img/27353-rick-y-morty.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div id="particles-js"></div>
      <header
        className="contenedor header"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {
          //<!-- Barra de navegación -->
        }

        {
          // Título y descripción
        }
        <div className="contenido-descripcion">
          <div>
            <h1 className="titulo">
              <span>Rick & Morty App</span>
              <span>BIENVENIDOS</span>
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
