import React from "react";
import '../styles/cartcard.css'
import { CartState } from "../context-reducer/context";
const CartCards= (props)=>{
    const {state:{cart}, dispatch}=CartState()
    return(
        <div>
             {
                            cart.map((c)=>(
                                <div id='cartcard'>
                                    <div >
                                        <img id='cartimg' src={c.photo}/>
                                    </div>
                                    <div>
                                    <p>{c.name}</p>
                                    <p>{c.price}</p>
                                    <button id='removebutton' onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload:c,})}>Remove</button>
                                    </div>

                                    
                                </div>
                            ))
                        }


        </div>
    )
}
export default CartCards