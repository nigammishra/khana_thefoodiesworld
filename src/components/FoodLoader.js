import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../components/FoodLoader.css'

const imgs = [
  "https://res.cloudinary.com/dsgvp2wmj/image/upload/v1640050380/Codepen%20GSAP%20Bounce/burger_ebjuje.png",
  "https://res.cloudinary.com/dsgvp2wmj/image/upload/v1640050408/Codepen%20GSAP%20Bounce/coffee-cup_ksq5xo.png",
  "https://cdn-icons-png.flaticon.com/512/3125/3125268.png",
  "https://res.cloudinary.com/dsgvp2wmj/image/upload/v1640050490/Codepen%20GSAP%20Bounce/pizza_xzzred.png",
];

const FoodLoader = () => {
  useEffect(() => {
    const imgEl = document.querySelector(".loader-icon");
    let i = 0;
    let counter = 1;
    let delay = 1000;

    const changeImg = () => {
      clearInterval(interval);
      counter++;
      i++;
      if (i > 3) i = 0;
      delay = counter === 1 ? 1000 : 2000;
      imgEl.src = imgs[i];
      interval = setInterval(changeImg, delay);
    };
    let interval = setInterval(changeImg, delay);

    const iconTl = gsap.timeline({ defaults: { duration: 1 }, repeat: -1 });
    iconTl
      .to(".loader-icon", { rotate: 180, y: 100, ease: "power4.in" })
      .to("span", {
        ease: "power4.in",
        top: (i, el) => gsap.getProperty(el, "--i") * 10,
      }, "=-1")
      .to(".loader-icon", { opacity: 1, duration: 1, y: 0, rotate: 360, ease: "power4.out" })
      .to("span", { duration: 1, top: 0, ease: "power4.out" }, "=-1");
  }, []);

  return (
    <div className='bod-style'>
    <div className="loader">
      <img src={imgs[0]} alt="Food Icon" className="loader-icon" />
      <p className='para-style'>
       
        {"Delicious Food Coming Through".split("").map((char, index) => (
          <span className='span-style' key={index} style={{ "--i": index + 1 }}>
            {char}
          </span>
        ))}
      </p>
    </div>
    </div>
  );
};

export default FoodLoader;
