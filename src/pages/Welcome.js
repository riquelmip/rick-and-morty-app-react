import React from "react";
import "../css/bienvenida.css";
import fondo from "../img/27353-rick-y-morty.png";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
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
              <span>BIENVENIDO</span>
            </h1>
            {isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.nickname} />
                <br />
                <br />
                <h2>Usuario: {user.nickname}</h2>
                <h2>Email: {user.name}</h2>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
