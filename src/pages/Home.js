import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/pages/css/home.css";
import { FaEye, FaHeart } from "react-icons/fa";
import CardCarousel3D from "../components/CardCarousel3D";

// image import section

import mainimage from "../images/mainimagekhana.png";
import aboutback from "../images/about-bg.jpg";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import food1 from "../images/food1.avif";
import food2 from "../images/food2.avif";
import food3 from "../images/food3.avif";
import food4 from "../images/food4.avif";
import food5 from "../images/food5.avif";
import food6 from "../images/food6.avif";
import Partners from "../components/Partners";
import FAQ from "../components/Faq";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false); // State to toggle Show More/Show Less

  const products = [
    {
      title: "Ham Sandwich",
      price: "$10.50",
      desc: "Enjoy a classic ham sandwich with a modern twist.",
      images: [food1, food2, food3, food4],
      rating: 4.5,
    },
    {
      title: "Burger & Chips",
      price: "$8.50",
      desc: "Juicy burgers served with crispy golden fries.",
      images: [food2, food2, food3, food4],
      rating: 4.2,
    },
    {
      title: "Bacon and Eggs",
      price: "$14.50",
      desc: "A hearty breakfast plate loaded with flavors.",
      images: [food3, food2, food3, food4],
      rating: 4.7,
    },
    {
      title: "Grilled Meat",
      price: "$20.00",
      desc: "Tender, smoky grilled meat to satisfy your cravings.",
      images: [food4, food2, food3, food4],
      rating: 4.8,
    },
    {
      title: "Pasta",
      price: "$14.00",
      desc: "Rich and creamy pasta made with the finest sauces.",
      images: [food5, food2, food3, food4],
      rating: 4.4,
    },
    {
      title: "Donuts",
      price: "$2.50",
      desc: "Sweet, colorful donuts fresh from the oven!",
      images: [food6, food2, food3, food4],
      rating: 4.6,
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleShowMoreToggle = () => {
    setShowMore(!showMore); // Toggle the state to show more or less
  };

  return (
    <div>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span>Welcome to our</span>
          <h1>
            Healthy Food <br />
            Collection!
          </h1>
          <p>
            Discover our carefully curated selection of nutritious and delicious
            meals, made with fresh ingredients to nourish your body and delight
            your taste buds
          </p>
          <Link to="#" className="primary-button">
            Our Menu
          </Link>
        </div>
        <div className="hero-image">
          <img src={mainimage} className="hero-section-img" alt="food" />
        </div>
      </section>

      <section
        className="deals-section"
        style={{
          background: `url(${aboutback}) no-repeat center`,
          backgroundSize: "cover",
        }}
        id="about"
      >
        <h1>Today's Deals</h1>
        <div className="deals-container">
          <div className="deal-card">
            <div className="deal-card-img">
              <img src={about1} alt="about" />
            </div>
            <h3>Chicken and Eggs Salad (Extra Portion)</h3>
            <h2>$ 14.99</h2>
          </div>
          <div className="deal-card">
            <div className="deal-card-img">
              <img src={about2} alt="about" />
            </div>
            <h3>Chicken and Eggs Salad</h3>
            <h2>$ 9.99</h2>
          </div>
          <div className="deal-card">
            <div className="deal-card-img">
              <img src={about3} alt="about" />
            </div>
            <h3>Green Salad with Cheese</h3>
            <h2>$ 7.99</h2>
          </div>
          <div className="deal-card">
            <div className="deal-card-img">
              <img src={about4} alt="about" />
            </div>
            <h3>Mixed Colorful Salad</h3>
            <h2>$ 9.99</h2>
          </div>
        </div>
      </section>

      <div className="page-wrapper">
        <div className="container-unique">
          <h2 className="section-heading-unique">Discover Delicious Foods</h2>
          <p className="section-subtext-unique">
            A collection of mouth-watering dishes that will satisfy all your
            cravings. Fresh ingredients, prepared with love!
          </p>

          <div className="grid-gallery-unique">
            {products
              .slice(0, showMore ? products.length : 3)
              .map((product, index) => (
                <div className="card-box-unique" key={index}>
                  <div
                    className="icon-wrapper-unique"
                    onClick={() => openModal(product)}
                  >
                    <FaEye className="view-icon-unique" />
                  </div>
                  <img
                    className="card-image-unique"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div className="card-details-unique">
                    <div className="card-header-unique">
                      <h4 className="card-title-unique">{product.title}</h4>
                      <span className="card-price-unique">{product.price}</span>
                    </div>
                    <p className="card-description-unique">{product.desc}</p>
                    <div className="wishlist-wrapper-unique">
                      <FaHeart className="wishlist-icon-unique" />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mt-4">
              <button
                className="show-more-button"
                onClick={handleShowMoreToggle}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
        {/* Modal */}
        {isModalOpen && selectedProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                X
              </button>

              {/* Modal Body - Using Bootstrap Grid */}
              <div className="row">
                {/* Image Section (col-md-6 for the image) */}
                <div className="col-md-6">
                  <div className="modal-images-wrapper">
                    {/* Main Large Image (col-12 for full width) */}
                    <div className="modal-image-main">
                      <img src={selectedProduct.images[0]} alt="Main Product" />
                    </div>

                    {/* Thumbnails (4 small images below the large image) */}
                    <div className="modal-image-thumbnails">
                      {selectedProduct.images.slice(1, 5).map((img, idx) => (
                        <img key={idx} src={img} alt={`Thumbnail ${idx}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details Section (col-md-6 for the details) */}
                <div className="col-md-6">
                  <h2>{selectedProduct.title}</h2>
                  <p>{selectedProduct.desc}</p>
                  <p>
                    <strong>Price:</strong> {selectedProduct.price}
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {selectedProduct.rating}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    className="btn-add-to-cart"
                    // onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <CardCarousel3D />
      < Partners/>
      <FAQ/>
    </div>
  );
};

export default Home;
