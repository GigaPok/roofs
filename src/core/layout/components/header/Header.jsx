import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { about, services, contact, home } from "../../../../router";
import logo from "../../../../assets/logo.png";
import phoneIcon from "../../../../assets/svg/phone.svg";
import mailIcon from "../../../../assets/svg/email.svg";
import mapIcon from "../../../../assets/svg/map.svg";
import fbIcon from "../../../../assets/svg/facebook.svg";
import whatsappIcon from "../../../../assets/svg/whatsapp.svg";

export const Header = () => {
  const scrollUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div id="header">
      <div className="top-header">
        <div className="top-header-wrapper ">
          <div className="content container">
            <a href="tel:+353894246491">(+353) 89 424 6491</a>
            <NavLink to={home} onClick={() => scrollUp()}>
              <span>Welcome to KM Construction</span>
            </NavLink>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556946293099"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fbIcon} alt="facebook icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+353894246491"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="linkdedin"
                      src={whatsappIcon}
                      alt="whatsapp icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper container">
        <NavLink to={home}>
          <img src={logo} className="logo"></img>
        </NavLink>
        <h2>KM Construction</h2>
        <div className="header-right">
          <div className=" header-contact">
            <div className="contact-info">
              <ul>
                <li>
                  <img className="icon" src={phoneIcon} alt="phone icon" />
                  <div className="phone-numbers">
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href = "tel:+353894246491";
                        e.preventDefault();
                      }}
                    >
                      (+353) 89 424 6491
                    </Link>
                  </div>
                </li>
                <li>
                  <img className="icon" src={mailIcon} alt="mail icon" />
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location.href = "mailto:ana@anigozi.com";
                      e.preventDefault();
                    }}
                  >
                    Thekmconstruction@gmail.com
                  </Link>
                </li>
                <li>
                  <img className="icon" src={mapIcon} alt="map icon" />
                  <a
                    href="https://maps.app.goo.gl/qf3PtEQ6bm4Vwdzy7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ireland, Dublin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
