import React from "react";
import '../styles/nav.css'
import logo from '../photos/MISLOGO.png'
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
const Nav = ()=>{
    const [toggle, SetToggle]=useState(false)
    return(
<div>
    <div id="mobile">
        <img onClick={()=>SetToggle(!toggle)} src={logo}/>
    {toggle && (
        <div>
            <span>
                <a href="/">Home</a>
                <a href='./browse'>Browse</a>
            </span>

        </div>
    )}
    </div>


        <div id="nav">
            <div>
                <img id='logo' src={logo}/>
            </div> 
            <div id="links" >
                <a href="/">Home</a>
                <a href="./browse">Browse</a>
                <a href="">Deals</a>
                <a href="./About">About</a>
                <a href="">Contact</a>
            </div>
            <div>
            <CgShoppingCart id='cart'/>

            </div>


        </div>
    </div>
    )
}

export default Nav