import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from '../../anka.png';

function Nav() {
  const [isCreationsOpen, setIsCreationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const toggleCreations = () => {
    setIsCreationsOpen(!isCreationsOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
        <li><Link to="/services"><i className="fas fa-cogs"></i>Services</Link></li>
        <li><Link to="/contact"><i className="fas fa-envelope"></i>Contact</Link></li>
        <li><Link to="/about"><i className="fas fa-info-circle"></i>About</Link></li>
      </ul>
      {token && (
        <div className="dropdown profile-dropdown">
          <button className="dropbtn" onClick={toggleProfile}>
            <i className="fas fa-user"></i>
            Profile
            <i className={`fas fa-chevron-down arrow ${isProfileOpen ? 'open' : ''}`}></i>
          </button>
          <div className={`dropdown-content ${isProfileOpen ? 'open' : ''}`}>
            <Link to="/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt"></i>Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;