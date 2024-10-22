import React from "react";
import '../styles/login.css'
import { Link } from "react-router-dom";
import logo from '../photos/MISLOGO.png'
import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CartState } from "../context-reducer/context";

const Login = ()=>{
    const {state:{cart}, dispatch}=CartState()
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [cartTogg, setCartTogg]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        // const data={email, password}
        // fetch('http://localhost:5000/order', {
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
    }

    const cartButton= ()=>{
        setCartTogg(!cartTogg)
    }
    return(
        <div>
            
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to="/">Shop</Link>
                <CgShoppingCart id='cart' onClick={()=>cartButton()}/>

            </div>
            {cartTogg && (

<div id='cartprev'>
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
                    </div>
                    
                </div>
            ))
        }
    </div>

</div>
)}
          

            <div id='signup'>
            <div>
                <span >
                    {/* <p id='title'>Move In Silence</p> */}
                    <img id='logolog' src={logo}/>
                </span>

            </div>
            <p>Sign Up For New Drop Info</p>
            <Link to='/register'>sign up</Link>
                <form  onSubmit={handleSubmit}>
                <div id='log'>
                    <div id='email'>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="email"/>
                    </div>
                    <div id='password' >
                    <input
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder="Password"/>
                    
                    </div>
                <button>Enter</button>
                </div>
                </form>

            </div>
        </div>
    )
}
export default Login