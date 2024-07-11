import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState(""); //state for success message

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1t8kdn", //service ID from EmailJS
        "template_7svcypd", //template ID from EmailJS
        e.target,
        "FY-fVWo5OeAZ2Kts6" //public key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setSuccessMessage("Email sent to Paing Su successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="colorlib-contact" data-section="contact">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Get in Touch</span>
            <h2 className="colorlib-heading">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                {/* <i className="icon-globe-outline"></i> */}
                {/* <i style={{ backgroundImage: "url(images/gmail.jpg)" }}></i> */}
                <img src="images/gmail.png" className="contact-icon" />
              </div>
              <div className="colorlib-text">
                <p>
                  <a href="mailto:moonps111@gmail.com">moonps111@gmail.com</a>
                </p>
              </div>
            </div>
            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                <i className="icon-map"></i>
              </div>
              <div className="colorlib-text">
                <p>Singapore</p>
              </div>
            </div>
            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="colorlib-text">
                <p>
                  <a href="tel://+6598939279">+65 98939279</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-md-push-1">
            <div className="row">
              <div
                className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                data-animate-effect="fadeInRight"
              >
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    {/* <input
                      type="submit"
                      className="btn btn-primary btn-send-message"
                      value="Send Message"
                    /> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-send-message"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
