import React from 'react'
import { Link } from 'react-router-dom'
import Partners from '../components/Partners'
import SocialNetworksCarousel from '../components/SocialMediaLinks'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";
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
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      </>

      <>
       {/* Contact Us Section */}
       <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>
                          Got a craving or a question? We’d love to hear from you! Whether it's about a
                          reservation or a recipe, we’ll respond ASAP.
                        </p>
                        <input type="text" className="form-control form-group" placeholder="Name" />
                        <input type="email" className="form-control form-group" placeholder="Email" />
                        <textarea className="form-control form-group" placeholder="Message" />
                        <button className="contact_form_submit btn btn-success">Send</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <ul className="socil_item_inner d-flex list-unstyled">
                        <li>
                          <Link to="#"><FaFacebookSquare size={24} /></Link>
                        </li>
                        <li>
                          <Link to="#"><FaInstagram size={24} /></Link>
                        </li>
                        <li>
                          <Link to="#"><FaTwitter size={24} /></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="contact_info_sec mt-4">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <FaHeadset className="me-2" />
                    <span>+91 8260821103</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <FaEnvelopeOpenText className="me-2" />
                    <span>frontendace@info.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <FaMapMarkedAlt className="me-2" />
                    <span>754209 Bhubanewar, Odisha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map_sec mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda...</p>
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
      < SocialNetworksCarousel/>
      < Partners/>
      </>
    </div>
  )
}

export default Contact