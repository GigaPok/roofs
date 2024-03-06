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
              <h3>About to KM Construction</h3>
              <h2> KM Construction</h2>
              <p>
                Welcome to KM Construction, Ireland's leading provider of
                top-quality , building services. Based in Dublin and serving
                clients throughout Ireland, our company has established a solid
                reputation for delivering professional results, exceptional
                expertise, and an unparalleled commitment to customer
                satisfaction. At KMC, we understand the importance of time and
                efficiency. We pride ourselves on our quick turn around time
                without compromising the quality of our services. Our efficient
                and streamlined processes enable us to complete projects
                promptly, providingyou the benefits of a fully functional and
                aesthetically pleasing painting, external insulation, tilinig,
                roofing, guttering, or chimney system in no time.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="content">
              <h3>Professional building Specialists</h3>
              <h2> KM Construction</h2>
              <p>
                Professional building Specialists With years of industry
                experience, our team of highly skilled professionals possesses
                the knowledge and expertise necessary to handle all your
                building sevices needs. Whether it's a residential or commercial
                project, we bring a meticulous attention to detail and a
                dedication to craftsmanship that ensures the highest standards
                of workmanship. We believe in personalized service, which is why
                we take the time to understand your unique requirements and
                goals. By tailoring our solutions to meet your specific needs,
                we deliver results that not only meet but exceed
                your expectations
              </p>
            </div>
            <img className="box-1-img" src={rofing2} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
