import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


function NavBar () {
   
    return(    
      
             <nav className="nav__bar">

         <img src={require('./../../images/image2.jpg')} alt="logo"/>
            <Link to='/' className="nav__bar-link">Home</Link>
            <Link to='product' className="nav__bar-link">Products</Link>
            <Link to='/faq' className="nav__bar-link">Faq</Link>
            <Link to='/contacts' className="nav__bar-link">Contact</Link>
          </nav>
       
    )
}

export default NavBar