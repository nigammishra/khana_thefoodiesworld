import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/pages/css/recipes.css";

const Recipes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

    <div className="recipe-card" data-aos="fade-up">
      <div className="content">
        <i className="fa fa-cutlery icon" aria-hidden="true"></i>
        <h3>Delicious Breakfast</h3>
        <p>
          Start your day with our nutritious and easy-to-make breakfast
          ideas. Fuel your body the right way.
        </p>
      </div>
    </div>

    <div className="recipe-card" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <i className="fa fa-glass icon" aria-hidden="true"></i>
        <h3>Refreshing Drinks</h3>
        <p>
          Stay hydrated with our delicious smoothies, juices, and cool
          beverages for any season.
        </p>
      </div>
    </div>

    <div className="recipe-card" data-aos="fade-up" data-aos-delay="300">
      <div className="content">
        <i className="fa fa-lemon-o icon" aria-hidden="true"></i>
        <h3>Tasty Starters</h3>
        <p>
          Try our starters and appetizers to kick off your meal with a burst
          of flavor and spice.
        </p>
      </div>
    </div>

    <div className="recipe-card" data-aos="fade-up" data-aos-delay="400">
      <div className="content">
        <i className="fa fa-cutlery icon" aria-hidden="true"></i>
        <h3>Delicious Lunch</h3>
        <p>
          Savor our delicious lunch options that will keep you energized and
          satisfied all day.
        </p>
      </div>
    </div>

    <div className="recipe-card" data-aos="fade-up" data-aos-delay="500">
      <div className="content">
        <i className="fa fa-leaf icon" aria-hidden="true"></i>
        <h3>Healthy Meals</h3>
        <p>
          Nourish your body with our healthy meals, carefully crafted for
          flavor and fitness.
        </p>
      </div>
    </div>

    <div className="recipe-card" data-aos="fade-up" data-aos-delay="600">
      <div className="content">
        <i className="fa fa-cutlery icon" aria-hidden="true"></i>
        <h3>Meal Combos</h3>
        <p>
          Choose our perfectly paired combos for a complete, tasty, and
          satisfying dining experience.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Recipes;
