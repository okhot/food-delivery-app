import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import logo from '/home/mandela/projects/food-delivery-app/src/assets/logo.png';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
