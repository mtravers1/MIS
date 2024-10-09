import React from "react";
import product from "../data/data";
import Nav from "../components/nav";
import Card from "../components/card";
import '../styles/browse.css'
import Footer from "../components/footer";
import { useState } from "react";
const Browse = ()=>{
    const [toggle, SetToggle]=useState(false)
    const [category, SetCategory]=useState('')
    console.log(category)
   
    let hat='Hats'
    let hoodie='Hoodies'
   
    let bottoms='Bottoms'
    let tops='Shirts'
    product.filter((a)=>{
        a.category=category
        console.log(a.category)
    })
    return(
        <div>
            <Nav/>
            <h1 style={{textAlign:'center'}}>Browse</h1>
            
            <button onClick={()=>SetToggle(!toggle)}>Categorey</button>
            {toggle && (
                <div id='category'>
                    <p onClick={()=>SetCategory(hat)}>Hats</p>  
                    <p onClick={()=>SetCategory(hoodie)}>Hoodies</p>
                    <p OnClick={()=>SetCategory(tops)}>Shirts</p>  
                    <p onClick={()=>SetCategory(bottoms)}>bottoms</p>                
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