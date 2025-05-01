import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/pages/css/recipes.css";
import SocialNetworksCarousel from "../components/SocialMediaLinks";
import Partners from "../components/Partners";

const Recipes = () => {
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

export default Recipes;
