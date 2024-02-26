import React from "react";
import "./Home.scss";
import { MainLayout } from "../../core";
import { Button, ContactForm } from "../../shared";
import { about, contact } from "../../router";
import roofting from "../../assets/rooffing.jpg";
import line from "../../assets/line.png";
import { Card } from "../../shared/card/Card";

export const Home = () => {
  const array = [1, 2, 3, 4];
  return (
    <MainLayout>
      <div id="home">
        <section className="sec-1 ">
          <div className="content-wrapper container">
            <div className="text">
              <h3>25 years in</h3>
              <p>esfsdfsdjfd</p>
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
              sdassadadsadsadsdassadadsadsadsdassadadsadsadsdassadadsadsad
              sdassadadsadsadsdassadadsadsadsdassadadsadsadsdassadadsadsadsdassadadsadsadsdassadadsadsad
              sdassadadsadsadsdassadadsadsadsdassadadsadsadsdassadadsadsad
              sdassadadsadsadsdassadadsadsad
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
          <span> our team uis made djsfnsdjfdsjsfsdfsdfsdfsdfs</span>
          <div className="card-wrapper">
            {array.map((el) => (
              <Card tittle={"Roofing Service"} url={roofting} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
