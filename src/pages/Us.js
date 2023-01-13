import React from "react";
import BoxUs from "../components/BoxUs";
import "../css/stylesUs.css";
const arrayUs = [
  {
    url: "/img/us/francisco-villalobos.jpeg",
    name: "Francisco Villalobos",
    description: "Web Developer",
  },
  {
    url: "/img/us/alejandra-campos.jpeg",
    name: "Alejandra Campos",
    description: "Web Developer",
  },
  {
    url: "/img/us/bm.jpeg",
    name: "Bryan Dimas",
    description: "Web Developer",
  },
  {
    url: "/img/us/riquelmi-palacios.jpg",
    name: "Riquelmi Palacios",
    description: "Web Developer, Egresado Ing. Sistemas",
  },
  {
    url: "/img/us/mary-mejia.jpg",
    name: "Mary Mejia",
    description: "Web Developer",
  },
  {
    url: "/img/us/adonay-gonzalez.jpeg",
    name: "Adonay Gonzalez",
    description:
      "Web Developer, Conocimiento BD MySql, Java, Ingles Intermedio",
  },
  {
    url: "/img/us/carolina-menjivar.jpeg",
    name: "Carolina Menjivar",
    description: "Web Developer",
  },
  {
    url: "/img/us/jose-dominguez.jpeg",
    name: "Jose Dominguez",
    description: "Web Developer",
  },
];
const Us = () => {
  return (
    <div className="containerUs">
      <div className="titulo">
        <h1>Nosotros</h1>
        <p>
          Somos un grupo de estudiantes que actualmente formamos partes del
          Bootcamp de Desarrollo Web Full Stack Junior
        </p>
      </div>
      <div className="content">
        {arrayUs.map((value, index) => (
          <BoxUs
            url={value.url}
            name={value.name}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Us;
