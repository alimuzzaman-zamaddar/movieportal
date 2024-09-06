import React, { useEffect, useState } from 'react';
import './TitleCard.css';
import VideoModal from '../VideoModal/VideoModal'; // Import the modal component

const TitleCard = ({title}) => {
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/Cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  const openModal = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="container">
      <div className="title-card">
        <h2>{title?title:"Popular In Here"}</h2>
      </div>
      <div className="titlecard">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(`https://www.youtube.com/embed/${card.video_id}`)}
          >
            <img src={card.image_url} alt={card.movie_name} />
            <p>{card.movie_name}</p>
          </div>
        ))}
      </div>
      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default TitleCard;
