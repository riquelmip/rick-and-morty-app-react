import React from "react";
import stylesCards from "../css/cards.scss";
const cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, species, status } = x;
      return (
        <div key={id} className="col-md-3">
          <div id="cards" className="card my-3 position-relative">
            <img src={image} className="card-img-top" alt="imagen" />
            <div className="card-body">
              <span className="my-1 badge bg-primary">{species}</span>
              <br />
              <br />
              <h5 className="card-title fw-bold">{name}</h5>

              <p className="card-text">{location.name}</p>
              {(() => {
                if (status === "Dead") {
                  return (
                    <span
                      className={`${stylesCards.badge} my-1 badge bg-danger position-absolute`}
                    >
                      {status}
                    </span>
                  );
                } else if (status === "Alive") {
                  return (
                    <span
                      className={`${stylesCards.badge} my-1 badge bg-success position-absolute`}
                    >
                      {status}
                    </span>
                  );
                } else {
                  return (
                    <span
                      className={`${stylesCards.badge} my-1 badge bg-secondary position-absolute`}
                    >
                      {status}
                    </span>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = (
      <div className="col-md-12">
        <div id="cards" className="card my-3 position-relative">
          <div className="card-body">
            <p className="card-text">No se encontraron personajes</p>
          </div>
        </div>
      </div>
    );
  }
  return <>{display}</>;
};

export default cards;
