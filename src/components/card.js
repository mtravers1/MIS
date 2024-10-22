import React from "react";
import '../styles/card.css'
// import product from "../data/data";
import { useState } from "react";
import { CartState } from "../context-reducer/context";
const Card = (props)=>{
    const products=props.products
    // const{name, price, description, color}=products
    const [name, setName] =useState('')
    const [quantity, setQuantity]=useState(0)
    const [price, setPrice]=useState()
    // const [cart, setCart]=useState()
    const addProduct= (e)=>{
        e.preventDefault()
        console.log(cart)
    }

    const {state:{cart}, dispatch,}=CartState()

    
    return(
        <> 
            {
                products.map((p)=>(
            
                    <div key={p.id} id="card">
                        {/* <form onSubmit={handleSubmit}> */}
                         <div>
                            <img id='cardimg' src={p.photo}/>
                        
                       
                            <p >{p.name}</p>
                            <p>{p.description}</p>
                            <p >$ {p.price/100}</p>
                            <select>
                                <option>1</option>
                            </select>
                            <p>{p.color}</p>
                            <button onClick={()=>dispatch({type: 'ADD_TO_CART', payload:p,})}>Add</button>

                        </div>
                        {/* </form> */}
                        

                    </div>
                ))
            }
            

        </>
    )
}

export default Card;