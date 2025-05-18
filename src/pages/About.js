import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/pages/css/about.css";
import { Link } from "react-router-dom";
import aboutimage from "../images/about.png";
import about2 from "../images/about-main2.png";
import bottomimage from "../images/wht-choose-us.webp";
import Partners from "../components/Partners";
// import Slider from "react-slick";
// import team1 from "../images/team1.jpeg";
// import team2 from "../images/team2.jpg";
// import team3 from "../images/team3.png";
import LoaderOne from "../Loaders/LoaderOne";
import TeamCarousel from "../components/Team";
// import signature from "../images/signature.png";
// const teamData = [
//   {
//     name: "Alice Johnson",
//     achievement: "Top Chef 2022",
//     photo: team1,
//   },
//   {
//     name: "Bob Smith",
//     achievement: "Fastest Delivery 2023",
//     photo: team2,
//   },
//   {
//     name: "Catherine Lee",
//     achievement: "Customer Hero 2023",
//     photo: team3,
//   },
//   {
//     name: "David Kim",
//     achievement: "Innovation Award 2022",
//     photo: team1,
//   },
// ];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => setLoading(false), 4000);  // Loader duration
    return () => clearTimeout(timeout);
  }, []);

  // If loading, show the loader
  if (loading) return <LoaderOne />;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: { slidesToShow: 1 },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: { slidesToShow: 2 },
  //     },
  //   ],
  // };

  return (
    <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link to="/">Home -</Link> /
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>

      <>
      <section className="abt-about-section">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-6 col-md-12 col-sm-12 order-2"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="abt-about-content">
          <div className="abt-sec-title">
            <span className="abt-title">About Us</span>
            <h2>
              We are food lovers <br />
              serving delicious bites since 2010
            </h2>
          </div>
          <div className="abt-about-text">
            At FoodieHaven, we believe great food brings people together. Since
            2010, we’ve been delivering freshly prepared meals from your
            favorite local restaurants straight to your doorstep — hot, fast,
            and full of flavor. Whether you crave spicy street food or healthy
            home-style meals, we’ve got it all in one place.
          </div>
          <ul className="abt-list">
            <li>Fresh and hygienic ingredients only</li>
            <li>Lightning-fast doorstep delivery</li>
            <li>Curated by foodies, for foodies</li>
          </ul>
          <div className="abt-about-btn-box">
            <Link to="#" className="abt-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-lg-6 col-md-12 col-sm-12 abt-image-column"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="abt-inner-image">
          <figure className="abt-image-1" data-aos="zoom-in" data-aos-delay="300">
            <Link to="#" className="lightbox-image" data-fancybox="images">
              <img src={aboutimage} alt="about" />
            </Link>
          </figure>
          <figure className="abt-image-2" data-aos="zoom-in-up" data-aos-delay="400">
            <Link to="#" className="lightbox-image" data-fancybox="images">
              <img src={about2} alt="about" />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

      </>

      <>
        <div className="why-choose-agile py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h3 className="heading" data-aos="fade-up" data-aos-delay={10}>
                <span style={{ color: "#fff" }}>
                  Why <span style={{ color: "#4CAF50" }}>Choose</span> Us
                </span>
              </h3>
              <p
                data-aos="fade-up"
                style={{ color: "#fff" }}
                data-aos-delay={30}
              >
                We Are the Foodies-Friendly Website
              </p>
              <div className="agileits-border mx-auto my-3" />
            </div>

            <div className="row">
              {/* Left Column */}
              <div className="col-md-4">
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4>User-Friendly Interface</h4>
                      <p>
                        Our platform is designed for ease, offering a seamless
                        browsing and ordering experience.
                      </p>
                    </div>
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-laptop" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4>Fast Delivery</h4>
                      <p>
                        We ensure your favorite meals reach your doorstep piping
                        hot and on time.
                      </p>
                    </div>
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-bicycle" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4>Diverse Cuisine Options</h4>
                      <p>
                        From street food to gourmet, enjoy a wide variety of
                        dishes curated for every taste.
                      </p>
                    </div>
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-cutlery" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <div
                className="col-md-4 d-flex justify-content-center align-items-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={bottomimage}
                  alt="Why choose us"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "550px" }}
                />
              </div>

              {/* Right Column */}
              <div className="col-md-4">
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row align-items-center">
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <div className="col-9">
                      <h4>Top Rated Restaurants</h4>
                      <p>
                        We partner with the best eateries to ensure top-quality
                        food every time you order.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row align-items-center">
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-thumbs-up" />
                      </div>
                    </div>
                    <div className="col-9">
                      <h4>Trusted by Foodies</h4>
                      <p>
                        Join thousands of happy customers who rely on us for
                        their daily cravings and special meals.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="row align-items-center">
                    <div className="col-3 text-center">
                      <div className="icon-box">
                        <i className="fa fa-headphones" />
                      </div>
                    </div>
                    <div className="col-9">
                      <h4>24/7 Customer Support</h4>
                      <p>
                        Need help? Our support team is available round the clock
                        to assist you with any issue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TeamCarousel/>
        <Partners />
        
        {/* <>
          <div className="py-5 bg-light">
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <div className="container">
              <Slider {...settings}>
                {teamData.map((member, index) => (
                  <div key={index} className="p-3">
                    <div className="card text-center shadow-sm border-0 rounded-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="card-img-top rounded-top-4"
                        style={{height:'400px',objectFit:'cover'}}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{member.name}</h5>
                        <p className="card-text text-muted">
                          {member.achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </> */}
      </>
    </>
  );
};

export default About;
