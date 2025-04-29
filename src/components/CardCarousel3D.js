import React, { useState } from "react";
import "./stylee.css";
import { motion } from "framer-motion";

import food1 from "../images/food1.avif";
import food2 from "../images/food2.avif";
import food3 from "../images/food3.avif";
import food4 from "../images/food4.avif";
import food5 from "../images/food5.avif";
// import food6 from "../images/food6.avif";
// import doodlesBg from "../images/food-doodles.jpg";

const cardsData = [
  {
    title: "Pizza",
    image: food1,
    description:
      "A delicious pizza with a crispy crust, topped with mozzarella cheese, tomatoes, and basil.",
  },
  {
    title: "Sushi",
    image: food2,
    description:
      "Fresh sushi with a combination of raw fish, rice, and seaweed.",
  },
  {
    title: "Burger",
    image: food3,
    description:
      "A juicy beef burger served with lettuce, cheese, and a soft bun.",
  },
  {
    title: "Pasta",
    image: food4,
    description:
      "A plate of spaghetti with rich marinara sauce and grated Parmesan cheese.",
  },
  {
    title: "Ice Cream",
    image: food5,
    description:
      "Creamy vanilla ice cream topped with colorful sprinkles and a cherry.",
  },
];

const Card = ({ title, image, description, onNext }) => (
  <div className="carousel-card-inner">
    <div className="carousel-image">
      <img src={image} alt={title} />
    </div>
    <div className="carousel-detail">
      <h3>{title}</h3>
      <div className="carousel-stars">
        {[...Array(5)].map((_, i) => (
          <i className="fas fa-star" key={i}></i>
        ))}
      </div>
      <p>{description}</p>
    </div>
    <div className="carousel-next" onClick={onNext}>
      <i className="fas fa-arrow-right"></i>
    </div>
  </div>
);

const CardCarousel = () => {
  const [cardList, setCardList] = useState(cardsData);

  const handleNext = () => {
    const newList = [...cardList];
    const first = newList.shift();
    newList.push(first);
    setCardList(newList);
  };

  return (
    <div
      className="background-container container py-5"
      //   style={{
      //     background: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${doodlesBg}) no-repeat center center `,
      //     backgroundSize: "cover",
      //     backgroundAttachment: "fixed",
      //     borderRadius: "20px",
      //     display: "flex",
      //     alignItems:'center',
      //     flexDirection:"column",
      //     padding:"20px",
      //   }}
    >
      <div className="row align-items-center">
        <motion.div
          className="col-md-6 mb-4 mb-md-0 text-md-start text-center food-content"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }} // Ensures the animation triggers every time the section enters the view
        >
          <h2 className="display-5 fw-bold mb-3 text-danger">
            🍽️ Food Delights
          </h2>
          <p className="lead text-muted mb-4">
            Dive into a world of flavor! From cheesy pizza to creamy ice cream,
            explore dishes that satisfy every craving and bring smiles to your
            plate.
          </p>
          <motion.button
            className="btn btn-danger px-4 py-2 fw-semibold next-dish-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
          >
            Next Dish
          </motion.button>
        </motion.div>

        {/* Right Carousel Column */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="carousel-wrapper">
            {cardList.map((card, index) => (
              <div
                key={index}
                className="carousel-card"
                style={{
                  zIndex: cardsData.length - index,
                  transform: `scale(${1 - index * 0.1})`,
                  top: `-${index * 15}px`,
                  opacity: `${1 - index * 0.1}`,
                }}
              >
                <Card {...card} onNext={handleNext} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
