import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import Home from './components/pages/Home';


function App() {

  return (  
    <div className='App'>

   <Router>
        <NavBar></NavBar>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    </Routes> 
    </Router>
  </div>
    );
  }
export default App;
