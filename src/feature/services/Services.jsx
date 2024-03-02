import React from "react";
import "./Services.scss";
import { MainLayout } from "../../core";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { services } from "../../router";
import { Titleroof } from "./titleroof/Titleroof";
import { Button } from "../../shared";

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
            <NavLink to="titleroof">Slate / Tile RooFs </NavLink>
            <NavLink to="flatto"> Flat / Fiberglas RooFs</NavLink>
            <NavLink to="facia">Facia & Soffits / Guttering</NavLink>
            <NavLink to="lead">Lead Flashing / Chimney Repoint</NavLink>
          </div>
          <div>
            <div className="gallery"></div>
            <Outlet />
          </div>
        </section>
        <section className="sec-4 container">
          <p>
            We take the hassle out of finding a roofing company in Dublin for
            flat roof repair and flat roof installation. We understand it is
            difficult to choose as there is many roofing company's within
            Dublin, However we ensure the highest quality work, the most
            competitive pricing and the highest grade of materials. When you
            choose KM Construction Roofing as your new roofing company in
            Dublin, our experienced team do all the hard work for you. Our team
            will manage the entire project from start to finish – including
            filling in all the documentation needed and working with your
            insurance company, if needed. We adhere to Irish building safety
            regulations We’re fully licensed and insured We are a trusted member
            of the National Guild of Master Craftsmen We arrange the scaffolding
            erection/removal We safely remove your old roof and dispose of it
            properly We make sure your property is left tidy and debris-free
            when the roof is finished.
            <br />
            <br />
            KM Construction roofing provide flat roof repair and flat roof
            installations services throughout Dublin North, Dublin South and
            Dublin county. Our team of expert roofers have over 25 years of
            experience installing flat roofs, fiberglass roofs, slate and tiled
            roofs and standard pitch roofs, completely customized and fitted to
            every job. During the installation of your new roof, our expert
            roofers can also install gutters and chimneys. We aim to complete
            your whole project in one go to ensure minimal
            disruption to your home!
          </p>
        </section>
      </div>
    </MainLayout>
  );
};
