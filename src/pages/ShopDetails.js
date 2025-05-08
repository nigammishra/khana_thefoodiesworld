 import React, { useEffect, useState } from "react";
import ClampLines from "react-clamp-lines";
import "../../src/pages/css/shopdetails.css"; // Ensure your styles for projcard are here
import { Link } from "react-router-dom";
import SocialNetworksCarousel from "../components/SocialMediaLinks";
import Partners from "../components/Partners";
import shop1 from "../images/shop1.jpg";
import shop2 from "../images/shop2.avif"; 
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderOne from "../Loaders/LoaderOne";

const projCards = [
  {
    img: shop1,
    title: "Adda Unplugged – Jagmohan Nagar",
    subtitle: "A cozy food hub offering a variety of cuisines and hookahs",
    description:
      "Adda Unplugged offers a great ambiance with a variety of cuisines including North Indian, Continental, Italian, and more. Popular dishes include Tempura Chicken, BBQ Chicken, Paneer Tikka, and Prawn. It also has home delivery and takeaway services.",
    tags: ["North Indian", "Continental", "Italian", "BBQ"],
    color: "projcard-blue",
    shopLink: "/shop-details/adda-unplugged",  // Link to the shop's detailed page
  },
  {
    img: shop2,
    title: "Food2U Bhubaneswar",
    subtitle: "Your go-to food delivery service in Bhubaneswar",
    description:
      "Food2U is a food delivery service that caters to multiple restaurants in Bhubaneswar, including the Jagamara area. Available on platforms like Swiggy and Zomato, it brings a variety of cuisines right to your doorstep.",
    tags: ["Delivery", "Swiggy", "Zomato", "Convenient"],
    color: "projcard-red",
    shopLink: "/shop-details/food2u",  // Link to the shop's detailed page
  },
];

const ShopDetails = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => setLoading(false), 4000);  // Loader duration
    return () => clearTimeout(timeout);
  }, []);

  // If loading, show the loader
  if (loading) return <LoaderOne />;
  return (
    <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Shop Details</h2>
            <ul>
              <li>
                <Link to="/khana_thefoodiesworld/">Home -</Link> /
              </li>
              <li>Shop details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projcard-container">
        {projCards.map((card, index) => (
          <div
            className={`projcard ${card.color} card-web`}
            key={index}
            style={
              card.color === "projcard-customcolor"
                ? { "--projcard-color": "#F5AF41" }
                : {}
            }
          >
            <div className="projcard-innerbox">
              <img className="projcard-img" src={card.img} alt={card.title} />
              <div className="projcard-textbox">
                <div className="projcard-title">{card.title}</div>
                <div className="projcard-subtitle">{card.subtitle}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">
                  <ClampLines
                    text={card.description}
                    id={`clamp-${index}`}
                    lines={6}
                    buttons={false}
                  />
                 
                </div>
                <div className="projcard-button">
                  <Link to={card.shopLink} className="btn btn-primary">
                    View the Shop
                  </Link>
                </div>
                <div className="projcard-tagbox">
                  {card.tags.map((tag, i) => (
                    <span className="projcard-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Add a View the Shop button */}
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {projCards.map((card, index) => (
          <div className="col card-mobile" key={index}>
            <div className="card h-100">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-title">{card.subtitle}</h6>
                <p className="card-text">{card.description}</p>
                {/* Add a View the Shop button in mobile view */}
                <Link to={card.shopLink} className="btn btn-primary">
                  View the Shop
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SocialNetworksCarousel />
      <Partners />
    </>
  );
};

export default ShopDetails;
