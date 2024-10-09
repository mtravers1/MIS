import React from "react";
import Nav from "../components/nav";
import '../styles/home.css'
import Slider from "../components/slider";
import c1 from '../photos/c1.png'
import c2 from '../photos/c2.png'

import c3 from '../photos/c3.png'
import c4 from '../photos/c4.jpg'

import Footer from "../components/footer";
const Home = ()=>{
    return(
        <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header> */}
        
        <Nav/>
        <div>
            {/* <span>
                <h1>Winter 2024 Collection</h1>
            </span> */}
            <div id="banner">
                <span id='bannerleft'>
                    <h1>Winter Colleciton 2024</h1>
                    <h2>Get ready for the deadly Winter with the new line for Move in Silence</h2>
                    <h3>Get 10% off with your puchcase </h3>
                    <button id='bannerleftbutton'>Shop Now</button>
                </span>
                {/* <span id='bannerright'> */}
                    {/* <img src=""/> */}
                <Slider/>
                {/* </span> */}
            </div>
            {/* <Slider/> */}
        </div>
        <div id='main'>
            <span>
            <p>Get 50 percent off your first purchase</p>
            <button>Explore</button>
            </span>
            <span>
            <p>Get 50 percent off your first purchase</p>
            <button>Explore</button>

            </span>
          
        </div>

        <div >
            <div id='boxes'>
            <span id='box1'>
                <p>New</p>
            </span>
            <span  id='box2'>
            <p>Featured</p>            </span>

            </div>
            <div id='boxes'>
            <span  id='box3'>
            <p>Deals</p>            </span>
            <span  id='box4'>
            <p>Cooming Soon</p>            </span>
            </div>
          
            
        </div>
        
<Footer/>
        
      </div>
    )
}
export default Home