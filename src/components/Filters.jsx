import React from "react";
import "../css/filters.css";

const filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];
  const genders = ["female", "male", "genderless", "unknown"];
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-center fw-bold">Filtros</h4>
        <div
          style={{ cursor: "pointer" }}
          className="text-center text-decoration-underline text-primary"
          onClick={() => {
            setPageNumber(1);
            setGender("");
            setSpecies("");
            setStatus("");
            const elementostatus = document.getElementsByClassName("status");
            for (var i = 0; i < elementostatus.length; i++)
              elementostatus[i].classList.replace(
                "btn-primary",
                "btn-outline-primary"
              );
            const elementogender = document.getElementsByClassName("gender");
            for (var j = 0; j < elementogender.length; j++)
              elementogender[j].classList.replace(
                "btn-primary",
                "btn-outline-primary"
              );
            const elementospecies = document.getElementsByClassName("species");
            for (var k = 0; k < elementospecies.length; k++)
              elementospecies[k].classList.replace(
                "btn-primary",
                "btn-outline-primary"
              );
          }}
        >
          Limpiar filtros
        </div>
        <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="true"
              data-bs-toggle="tab"
              href="#gender"
            >
              Gender
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#species">
              Species
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#status">
              Status
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body tab-content">
        <div className="tab-pane active" id="gender">
          {genders.map((items, index) => (
            <button
              className="btn btn-outline-primary pad gender"
              type="button"
              id={`genders-${index}`}
              name="genders"
              onClick={() => {
                setPageNumber(1);
                setGender(items);
                const elemento = document.getElementsByClassName("gender");
                for (var i = 0; i < elemento.length; i++)
                  elemento[i].classList.replace(
                    "btn-primary",
                    "btn-outline-primary"
                  );

                const btn = document.querySelector(`#genders-${index}`);
                btn.classList.remove("btn-outline-primary");
                btn.classList.add("btn-primary");
              }}
            >
              {items}
            </button>
          ))}
        </div>
        <div className="tab-pane" id="species">
          {species.map((items, index) => (
            <button
              className="btn btn-outline-primary pad species"
              type="button"
              id={`species-${index}`}
              name="species"
              onClick={() => {
                setPageNumber(1);
                setSpecies(items);
                const elemento = document.getElementsByClassName("species");
                for (var i = 0; i < elemento.length; i++)
                  elemento[i].classList.replace(
                    "btn-primary",
                    "btn-outline-primary"
                  );

                const btn = document.querySelector(`#species-${index}`);
                btn.classList.remove("btn-outline-primary");
                btn.classList.add("btn-primary");
              }}
            >
              {items}
            </button>
          ))}
        </div>
        <div className="tab-pane" id="status">
          {status.map((items, index) => (
            <button
              className="btn btn-outline-primary pad status"
              type="button"
              id={`status-${index}`}
              name="status"
              onClick={() => {
                setPageNumber(1);
                setStatus(items);
                const elemento = document.getElementsByClassName("status");
                for (var i = 0; i < elemento.length; i++)
                  elemento[i].classList.replace(
                    "btn-primary",
                    "btn-outline-primary"
                  );

                const btn = document.querySelector(`#status-${index}`);
                btn.classList.remove("btn-outline-primary");
                btn.classList.add("btn-primary");
              }}
            >
              {items}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default filters;
