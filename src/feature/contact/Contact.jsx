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
          <div>
            <iframe
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.57954777339!2d26.012237252570365!3d44.43791870165346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sge!4v1709025932966!5m2!1sen!2sge"
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
              <span>Inniscarra Main Street, Rathcoole, D24 EO29</span>
            </div>
          </div>
          <div id="contactCard">
            <div>
              <div className="line">
                <h6>Make a Call</h6>
              </div>
            </div>
            <div className="content">
              <span className="icon">
                <img src={phone} />
              </span>
              <h3>+353 83 333 6639</h3>
              <span>Mon - Fri: 0-24</span>
            </div>
          </div>
          <div id="contactCard">
            <div>
              <div className="line">
                <h6>Send a Mail</h6>
              </div>
            </div>
            <div className="content">
              <span className="icon">
                <img src={mail} />
              </span>
              <span>info@oisinroofingandguttering.ie4</span>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
