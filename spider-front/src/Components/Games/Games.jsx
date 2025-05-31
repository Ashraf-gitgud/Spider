import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Games.css';

const Games = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/games');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleDetailsClick = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="game-carousel">
      <h2 className="carousel-title">Our Games</h2>
      <Slider {...settings}>
        {games.map((game) => (
          <GameCard 
            key={game.id} 
            game={game} 
            onDetailsClick={() => handleDetailsClick(game)}
          />
        ))}
      </Slider>
      {selectedGame && (
        <GameModal game={selectedGame} onClose={closeModal} />
      )}
    </div>
  );
};

const GameCard = ({ game, onDetailsClick }) => {
  return (
    <div className="game-card">
      <img src={game.imageUrl} alt={game.title} />
      <h3>{game.title}</h3>
      <button 
        onClick={onDetailsClick}
        className="details-button"
      >
        Details
      </button>
    </div>
  );
};

const GameModal = ({ game, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <a className='zelink' href={game.storelink}>Link to Store</a>
        <button 
          onClick={onClose}
          className="close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Games;