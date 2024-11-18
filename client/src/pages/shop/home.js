import React from "react";
import Nav from "../../components/nav";
import '../../styles/home.css'
import Slider from "../../components/slider";
import c1 from '../../photos/c1.png'
import c2 from '../../photos/c2.png'
import Login from "../auth/login";
import c3 from '../../photos/c3.png'
import c4 from '../../photos/c4.jpg'
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import axios from "axios";
const Home = ()=>{

    const url='http://localhost:5000/order'

    // axios.get(url).then((res)=>res.json()).catch(error=>console.log(error))

    
//   let url='http://localhost:5000/products'
//   fetch(url).
//   then(res=>res.json()).
//   then(data=>console.log(data))
    // fetch(url).then(res=>res.json).then(data=>console.log(data))

    // fetch(url, {
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    // })

    // const url='localhost:5000/products'
    // fetch(url, {
    //     method:'GET',
    //     mode:'cors',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },

    // })

    // fetch(url).then(res=>res.json()).then(data=>console.log(data))
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
                <div id='bannerleft'>
                    <h1>Winter Colleciton 2024</h1>
                    <h2>Get ready for the deadly Winter with the new line for Move in Silence</h2>
                    <h3>Get 10% off with your puchcase </h3>
                    <button id='bannerleftbutton'><Link id='shopnow' to='./browse'>Shop</Link></button>
                </div>
                {/* <span id='bannerright'> */}
                    {/* <img src=""/> */}
                
                <Slider/>
                {/* </span> */}
            </div>
            {/* <Slider/> */}
        </div>
       
        <div id='new'>
           
            

  
        <div >
      
            <h1>New</h1>
            <div id='scroll'>
                
            

        
            <img src={c1}/>
            <img src={c2}/>
            <img src={c3}/>
            <img src={c4}/>
            <img src={c1}/>
            <img src={c1}/>
            <img src={c2}/>
            <img src={c3}/>
            </div>
        </div>
        </div>
        <div id='main'>
            <span id='mid'>
            <h1>The Movement</h1>
            <p>To Move In Silence is a lifestyle that not everyone can live. The goal is to remain humble and prosper while others wonder from the outside looking in.</p>
            <button>Explore</button>
            </span>
            
          
        </div>

        <div >
            <div id='boxes'>
            <span id='box1'>
                <Link>New</Link>
            </span>
            <span  id='box2'>
            <Link>Featured</Link>            </span>

            </div>
            <div id='boxes'>
            <span  id='box3'>
            <Link>Deals</Link>            </span>
            <span  id='box4'>
            <Link>Cooming Soon</Link>            </span>
            </div>
          
            
        </div>
        
<Footer/>
        
      </div>
    )
}
export default Home