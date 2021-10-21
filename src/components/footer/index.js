import React from 'react'
import './styles.scss'
import {
	NavbarBrand
  } from 'reactstrap';

const  Footer = ()=> {
    return(

        <footer className="ml-0 mr-0 vw-100">
		<div className="container-sm custom-container d-flex">

	     	<NavbarBrand href="/">Dog Blog</NavbarBrand>
      
			<p className="f-size"><span>DEV Community </span>-A constructive and inclusive social network for software. With you every
				step
				of your journey</p>
			<p className="f-size">Built on<span> Forem </span>-the<span> open source </span>software that powers <span> DEV </span>and
				other
				inclusive communties commuties.</p>
			<p className="f-size">Made with love and<span> Ruby on Rails. </span>DEV Community 2016-2021.</p>
			
		</div>
	</footer>
    )

}

export default Footer