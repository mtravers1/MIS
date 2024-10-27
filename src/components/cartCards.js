import React from "react";
import '../styles/cartcard.css'
import { CartState } from "../context-reducer/context";
import { Link } from "react-router-dom";
const CartCards= (props)=>{
   
    const {state:{cart}, dispatch}=CartState()
    let total=0
    cart.forEach((c)=>{
          total+=c.price                      
     })
    return(
        <div>
            <Link to='/cart'>View Cart</Link>
             {
                            cart.map((c)=>(
                                <div id='cartcard'>
                                    <div >
                                        <img id='cartimg' src={c.photo}/>
                                    </div>
                                    <div>
                                    <p>{c.name}</p>
                                    <p>${c.price/100}</p>
                                    {/* <p>{c.inventory}</p> */}
                                    <button id='removebutton' onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload:c,})}>Remove</button>
                                    </div>

                                    
                                </div>
                            ))
                        }
                        <div>
                            <p>Total $ {total/100.00}</p>
                        </div>
                        <script>
                            
                        </script>


        </div>
    )
}
export default CartCards