import React from 'react'
import './styles.scss'
import {
	NavbarBrand
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {CgMail} from 'react-icons/cg'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaPaw} from 'react-icons/fa'

const  Footer = ()=> {
    return(

        <footer className="ml-0 mr-0 vw-100">
		<div className="container-sm custom-container d-flex">

	     	<NavbarBrand href="/"><FaPaw
			 className='logo mb-1'/> Dog Blog</NavbarBrand>

			 <div className='social-networks'>
				 <a 
				 className='social-links'
				 href='https://github.com/j-antonio42'
				 target='_blank'> 
				 <FaGithub 
				 className='logo'/>
				 </a>
				 <a 
				 className='social-links'
				 href='https://www.linkedin.com/in/antonio-ibarra42/'
				 target='_blank'> 
				 <BsLinkedin 
				 className='logo'/>
				 </a>
				 <a 
				 className='social-links'
				 href='https://www.instagram.com/j.antonio.i/'
				 target='_blank'> 
				 <GrInstagram 
				 className='logo'/>
				 </a>
			 </div>

			 <div className='contact'>
				 <p>Contact</p>
				 <p><RiWhatsappFill
				 className='logo'/>311 263 11 05</p>
				 <p><CgMail
				 className='logo'/>jaia_0309@hotmail.com</p>
			 </div>
      
			
		</div>
	</footer>
    )

}

export default Footer