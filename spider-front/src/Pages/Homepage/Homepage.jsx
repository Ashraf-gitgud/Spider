import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Games from '../../Components/Games/Games';
import Apps from '../../Components/Apps/Apps';
import Divider from '../../Components/Divider/Divider';
// import Home from './components/Home';
// import Login from './components/Login';
// import About from './components/About';
// import Contact from './components/Contact';
// import Dashboard from './components/Dashboard';
// import Games from './components/Games';
// import Applications from './components/Applications';
// import Services from './components/Services';
// import GameDetails from './components/GameDetails';
// import ApplicationDetails from './components/ApplicationDetails';

function Homepage() {
  return (<>
    <Games/>
    <Divider/>
    <Apps/>
  </>
  );
}

export default Homepage;
