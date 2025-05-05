import React from "react";
import { Link } from "react-router-dom";
import Partners from "../components/Partners";
import SocialNetworksCarousel from "../components/SocialMediaLinks";
// import {
//   FaFacebookSquare,
//   FaInstagram,
//   FaTwitter,
//   FaHeadset,
//   FaEnvelopeOpenText,
//   FaMapMarkedAlt,
// } from "react-icons/fa";
import "../../src/pages/css/contact.css";

const Contact = () => {
  return (
    <div>
      <>
        {/* Inner Page Banner */}
        <div className="inner-page-banner-area">
          <div className="container">
            <div className="pagination-area">
              <h2>Contact</h2>
              <ul>
                <li>
                  <Link to="/khana_thefoodiesworld/">Home -</Link> /
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </>

      <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title p-4">Get in Touch</h1>
          </div>
          <div className="col-12">
            <p className="section-description">
              Got feedback, a recipe request, or want to collaborate? Drop us a
              message — we’re always hungry for your thoughts!
            </p>
          </div>
        </div>
      </div>

      <section
        className="section-bg-style"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-scroll-index={7}
      >
        <div className="overlay py-5">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-info">
                  <h2 className="contact-title">Have Any Questions?</h2>
                  <p>
                    Whether you're curious about a recipe, have dietary concerns,
                    or just want to share your love for food — we’re all ears!
                    Drop us a message and our team will get back to you faster
                    than your oven preheats.
                  </p>
                  <ul className="contact-list">
                    <li>
                      <div className="info-left">
                        <i className="fas fa-mobile-alt" />
                      </div>
                      <div className="info-right">
                        <h4>+91 8260821103</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-left">
                        <i className="fas fa-at" />
                      </div>
                      <div className="info-right">
                        <h4>frontendace@gmail.com</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-left">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info-right">
                        <h4>754209, Bhubaneswar, Odisha, INDIA</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-form w-100">
                  <form id="contact-form" method="POST">
                    <input type="hidden" name="form-name" value="contactForm" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Your Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your Email *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            rows={4}
                            name="message"
                            className="form-control"
                            placeholder="Enter Your Message *"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn-big btn btn-bg" type="submit">
                          Send Us <i className="fas fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Form */}
            </div>
          </div>
        </div>
      </section>
    </>
      <>
        {/* Google Map Section */}
        <section className="map_sec mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore quo beatae quasi assumenda...
                  </p>
                  <div className="map_bind">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <>
        <SocialNetworksCarousel />
        <Partners />
      </>
    </div>
  );
};

export default Contact;
