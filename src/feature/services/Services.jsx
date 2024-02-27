import React from "react";
import "./Services.scss";
import { MainLayout } from "../../core";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { services } from "../../router";
import { Titleroof } from "./titleroof/Titleroof";

export const Services = () => {
  return (
    <MainLayout>
      <div id="services">
        <section className="sec1">
          <div className="back-img">
            <span>Services</span>
            <div className="opacity"></div>
          </div>
        </section>
        <section className="sec-2 container">
          <h3>Roofing Services</h3>
          <p>
            Think your roof may have suffered damage from a storm? Call a local
            roofing contractor with decades of experience working with storm
            damaged roofs and insurance companies. At KMConstruction roofing we
            don't door knock. Your home is your sanctuary! we only come if you
            invite us.
            <br />
            Don't feel pressured to sign with the first contractor that knocks
            at your door or calls your home. Do your research; you have time.
            Finding a legitimate contractor is key to ensuring you get the
            best possible roof.
          </p>
        </section>
        <section className="sec-3 container">
          <div className="nested-wrapper">
            <NavLink to="titleroof">Titleroof slateroof</NavLink>
            <NavLink to="flatto">Flatto Fiberglasroof</NavLink>
            <NavLink to="faciaaofit">Faciaaofit Guttering</NavLink>
            <NavLink to="lead-flashing-chimney">Lead Flashing Chimney</NavLink>
          </div>
          <div>
            <div className="s"></div>
            <Outlet />
            <button>Contact</button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
