import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './contact.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mqaqrzjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitStatus('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('Error sending email.');
      }
    } catch (error) {
      setSubmitStatus('Error sending email.');
      console.error(error);
    }
  };

  // Coordinates for Tanger, Morocco
  const mediaPosition = [35.77592055453844, -5.803100185811715];

  return (
    <div className="contact-page">
      <div className="content-container">
        {/* Left Section: Contact Info and Map */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="contact-text">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too!
          </p>
          <div className="info-details">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              +212 612 388 142
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              ankabootgames@gmail.com
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              Ave Mohammed V, Tangier 90000
            </div>
          </div>
          <div className="map-container">
            <MapContainer center={mediaPosition} zoom={14}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={mediaPosition}>
                <Popup>Av. des Forces Armées Royales, Tanger</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="hidden-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="XXX-XXX-XXXX"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="Csubmit-button">
              Submit
            </button>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;