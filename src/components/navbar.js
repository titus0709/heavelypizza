import '../styles/navbar.css'
import Logo from '../assets/heavenlyPizzaLogo.png'

import { Link }  from 'react-router-dom';


import { Reorder } from '@mui/icons-material';
import { useState } from 'react';




const Navbar = () => {

    const[openLinks,setOpenLinks]=useState(false);
    const toggleNavbar = ( )=>{
        setOpenLinks(!openLinks) ;
    }


    return ( 
        
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"} >
                <div className="hiddenLinks" >
                <Link to={'/'}>Home</Link>
                <Link to={'/menu'}>Menu</Link>
                <Link to={'/about'}>About </Link>
                <Link to={'/contact'}>Contact</Link>
                </div>
                <img src={Logo} alt="logo" />
            </div>
            <div className="rightSide">
                <Link to={'/'}>Home</Link>
                <Link to={'/menu'}>Menu</Link>
                <Link to={'/about'}>About </Link>
                <Link to={'/contact'}>Contact</Link>
                <button onClick={toggleNavbar}>
                <Reorder/>
                </button>
            </div>
        </div>
     );
}
 
export default Navbar;