import React from "react";
import '../styles/nav.css'
import logo from '../photos/MISLOGO.png'
import Login from "../pages/login";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../data/cart";
import '../styles/cartcard.css'
import { CartState } from "../context-reducer/context";
import CartCards from "./cartCards";
const Nav = ()=>{
    const {state:{cart}, dispatch}=CartState()
    const [toggle, SetToggle]=useState(false)

    const [carttog, setCarttog]=useState(false)
    const cartButton = ()=>{
        console.log('hello')
        setCarttog(!carttog)
    }

    let price=0
    cart.forEach((i)=>{
        price+=i.price
        
    })
    console.log(price)
    return(
<div>
    
    <div id="mobile">
       
        <img id='mobileimg' onClick={()=>SetToggle(!toggle)} src={logo}/>
        <CgShoppingCart id='cart' onClick={()=>cartButton()}/>

    <button id='mobilebutton' onClick={()=>SetToggle(!toggle)}>X</button>
    {toggle && (
        <div>
            <span>
                <Link to="/login">Login</Link>
            <Link to="/cart"><CgShoppingCart id='cart'/></Link>

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
            <div >
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
            <p id='cartnumber'>{cart.length}</p>

            <Link to="/cart">Cart</Link>
            <CgShoppingCart id='cart' onClick={()=>cartButton()}/>
           
            </div>


        </div>
        {carttog && (

                <div id='cartprev'>
                    <div>
                      <CartCards cart={cart}/>
                    </div>
                    <p>Total: {price}</p>
                    

                </div>
            )}
        </div>
    )
}

export default Nav