import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
} from "react-icons/fa";
import "./footer.css"; // Assuming you will put the CSS in this file
import { Link } from "react-router-dom";
import logo from "../images/white-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer CTA */}
        <div className="footer-cta pt-3 pb-3">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaMapMarkerAlt size={30} style={{marginTop:"-30px"}} color="#46b340" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span> Bhubaneswar, odisha</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaPhone size={30} style={{marginTop:"-30px"}} color="#46b340" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>8260821103</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaEnvelopeOpen size={30} style={{marginTop:"-30px"}} color="#46b340" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>frontendace@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="index.html">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    🍕 Food lovers live in a world of their own, Where every
                    bite feels like love that's grown. No heartbreaks, no drama,
                    no tales of despair, Just flavors that wow — that's all we
                    care! 😋
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <Link to="#">
                    <FaFacebookF className="facebook-bg" />
                  </Link>
                  <Link to="#">
                    <FaTwitter className="twitter-bg" />
                  </Link>
                  <Link to="#">
                    <FaGooglePlusG className="google-bg" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/khana_thefoodiesworld/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link to="/recipes">Recipes</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contact</Link>
                  </li>
                  <li>
                    <Link to="/shopdetails">Shop Details</Link>
                  </li>
                  <li>
                    <Link to="/account/orders-details">OrdersDetails</Link>
                  </li>
                  <li>
                    <Link to="/account/payment-methods">PaymentMethods</Link>
                  </li>
                  <li>
                    <Link to="/account/wishlist-items">WishlistItems</Link>
                  </li>
                  <li>
                    <Link to="/account/settings">Settings</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FaTelegramPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2025, All Rights Reserved{" "}
                  <Link to="https://nigammishra.github.io/Nigam_mishra/">Frontend Ace</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/khana_thefoodiesworld/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Terms</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#">Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
