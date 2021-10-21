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
      <Navbar className='cool-nav' light expand="md">
        <NavbarBrand href="/">Dog Blog</NavbarBrand>
    
          <Nav className="mr-auto" navbar>
            <NavItem >
              <Link to="/CreatePost" className='nav-link'>Create Dog Post</Link>
            </NavItem>
          </Nav>
          
      </Navbar>
    </div>
  );
}

export default CoolNav;