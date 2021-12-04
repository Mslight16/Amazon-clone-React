import React from 'react';
import logo from './images/PngItem_12080.png'
import classes from './Topbar.module.css'

const Topbar = () => {
    return(
        <header>
           <nav className= {classes.topbar}>
        <img src ={logo} alt= "amazon_logo"/>
        </nav>
        </header>
        
    )
}

export default Topbar;