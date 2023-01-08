import React from "react";
import "../css/bienvenida.css";
import fondo from "../img/27353-rick-y-morty.png";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0();
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
            {isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
