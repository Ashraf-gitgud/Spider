import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from '../../anka.png';

function Nav() {
  const [isCreationsOpen, setIsCreationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const toggleCreations = () => {
    setIsCreationsOpen(!isCreationsOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsProfileOpen(false);
    setIsNavOpen(false);
    navigate('/');
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <button className="hamburger" onClick={toggleNav}>
        <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsNavOpen(false)}><i className="fas fa-home"></i>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsNavOpen(false)}><i className="fas fa-cogs"></i>Services</Link></li>
        <li><Link to="/contact" onClick={() => setIsNavOpen(false)}><i className="fas fa-envelope"></i>Contact</Link></li>
        <li><Link to="/about" onClick={() => setIsNavOpen(false)}><i className="fas fa-info-circle"></i>About</Link></li>
        {token && (
          <li className="profile-dropdown">
            <button className="dropbtn" onClick={toggleProfile}>
              <i className="fas fa-user"></i>
              Profile
              <i className={`fas fa-chevron-down arrow ${isProfileOpen ? 'open' : ''}`}></i>
            </button>
            <div className={`dropdown-content ${isProfileOpen ? 'open' : ''}`}>
              <Link to="/dashboard" onClick={() => { setIsNavOpen(false); setIsProfileOpen(false); }}>
                <i className="fas fa-tachometer-alt"></i>Dashboard
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                <i className="fas fa-sign-out-alt"></i>Logout
              </button>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;