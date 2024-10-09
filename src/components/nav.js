import React from "react";
import '../styles/nav.css'
import logo from '../photos/MISLOGO.png'
import Login from "../pages/login";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = ()=>{
    const [toggle, SetToggle]=useState(false)
    return(
<div>
    <div id="mobile">
        <img onClick={()=>SetToggle(!toggle)} src={logo}/>
        
    {toggle && (
        <div>
            <span>
                <Link to="/login">Login</Link>
            <CgShoppingCart id='cart'/>

            </span>
            
            <span>
                <Link to="/">Home</Link>
                <Link to='/browse'>Browse</Link>
                <Link to='/about'>About</Link>


            </span>
            
        </div>
        
    )}
    </div>


        <div id="nav">
            <div>
                <img id='logo' src={logo}/>
            </div> 
            <div id="links" >
                <Link to="/">Home</Link>
                <Link to="/browse">Browse</Link>
                <Link to="">Deals</Link>
                <Link to="/about">About</Link>
                <Link to="">Contact</Link>
            </div>
            <div id='links'>
            <Link to="/login">login</Link>
            <CgShoppingCart id='cart'/>

            </div>


        </div>
    </div>
    )
}

export default Nav