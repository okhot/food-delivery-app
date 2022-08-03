import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={'logo'} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/faq' activeStyle>
            Faq
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;