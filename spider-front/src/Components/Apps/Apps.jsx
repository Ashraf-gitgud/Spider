import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Apps.css';

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/applications');
        setApps(response.data);
      } catch (error) {
        console.error('Error fetching apps:', error);
      }
    };

    fetchApps();
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

  const handleDetailsClick = (app) => {
    setSelectedApp(app);
  };

  const closeModal = () => {
    setSelectedApp(null);
  };

  return (
    <div className="game-carousel">
      <h2 className="carousel-title">Our Mobile Applications</h2>
      <Slider {...settings}>
        {apps.map((app) => (
          <AppsCard 
            key={app._id} 
            app={app} 
            onDetailsClick={() => handleDetailsClick(app)}
          />
        ))}
      </Slider>
      {selectedApp && (
        <AppModal app={selectedApp} onClose={closeModal} />
      )}
    </div>
  );
};

const AppsCard = ({ app, onDetailsClick }) => {
  return (
    <div className="game-card">
      <img src={app.imageUrl} alt={app.title} />
      <h3>{app.title}</h3>
      <button 
        onClick={onDetailsClick}
        className="details-button"
      >
        Details
      </button>
    </div>
  );
};

const AppModal = ({ app, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{app.title}</h2>
        <p>{app.description}</p>
        <a className='zelink' href={app.storelink}>Link to Store</a>
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

export default Apps;