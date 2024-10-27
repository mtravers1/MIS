import React from "react";
import Nav from "../components/nav";
import { CartState } from "../context-reducer/context";
import CartCards from "../components/cartCards";
const Cart = ()=>{

    const {state:{cart}, dispatch}=CartState();
    return(
        <div>
            <Nav/>
            <h1>Cart</h1>
            {/* {
                            cart.map((c)=>(
                                <div id='cartcard'>
                                    <div >
                                        <img id='cartimg' src={c.photo}/>
                                    </div>
                                    <div>
                                    <p>{c.name}</p>
                                    <p>{c.price}</p>
                                    </div>
                                    
                                </div>
                            ))
                        } */}


        <CartCards/>

        <div>
         <button>Continue Checkout</button>
        </div>
        </div>
    )
}

export default Cart