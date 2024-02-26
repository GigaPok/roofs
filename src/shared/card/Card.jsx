import React from "react";
import "./Card.scss";

export const Card = ({ url, tittle }) => {
  return (
    <div
      id="card"
      style={{
        background: `url(${url})`,
      }}
    >
      <h2 className="card-tittle">{tittle}</h2>
      <div className="oppacity"></div>
      <span className="more">Learn more</span>
    </div>
  );
};
