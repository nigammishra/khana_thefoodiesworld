import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./stylee.css";

const SocialNetworksCarousel = () => {
  return (
    <section className="container text-center mt-8 py-5 my-2 my-md-4 my-lg-5">
      <Slide direction="up">
        <h2 className="h1 mb-4">We Have Social Networks</h2>
        <p className="fs-lg text-muted pb-2 mb-5">
          Follow us and keep up to date with the freshest news!
        </p>
      </Slide>
      <div className="row social-carousel">
        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
            >
              <i className="bx bxl-facebook bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">Facebook</h6>
          </div>
        </div>

        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
            >
              <i className="bx bxl-instagram bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">Instagram</h6>
          </div>
        </div>

        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-twitter btn-lg stretched-link"
            >
              <i className="bx bxl-twitter bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">Twitter</h6>
          </div>
        </div>

        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-linkedin btn-lg stretched-link"
            >
              <i className="bx bxl-linkedin bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">LinkedIn</h6>
          </div>
        </div>

        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
            >
              <i className="bx bxl-youtube bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">YouTube</h6>
          </div>
        </div>

        <div className="col-md-2 social-slide">
          <Zoom>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-dribbble btn-lg stretched-link"
            >
              <i className="bx bxl-dribbble bxx"></i>
            </Link>
          </Zoom>
          <div className="pt-4">
            <h6 className="mb-1">Dribbble</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworksCarousel;
