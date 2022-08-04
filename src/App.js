import React from 'react';
import './App.css';
import Hero from './components/HeroSection/heroSection';
import Navbar from './components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import logo from '/home/mandela/projects/food-delivery-app/src/assets/logo.png';


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
