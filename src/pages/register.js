import React from "react";
import '../styles/login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../photos/MISLOGO.png'
const Register = ()=>{

    const [firstname, setFirstName]=useState('')
    const [lastname, setLastname]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={firstname, lastname, email, password}
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
    return(
        <div>
            <div >
                <h1 style={{textAlign:'center'}}>Register</h1>
                <div id='logimg'>
                    <img id='logoreg' src={logo}/>
                </div>
                <form onSubmit={handleSubmit}>
                    
                <div id='register'>
                <input 
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='FirstName'/>
                <input 
                onChange={(e)=>setLastname(e.target.value)}
                placeholder="LastName"/>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="email"/>
                <input 
                onChange={(e)=>e.target.value}
                placeholder="password"/>
                                <button>Submit</button>

                </div>
                </form>
            </div>
        </div>
    )
}

export default Register