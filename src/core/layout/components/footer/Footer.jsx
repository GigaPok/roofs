import React from "react";
import "./Footer.scss";
import instagram from "../../../../assets/partner-icons/inst.png";
import facebook from "../../../../assets/partner-icons/fb.png";
import whatsapp from "../../../../assets/partner-icons/whatsapp.png";
import knauf from "../../../../assets/partner-icons/knauf.png";
import velux from "../../../../assets/partner-icons/velux.png";
import king from "../../../../assets/partner-icons/king.png";
import celu from "../../../../assets/partner-icons/celu.png";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="patner container">
        <span className="parnter-text">Trusted Partners:</span>
        <div className="wrapper">
          <ul>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" />
            </li>
            <li>
              <img src={knauf} alt="knauf" />
            </li>
            <li>
              <img src={velux} alt="velux" />
            </li>
            <li>
              <img src={king} alt="king" />
            </li>
            <li>
              <img src={celu} alt="celu" />
            </li>
          </ul>
        </div>
      </div>
      <span>Copyright 2024 KM Construction | All Rights Reserved.</span>
    </div>
  );
};
