import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  Link
} from "react-router-dom";
import './styles.scss'

const CoolNav = (props) => {
  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/Home">Pug blog</NavbarBrand>
    
          <Nav className="mr-auto" navbar>
            <NavItem >
              <Link to="/Home" className='nav-link'>Posts</Link>
            </NavItem>
            <NavItem >
              <Link to="/CreatePost" className='nav-link'>Create Post</Link>
            </NavItem>
          </Nav>
          
      </Navbar>
    </div>
  );
}

export default CoolNav;