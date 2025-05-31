import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import components for each route
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
// import Login from './components/Login';
// import About from './components/About';
// import Contact from './components/Contact';
// import Dashboard from './components/Dashboard';
// import Games from './components/Games';
// import Applications from './components/Applications';
// import Services from './components/Services';
// import GameDetails from './components/GameDetails';
// import ApplicationDetails from './components/ApplicationDetails';

function App() {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
{/*           <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/applications/:id" element={<ApplicationDetails />} /> */}
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
