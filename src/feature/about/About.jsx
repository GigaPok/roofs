import React from "react";
import "./About.scss";
import { MainLayout } from "../../core";
import rofing from "../../assets/roofing.jpg";
import rofing2 from "../../assets/roofing2.jpg";

export const About = () => {
  return (
    <MainLayout>
      <div id="about">
        <section>
          <div className="back-img">
            <span>About Us</span>
            <div className="opacity"></div>
          </div>
        </section>
        <section className="sec-2 container">
          <div className="wrapper">
            <img className="box-1-img" src={rofing} />
            <div className="content">
              <h3>About Oisin Roofing and Guttering</h3>
              <h2>Professional Roofing Specialists</h2>
              <p>
                Welcome to Oisin Roofing and Guttering, Ireland's leading
                provider of top-quality roofing, guttering, and chimney
                installation and repair services. Based in Dublin and serving
                clients throughout Ireland, our company has established a solid
                reputation for delivering professional results, exceptional
                expertise, and an unparalleled commitment to customer
                satisfaction. At Oisin Roofing and Guttering, we understand the
                importance of time and efficiency. We pride ourselves on our
                quick turn around time without compromising the quality of our
                services. Our efficient and streamlined processes enable us to
                complete projects promptly, providingyou the benefits of a fully
                functional and aesthetically pleasing roofing, guttering, or
                chimney system in no time.
              </p>
            </div>
          </div>
        </section>
        <section className="sec-2 container">
          <div className="wrapper">
            <div className="content">
              <h3>About Oisin Roofing and Guttering</h3>
              <h2>Professional Roofing Specialists</h2>
              <p>
                Welcome to Oisin Roofing and Guttering, Ireland's leading
                provider of top-quality roofing, guttering, and chimney
                installation and repair services. Based in Dublin and serving
                clients throughout Ireland, our company has established a solid
                reputation for delivering professional results, exceptional
                expertise, and an unparalleled commitment to customer
                satisfaction. At Oisin Roofing and Guttering, we understand the
                importance of time and efficiency. We pride ourselves on our
                quick turn around time without compromising the quality of our
                services. Our efficient and streamlined processes enable us to
                complete projects promptly, providingyou the benefits of a fully
                functional and aesthetically pleasing roofing, guttering, or
                chimney system in no time.
              </p>
            </div>
            <img className="box-1-img" src={rofing2} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
