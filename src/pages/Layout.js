import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/Rick-and-Morty-Min.png";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="Rick and Morty App" width="150px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Bienvenida
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/characters" className="nav-link">
                  Personajes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-dark text-center text-lg-start text-white fixed-bottom">
        <div className="text-center p-3">
          © 2020 Copyright&nbsp;
          <a className="text-white" href="http://localhost:3000">
            Ricky & Morty App. &copy; Todos Los Derechos Reservados 2022
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
