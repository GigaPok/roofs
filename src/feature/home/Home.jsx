import React from "react";
import "./Home.scss";
import { MainLayout } from "../../core";
import { Button, ContactForm } from "../../shared";
import { about, contact } from "../../router";
import roofting from "../../assets/rooffing.jpg";
import line from "../../assets/line.png";
import { Card } from "../../shared/card/Card";
import { Link } from "react-router-dom";
import roofingImg from "../../assets/Roofing Services/Tiles  Slate RooFs/image00030.jpeg";
import paintingImg from "../../assets/Painting Tiling/Interior  exterior  paint/image00010.jpeg";
import insulationImg from "../../assets/Insulation/EXTERNAL INSULATION/image00005.jpeg";
import sheedLandImg from "../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00009.jpeg";
import {
  SlateTileRoofs,
  ExteriorInteriorPainting,
  ExternalInsulation,
  NewSheedRenew,
} from "../../router";

export const Home = () => {
  const array = [
    {
      title: "Roofing Services",
      link: SlateTileRoofs,
      img: roofingImg,
    },
    {
      title: "Painting / Tiling",
      link: ExteriorInteriorPainting,
      img: paintingImg,
    },
    {
      title: "Insulation",
      link: ExternalInsulation,
      img: insulationImg,
    },
    {
      title: "Sheed / Landscaping",
      link: NewSheedRenew,
      img: sheedLandImg,
    },
  ];
  const scrollUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <MainLayout>
      <div id="home">
        <section className="sec-1 container">
          <div className="content-wrapper">
            <div className="text">
              <h3>+25 years in construction Experienced builders</h3>
              <p>
                Need roofing help? Contact us now and our dedicated team will
                assess the issue and provide the best solution for a stress-free
                fix.
              </p>
            </div>
            <Button
              text={"contact us"}
              link={contact}
              onClick={() => scrollUp()}
            />
          </div>
          <div className="opacity"></div>
          <ContactForm />
        </section>
        <section className="sec-2 container">
          <div className="content">
            <h3>About Us</h3>
            <p>
              Welcome to KM Construction, Ireland's leading provider of
              top-quality, building services. Based in Dublin and serving
              clients throughout Ireland, our company has established a solid
              reputation for delivering professional results, exceptional
              expertise, and an unparalleled commitment to customer
              satisfaction. At KMC, we understand the importance of time and
              efficiency. We pride ourselves on our quick turn around time
              without compromising the quality of our services.
            </p>
            <Button text={"More"} link={about} onClick={() => scrollUp()} />
          </div>
          <div>
            <img src={roofting} alt="roofting" />
          </div>
        </section>
        <section className="sec-3">
          <h3>List of Services we Offer</h3>
          <div>
            <img src={line} alt="line" />
          </div>
          <span>
            {" "}
            Our team is made up of dedicated and skilled roofing contractors in
            Dublin. All our roofing services are tailored to meet the needs of
            our customers, all at an affordable price.
          </span>
          <div className="card-wrapper">
            {array.map((el) => (
              <Link to={el.link} onClick={() => scrollUp()}>
                <Card tittle={el.title} url={el.img} />
              </Link>
            ))}
          </div>
          <div className="exp-wrapper">
            <span>
              25+
              <br />
              Years In Business
            </span>
            <span>
              20K+
              <br />
              Happy Clients
            </span>
            <span>
              20K+
              <br />
              Projects Completed
            </span>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
