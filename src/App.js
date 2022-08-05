import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/pages/NavBar';



function App() {
  return (     
  <Router>
    <NavBar /> 
  </Router>
  );
}

export default App;
