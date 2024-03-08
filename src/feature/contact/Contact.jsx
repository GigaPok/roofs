import React from "react";
import "./Contact.scss";
import { MainLayout } from "../../core";
import { ContactForm } from "../../shared/form/ContactForm";
import location from "../../assets/svg/location.svg";
import mail from "../../assets/svg/mail.svg";
import phone from "../../assets/svg/tel.svg";

export const Contact = () => {
  return (
    <MainLayout>
      <div id="contact">
        <section>
          <div className="back-img">
            <span>Contact</span>
            <div className="opacity"></div>
          </div>
        </section>
        <section className="sec-2 container">
          <div className="sMap">
            <iframe
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2378.2385939920946!2d-6.355800923264472!3d53.41055897230796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDI0JzM4LjAiTiA2wrAyMScxMS42Ilc!5e0!3m2!1sen!2sie!4v1709905974147!5m2!1sen!2sie"
            ></iframe>
          </div>
          <div>
            <ContactForm />
          </div>
        </section>
        <section className="sec-3 container">
          <div id="contactCard">
            <div>
              <div className="line">
                <h6>Our Address</h6>
              </div>
            </div>
            <div className="content">
              <span className="icon">
                <img src={location} />
              </span>
              <h3>Dublin</h3>
              <span>205 Bymac Centre Northwest Business Park Ballycoolin</span>
            </div>
          </div>
          <div id="contactCard">
            <div>
              <div className="line">
                <h6>Make a Call</h6>
              </div>
            </div>
            <a href="tel:+353 89 424 6491">
              <div className="content">
                <span className="icon">
                  <img src={phone} />
                </span>
                <h3>+353 89 424 6491</h3>
                <span>Mon - Fri: 0-24</span>
              </div>
            </a>
          </div>
          <div id="contactCard">
            <div>
              <div className="line">
                <h6>Send a Mail</h6>
              </div>
            </div>
            <a href="mailto:Thekmconstruction@gmail.com">
              <div className="content">
                <span className="icon">
                  <img src={mail} />
                </span>
                <span>Thekmconstruction@gmail.com</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
