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
import {FaPaw} from 'react-icons/fa'


const CoolNav = (props) => {
  

  return (
    <div>
      <Navbar className='cool-nav' light expand="md">
        <NavbarBrand href="/"><FaPaw
			 className='logo mb-1'/> Dog Blog</NavbarBrand>
    
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