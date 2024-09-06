import React, { useEffect, useState } from 'react';
import './UltraModernCard.css';

const UltraModernCard = ({ title }) => {
  const [cards, setCards] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/Cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="ultra-modern-container">
      <div className="ultra-modern-title">
        <h2>{title ? title : "Recommended For You"}</h2>
      </div>
      <div className={`ultra-modern-card-list ${isHovered ? 'paused' : ''}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="ultra-modern-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={card.image_url} alt={card.movie_name} />
            <div className="movie-title">{card.movie_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltraModernCard;
