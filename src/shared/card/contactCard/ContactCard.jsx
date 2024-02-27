import React from "react";
import "./ContactCard.scss";
import location from "../../../assets/svg/location.svg";

export const ContactCard = () => {
  return (
    <div id="contactCard">
      <div>
        <div className="line">
          <h6>Our Address</h6>
        </div>
      </div>
      <div className="content">
        <span>
          <img src={location} />
        </span>
        <h3>Dublin</h3>
        <span>Inniscarra Main Street, Rathcoole, D24 EO29</span>
      </div>
    </div>
  );
};
