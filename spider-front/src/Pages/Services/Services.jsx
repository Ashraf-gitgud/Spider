import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <div className="service-image">
          <img src='https://ankabootgames.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-21-12.26.14-Un-studio-de-developpement-de-jeux-video-moderne-avec-une-touche-marocaine-mais-plus-minimaliste-et-realiste.-Limage-montre-une-vue-large-du-studio-1024x585.webp' alt="Video Game Development" />
        </div>
        <div className="service-content">
          <h2>🎮 Video Game Development</h2>
          <p>
            Design and development of mobile games for Android and iOS, integrating innovative gameplay mechanics and delivering immersive user experiences. Our approach blends creativity and technical excellence to craft engaging, entertaining, and high-performance games tailored to current market trends and player expectations.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image">
          <img src='https://ankabootgames.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-21-12.26.23-Un-studio-de-developpement-de-jeux-video-moderne.-Limage-montre-plusieurs-developpeurs-travaillant-sur-des-ordinateurs-avec-des-ecrans-affichant-du-c-1024x585.webp' alt="Mobile Application Development" />
        </div>
        <div className="service-content">
          <h2>📱 Mobile Application Development</h2>
          <p>
            Development of customized mobile applications for both businesses and individuals. We focus on intuitive UX/UI design, seamless functionality, and responsiveness, ensuring each app meets specific user needs while maintaining a polished and professional interface.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image">
          <img src='https://ankabootgames.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-21-12.28.14-Un-studio-de-developpement-de-jeux-video-moderne-avec-un-departement-de-consulting-bien-organise.-Limage-montre-une-partie-du-studio-dediee-aux-reun-1024x585.webp' alt="Consulting & Support" />
        </div>
        <div className="service-content">
          <h2>💡 Consulting & Support</h2>
          <p>
            Expert guidance in game and app development, covering performance optimization, scalability, user engagement strategies, and monetization models (ads, in-app purchases). Whether you're launching a new project or improving an existing one, we provide strategic support from concept to deployment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
