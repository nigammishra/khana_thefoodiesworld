import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/pages/css/recipes.css";
import "../../src/pages/css/menu.css";
import { FaEye, FaHeart } from "react-icons/fa";
import SocialNetworksCarousel from "../components/SocialMediaLinks";
import Partners from "../components/Partners";
import LoaderOne from "../../src/Loaders/LoaderOne";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Burgers");
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoaderOne />;

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

const foodData = {
  Breakfast: [
    {
      title: "Pancakes with Syrup",
      price: "$5.99",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      desc: "Fluffy pancakes drizzled with maple syrup and butter.",
    },
    {
      title: "Omelette",
      price: "$4.49",
      img: "https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg",
      desc: "A protein-packed omelette with veggies and cheese.",
    },
  ],
  Lunch: [
    {
      title: "Grilled Chicken Rice Bowl",
      price: "$9.99",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      desc: "Nutritious rice bowl with grilled chicken and veggies.",
    },
  ],
  Dinner: [
    {
      title: "Steak with Veggies",
      price: "$14.99",
      img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
      desc: "Juicy steak served with mashed potatoes and veggies.",
    },
  ],
  Snacks: [
    {
      title: "French Fries",
      price: "$3.99",
      img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
      desc: "Crispy golden fries served with ketchup.",
    },
  ],
  Appetizers: [
    {
      title: "Garlic Bread",
      price: "$2.99",
      img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      desc: "Toasted garlic bread with butter and herbs.",
    },
  ],
  Soups: [
    {
      title: "Tomato Basil Soup",
      price: "$4.99",
      img: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
      desc: "Smooth tomato soup topped with fresh basil.",
    },
  ],
  Salads: [
    {
      title: "Greek Salad",
      price: "$6.49",
      img: "https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg",
      desc: "Classic salad with feta, olives, and cucumbers.",
    },
  ],
  Burgers: [
    {
      title: "Cheese Loaded Burger",
      price: "$8.99",
      img: "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg",
      desc: "Melted cheese meets juicy patty in this food lover’s dream.",
    },
  ],
  Pizza: [
    {
      title: "Pepperoni Pizza",
      price: "$11.99",
      img: "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg",
      desc: "Classic pizza topped with mozzarella and pepperoni.",
    },
  ],
  Pasta: [
    {
      title: "Pesto Spaghetti",
      price: "$9.49",
      img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      desc: "Enjoy a green twist with fresh pesto and parmesan.",
    },
  ],
  Sandwiches: [
    {
      title: "Club Sandwich",
      price: "$6.99",
      img: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
      desc: "Stacked with chicken, cheese, lettuce, and tomatoes.",
    },
  ],
  Seafood: [
    {
      title: "Grilled Salmon",
      price: "$13.49",
      img: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg",
      desc: "Perfectly grilled salmon with lemon butter sauce.",
    },
  ],
  Chicken: [
    {
      title: "Fried Chicken",
      price: "$7.99",
      img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
      desc: "Crispy fried chicken with spices and herbs.",
    },
  ],
  Meat: [
    {
      title: "Beef Curry",
      price: "$12.49",
      img: "https://images.pexels.com/photos/5938/food-pot-kitchen-cooking.jpg",
      desc: "Tender beef chunks simmered in a spicy curry sauce.",
    },
  ],
  Vegan: [
    {
      title: "Vegan Buddha Bowl",
      price: "$10.99",
      img: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg",
      desc: "Wholesome bowl of grains, veggies, and plant protein.",
    },
  ],
  Rice: [
    {
      title: "Chicken Biryani",
      price: "$11.49",
      img: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
      desc: "Aromatic rice dish cooked with chicken and spices.",
    },
  ],
  BBQ: [
    {
      title: "BBQ Ribs",
      price: "$14.49",
      img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
      desc: "Slow-cooked ribs with smoky BBQ sauce.",
    },
  ],
  Desserts: [
    {
      title: "Chocolate Cake",
      price: "$5.49",
      img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      desc: "Rich and moist chocolate cake for sweet lovers.",
    },
  ],
  IceCream: [
    {
      title: "Ice Cream Sundae",
      price: "$4.99",
      img: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
      desc: "Cool off with layers of ice cream, syrup, and toppings.",
    },
  ],
  Drinks: [
    {
      title: "Cold Brew Coffee",
      price: "$3.49",
      img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
      desc: "Bold cold brew for coffee enthusiasts.",
    },
  ],
};


  return (
    <div className="recipes-page">
      {/* Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Our Recipes</h2>
            <ul>
              <li>
                <Link to="/khana_thefoodiesworld/">Home -</Link> /
              </li>
              <li>Our Menu</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Food Section */}
      <div className="container">
      <div className="food-section">
        <h1 className="section-title">Explore Delicious Food</h1>
        <p className="section-description">
          Discover your next meal from curated categories of mouthwatering
          dishes prepared with love.
        </p>

        {/* Tabs */}
        <div className="horizontal-tabs">
          {Object.keys(foodData).map((category) => (
            <button
              key={category}
              className={`tab-button ${
                activeTab === category ? "active" : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid-gallery-unique">
          {foodData[activeTab]
            .slice(0, showMore ? foodData[activeTab].length : 3)
            .map((product, index) => (
              <div
                className="card-box-unique"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="icon-wrapper-unique"
                  onClick={() => openModal(product)}
                >
                  <FaEye className="view-icon-unique" />
                </div>
                <img
                  className="card-image-unique"
                  src={product.img}
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

        {/* Show More */}
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
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedProduct.title}</h2>
              <span className="modal-price">{selectedProduct.price}</span>
              <p>{selectedProduct.desc}</p>
              <div className="modal-actions">
                <button className="add-to-cart">Add to Cart</button>
                <button className="wishlist-btn">❤️ Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social + Partners */}
      <>
        <SocialNetworksCarousel />
        <Partners />
      </>
    </div>
  );
};

export default Menu;
