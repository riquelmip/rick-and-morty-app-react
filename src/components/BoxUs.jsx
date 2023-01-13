import React from "react";

const BoxUs = ({ url, name, description }) => {
  return (
    <div className="box">
      <figure>
        <img src={url} />
        {/*
          <div className="redes-sociales">
            <a href="/us" className="fa fa-whatsapp"></a>
            <a href="/us" className="fa fa-linkedin"></a>
            <a href="/us" className="fa fa-git"></a>
          </div>
  */}
      </figure>
      <div className="name">
        <h4>{name}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default BoxUs;
