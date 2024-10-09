import React from "react";
import '../styles/card.css'
// import product from "../data/data";
const Card = (props)=>{
    let products=props.products
    return(
        <> 
            {
                products.map((p)=>(
                    <div id="card">
                         <div>
                            <img id='cardimg' src={p.photo}/>
                        
                       
                            <p>{p.name}</p>
                            <p>{p.description}</p>
                            <p>{p.color}</p>
                            <button>Add</button>

                        </div>
                        

                    </div>
                ))
            }
            

        </>
    )
}

export default Card;