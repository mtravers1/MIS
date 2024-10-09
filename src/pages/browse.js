import React from "react";
import product from "../data/data";
import Nav from "../components/nav";
import Card from "../components/card";
import '../styles/browse.css'
import Footer from "../components/footer";
import { useState } from "react";
const Browse = ()=>{
    const [toggle, SetToggle]=useState(false)
    return(
        <div>
            <Nav/>
            <h1 style={{textAlign:'center'}}>Browse</h1>
            
            <button onClick={()=>SetToggle(!toggle)}>Categorey</button>
            {toggle && (
                <div>
                    <p>Hats</p>  
                    <p>Hoodies</p>
                    <p>Shirts</p>  
                    <p>bottoms</p>                
                </div>
            )}
            <div id="cards" > 
         
                <Card products={product}/>
            </div>
            <Footer/>

        </div>
    )
}

export default Browse