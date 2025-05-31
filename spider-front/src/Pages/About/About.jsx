import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <div className="about-image-placeholder">
          <img src="https://ankabootgames.com/wp-content/uploads/2025/03/cropped-cropped-Screenshot-2025-03-21-at-12.34.53-173x133.png" alt="ANKABOOT Games logo" />
        </div>
      </div>
      <div className="about-content">
        <blockquote className="about-quote">
          "ANKABOOT Games delivers unique gaming experiences with a creative and innovative touch. Their expertise in mobile game and application development allows everyone to enjoy original and interactive concepts!"
        </blockquote>
        <p className="about-author">— MOHAMMED REBOUKH, Founder / CEO</p>
        <p className="about-description">
          ANKABOOT Games stands out for its ability to blend creativity with cutting-edge technology, offering users engaging and memorable digital experiences. Under the leadership of Mohammed Reboukh, the company continues to push the boundaries of mobile entertainment, crafting products that are not only fun but also thoughtfully designed to captivate and inspire.
        </p>
      </div>
    </div>
  );
};

export default About;
