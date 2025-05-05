import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/pages/css/recipes.css";
import "../../src/pages/css/menu.css";
import SocialNetworksCarousel from "../components/SocialMediaLinks";
import Partners from "../components/Partners";

const Menu = () => {
   const [activeTab, setActiveTab] = useState('Burgers');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const recipeData = [
    {
      icon: "fa-cutlery",
      title: "Delicious Breakfast",
      desc: "Start your day with our nutritious and easy-to-make breakfast ideas. Fuel your body the right way.",
      delay: 0,
    },
    {
      icon: "fa-glass",
      title: "Refreshing Drinks",
      desc: "Stay hydrated with our delicious smoothies, juices, and cool beverages for any season.",
      delay: 200,
    },
    {
      icon: "fa-lemon-o",
      title: "Tasty Starters",
      desc: "Try our starters and appetizers to kick off your meal with a burst of flavor and spice.",
      delay: 300,
    },
    {
      icon: "fa-cutlery",
      title: "Delicious Lunch",
      desc: "Savor our delicious lunch options that will keep you energized and satisfied all day.",
      delay: 400,
    },
    {
      icon: "fa-leaf",
      title: "Healthy Meals",
      desc: "Nourish your body with our healthy meals, carefully crafted for flavor and fitness.",
      delay: 500,
    },
    {
      icon: "fa-cutlery",
      title: "Meal Combos",
      desc: "Choose our perfectly paired combos for a complete, tasty, and satisfying dining experience.",
      delay: 600,
    },
  ];


  const foodData = {
    Burgers: [
      {
        title: 'Gourmet Burger',
        img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        desc: 'Experience the taste of gourmet burgers with this simple yet delicious recipe.',
      },
      {
        title: 'Cheese Loaded Burger',
        img: 'https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg',
        desc: 'Melted cheese meets juicy patty in this food lover’s dream.',
      },
      {
        title: 'Spicy Chicken Burger',
        img: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg',
        desc: 'A fiery burger with crispy chicken and spicy mayo.',
      },
    ],
    Pasta: [
      {
        title: 'Italian Pasta',
        img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        desc: 'Indulge in a classic Italian pasta dish, perfect for any occasion.',
      },
      {
        title: 'Pesto Spaghetti',
        img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
        desc: 'Enjoy a green twist with fresh pesto and parmesan.',
      },
      {
        title: 'Creamy Alfredo',
        img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
        desc: 'Rich and creamy Alfredo sauce paired with fettuccine pasta.',
      },
    ],
    Salads: [
      {
        title: 'Healthy Salad',
        img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
        desc: 'Stay healthy and fit with this fresh and nutritious salad recipe.',
      },
      {
        title: 'Fruit Mix Salad',
        img: 'https://images.pexels.com/photos/1126358/pexels-photo-1126358.jpeg',
        desc: 'A colorful and sweet mix of seasonal fruits.',
      },
      {
        title: 'Greek Salad',
        img: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg',
        desc: 'A classic salad with feta, olives, cucumbers, and tomatoes.',
      },
    ],
    Desserts: [
      {
        title: 'Chocolate Cake',
        img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
        desc: 'Moist and rich chocolate cake perfect for sweet cravings.',
      },
      {
        title: 'Ice Cream Sundae',
        img: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
        desc: 'Cool off with layers of ice cream, syrup, and toppings.',
      },
      {
        title: 'Fruit Tart',
        img: 'https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg',
        desc: 'Fresh fruit and custard in a crispy tart shell.',
      },
    ],
    Drinks: [
      {
        title: 'Lemon Mint Cooler',
        img: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg',
        desc: 'Refreshing cooler with lemon, mint, and ice.',
      },
      {
        title: 'Strawberry Smoothie',
        img: 'https://images.pexels.com/photos/4052385/pexels-photo-4052385.jpeg',
        desc: 'A creamy and fruity blend for smoothie lovers.',
      },
      {
        title: 'Cold Brew Coffee',
        img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
        desc: 'Bold cold brew for coffee enthusiasts.',
      },
    ],
    Soups: [
      {
        title: 'Tomato Basil Soup',
        img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg',
        desc: 'Smooth tomato soup topped with fresh basil.',
      },
      {
        title: 'Cream of Mushroom',
        img: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg',
        desc: 'Earthy and creamy soup for comfort food lovers.',
      },
      {
        title: 'Chicken Noodle Soup',
        img: 'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg',
        desc: 'Classic comfort soup with noodles and tender chicken.',
      },
    ],
  };
  
  return (
    <div className="recipes-page">
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Our recipes</h2>
            <ul>
              <li>
                <Link to="/khana_thefoodiesworld/">Home -</Link> /
              </li>
              <li>Our Menu</li>
            </ul>
          </div>
        </div>
      </div>

      <>
      <div className="food-section">
      <h1 className="section-title">Explore Delicious Food</h1>
      <p className="section-description">
        Discover your next meal from curated categories of mouthwatering dishes prepared with love.
      </p>

      <div className="horizontal-tabs">
        {Object.keys(foodData).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="card-container">
        {foodData[activeTab].map((food, idx) => (
          <div key={idx} className="card">
            <img src={food.img} alt={food.title} />
            <div className="card-content">
              <h2>{food.title}</h2>
              <p>{food.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
      {/* Recipe Cards */}
      <section className="recipes-section container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Explore Our Recipes</h1>
          </div>
          <div className="col-12">
            <p className="section-description">
              Discover your next meal from curated categories of mouthwatering
              dishes prepared with love.
            </p>
          </div>

          {recipeData.map((item, idx) => (
            <div
              key={idx}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="recipe-card h-100">
                <div className="content">
                  <i className={`fa ${item.icon} icon`} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <>
      < SocialNetworksCarousel/>
      < Partners/>
      </>
    </div>
  );
};

export default Menu;
