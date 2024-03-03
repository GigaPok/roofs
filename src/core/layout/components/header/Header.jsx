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
  return (
    <div id="header">
      <div className="top-header">
        <div className="top-header-wrapper ">
          <div className="content container">
            <a href="tel:+353894246491">+353894246491</a>
            <span>Welcome to KM Construction</span>
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
                        window.location.href = "tel:0322888088";
                        e.preventDefault();
                      }}
                    >
                      (+353) 894246491
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
                    KM Construction@KM.com
                  </Link>
                </li>
                <li>
                  <img className="icon" src={mapIcon} alt="map icon" />
                  <a
                    href="https://goo.gl/maps/4VgHf8qHsRdN4MTA9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KM Construction 0103, USA, Usa
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
