import React, { useEffect, useState, useRef } from 'react';
import '../components/team.css';

import team1 from "../images/team1.jpeg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.png";

const teamMembers = [
  { name: "Emily Kim", role: "Founder", image: team1 },
  { name: "Michael Steward", role: "Creative Director", image: team2 },
  { name: "Emma Rodriguez", role: "Lead Developer", image: team3 },
  { name: "Julia Gimmel", role: "UX Designer", image: team1 },
  { name: "Lisa Anderson", role: "Marketing Manager", image: team2 },
  { name: "James Wilson", role: "Product Manager", image: team3 }
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateIndex = (newIndex) => {
    if (animating) return;

    setAnimating(true);
    const total = teamMembers.length;
    const updatedIndex = (newIndex + total) % total;
    setCurrentIndex(updatedIndex);

    if (nameRef.current && roleRef.current) {
      nameRef.current.style.opacity = "0";
      roleRef.current.style.opacity = "0";

      setTimeout(() => {
        if (nameRef.current && roleRef.current) {
          nameRef.current.textContent = teamMembers[updatedIndex].name;
          roleRef.current.textContent = teamMembers[updatedIndex].role;
          nameRef.current.style.opacity = "1";
          roleRef.current.style.opacity = "1";
        }
      }, 300);
    }

    setTimeout(() => {
      setAnimating(false);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') updateIndex(currentIndex - 1);
    else if (e.key === 'ArrowRight') updateIndex(currentIndex + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) updateIndex(currentIndex + 1);
      else updateIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  });

  const getClassForcards = (i) => {
    const total = teamMembers.length;
    const offset = (i - currentIndex + total) % total;

    if (offset === 0) return "cards center";
    if (offset === 1) return "cards right-1";
    if (offset === 2) return "cards right-2";
    if (offset === total - 1) return "cards left-1";
    if (offset === total - 2) return "cards left-2";
    return "cards hidden";
  };

  return (
    <div className="team-carousel">
      <h1 className="Abbout-title">OUR TEAM</h1>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateIndex(currentIndex - 1)}>‹</button>
        <div className="carousel-trackk">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={getClassForcards(i)}
              onClick={() => updateIndex(i)}
              data-index={i}
            >
              <img
                src={member.image}
                alt={member.name}
              />
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => updateIndex(currentIndex + 1)}>›</button>
      </div>

      <div className="member-info">
        <h2 className="member-name" ref={nameRef}>
          {teamMembers[currentIndex].name}
        </h2>
        <p className="member-role" ref={roleRef}>
          {teamMembers[currentIndex].role}
        </p>
      </div>

      <div className="dots">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => updateIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
