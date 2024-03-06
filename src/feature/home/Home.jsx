import React from "react";
import "./Home.scss";
import { MainLayout } from "../../core";
import { Button, ContactForm } from "../../shared";
import { about, contact, services } from "../../router";
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
            <Button text={"contact us"} link={contact} />
          </div>
          <div className="opacity"></div>
          <ContactForm />
        </section>
        <section className="sec-2 container">
          <div className="content">
            <h3>About Us</h3>
            <h2>Liam hennessy:</h2>
            <p>
              I started a roofing company in my family's name, Hennessy, when I
              was just 23 years old. After finishing school, I dove headfirst
              into the trade, working on roofs throughout London and my hometown
              of Dublin, Ireland. It was common for families in Dublin during
              the 1950s, 60s, and 70s to have their children working from a
              young age to make ends meet. My family was no exception; we earned
              just enough each week to feed and keep warm in our old tenement
              houses. With work scarce, my brother Tom and I often travelled
              back and forth to London, where I honed my skills in roof slating,
              tiling, and installing membrane felts and lead on chimneys and
              roof valleys. Today, our family business proudly bears the name D.
              Hennessy Roofing in both our Drumcondra and Clonskeagh offices.
              People often ask me what the "D" stands for, and I'm happy to say
              it's my eldest son, Darren, who showed a keen interest in my
              roofing tools from an early age. He's now a skilled roofer
              himself, carrying on the Hennessy name as a master craftsman in
              Dublin and throughout Ireland.
            </p>
            <Button text={"More"} link={about} />
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
              <Link to={el.link}>
                <Card tittle={el.title} url={el.img} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
