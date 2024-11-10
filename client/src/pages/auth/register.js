import React from "react";
import '../../styles/login.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import registerUser from '../../reduxstore/authslice/index'
import logo from '../../photos/MISLOGO.png'
const Register = ()=>{

    const initialState={
        userName:'',
        email:'',
        password:''
    }
    const [formData, setFormData]= useState(initialState)
    const [userName, setUserName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const regdata={userName, email, password}
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(registerUser(regdata)).then((data)=>{
           console.log(data)
            // Navigate('/auth/login')
        })
        
        // const data={firstname, lastname, email, password}
        // fetch('http://localhost:5000/order',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
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
                onChange={(e)=>setUserName(e.target.value)}
                placeholder='userName'/>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="email"/>
                <input 
                onChange={(e)=>e.target.value}
                placeholder="password"/>
                                <button>Submit</button>

                </div>
                </form>
                <Link to='../auth/login'><p>Return to login</p></Link>
            </div>
        </div>
    )
}

export default Register