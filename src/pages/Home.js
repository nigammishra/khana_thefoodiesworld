import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/pages/css/home.css";
import { FaEye, FaHeart } from "react-icons/fa";

const Home = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const products = [
      {
        title: "Ham Sandwich",
        price: "$10.50",
        desc: "Enjoy a classic ham sandwich with a modern twist.",
        images: [
          "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1550304952-9d1e3444f713?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.5
      },
      {
        title: "Burger & Chips",
        price: "$8.50",
        desc: "Juicy burgers served with crispy golden fries.",
        images: [
          "https://images.unsplash.com/photo-1550304952-9d1e3444f713?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.2
      },
      {
        title: "Bacon and Eggs",
        price: "$14.50",
        desc: "A hearty breakfast plate loaded with flavors.",
        images: [
          "https://images.unsplash.com/photo-1558672367-241cd1a01b16?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.7
      },
      {
        title: "Grilled Meat",
        price: "$20.00",
        desc: "Tender, smoky grilled meat to satisfy your cravings.",
        images: [
          "https://images.unsplash.com/photo-1544524696-57f8d9770452?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1555992336-03a23c9d8492?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.8
      },
      {
        title: "Pasta",
        price: "$14.00",
        desc: "Rich and creamy pasta made with the finest sauces.",
        images: [
          "https://images.unsplash.com/photo-1553842306-6ea7d5c6b152?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.4
      },
      {
        title: "Donuts",
        price: "$2.50",
        desc: "Sweet, colorful donuts fresh from the oven!",
        images: [
          "https://images.unsplash.com/photo-1562945431-4b74ce618c66?auto=format&fit=crop&w=400&q=60",
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.6
      }
    ];
    
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null);
    };
  return (
    <div>
      <>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span>Welcome to our</span>
            <h1>
              Healthy Food <br />
              Collection!
            </h1>
            <p>
              Discover our carefully curated selection of nutritious and
              delicious meals, made with fresh ingredients to nourish your body
              and delight your taste buds
            </p>
            <Link to="#" className="primary-button">
              Our Menu
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://i.postimg.cc/gJBk5PMz/salad.png"
              className="hero-section-img"
              alt="food"
            />
          </div>
        </section>
      </>

      <>
        {/* Deals Section */}
        <section className="deals-section" id="about">
          <h1>Today's Deals</h1>
          <div className="deals-container">
            <div className="deal-card">
              <div className="deal-card-img">
                <img
                  src="https://i.postimg.cc/TwS5bmvJ/about1.png"
                  alt="about  "
                />
              </div>
              <h3>Chicken and Eggs Salad (Extra Portion)</h3>
              <h2>$ 14.99</h2>
            </div>
            <div className="deal-card">
              <div className="deal-card-img">
                <img
                  src="https://i.postimg.cc/wxw6TJd1/about2.png"
                  alt="about  "
                />
              </div>
              <h3>Chicken and Eggs Salad</h3>
              <h2>$ 9.99</h2>
            </div>
            <div className="deal-card">
              <div className="deal-card-img">
                <img
                  src="https://i.postimg.cc/zXWHL0Dd/about3.png"
                  alt="about "
                />
              </div>
              <h3>Green Salad with Cheese</h3>
              <h2>$ 7.99</h2>
            </div>
            <div className="deal-card">
              <div className="deal-card-img">
                <img
                  src="https://i.postimg.cc/9QLmz798/about4.png"
                  alt="about "
                />
              </div>
              <h3>Mixed Colorful Salad</h3>
              <h2>$ 9.99</h2>
            </div>
          </div>
        </section>
      </>

     

      <>
      <div className="page-wrapper">
        <div className="container-unique">
          <h2 className="section-heading-unique">Discover Delicious Foods</h2>
          <p className="section-subtext-unique">
            A collection of mouth-watering dishes that will satisfy all your cravings. Fresh ingredients, prepared with love!
          </p>

          <div className="grid-gallery-unique">
            {products.map((product, index) => (
              <div className="card-box-unique" key={index}>
                <div className="icon-wrapper-unique" onClick={() => openModal(product)}>
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
        </div>

     {/* Modal */}
{isModalOpen && selectedProduct && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={closeModal}>X</button>

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
          <p><strong>Price:</strong> {selectedProduct.price}</p>
          <p><strong>Rating:</strong> ⭐ {selectedProduct.rating}</p>

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
    </>
    </div>
  );
};

export default Home;
