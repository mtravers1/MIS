import React from "react";
import product from "../data/data";
import Nav from "../components/nav";
import Card from "../components/card";
import '../styles/browse.css'
const Browse = ()=>{
    return(
        <div>
            <Nav/>
            <h1 style={{textAlign:'center'}}>Browse</h1>
            <div id="cards" > 
         
                <Card products={product}/>
            </div>

        </div>
    )
}

export default Browse