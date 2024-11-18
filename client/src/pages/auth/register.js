import React from "react";
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../config";
import '../../styles/login.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {registerUser} from '../../reduxstore/authslice/index'
import logo from '../../photos/MISLOGO.png'
const Register = ()=>{

    const initialState={
        userName:'',
        email:'',
        password:''
    }
    const [formData, setFormData]= useState(initialState)
    // const [userName, setUserName]=useState('')
    // const [email, setEmail]=useState('')
    // const [password, setPassword]=useState('')
    // const regdata={userName, email, password}
    const dispatch=useDispatch()
    // fetch('', {
    //     method:'GET',
    //     headers:{'Content-Type':'application/json'}
    // }).then((data)=>console.log(data))


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        dispatch(registerUser(formData)).then((data)=>{
          
            if (data?.payload?.success) {
                console.log('success');
              Navigate('/auth/login')

            } else {
                console.log("data or data.type is undefined");
            }      
        }).catch((e)=>console.log('error', e))
                console.log(formData)

        // if (data?.payload?.success) {
        //         console.log('success');
        //     } else {
        //         console.log("data or data.type is undefined");
        //     }    
        // console.log('data',data)       
        //  Navigate('/auth/login')
        
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

                {/* <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      /> */}
        <form onSubmit={handleSubmit}>
            <div id='form' className="flex flex-col gap-3">
            {registerFormControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
            <label className="mb-1 font-bold text-left">{controlItem.label}</label>
            {/* {renderInputsByComponentType(controlItem)}
            <input className="border-2 border-black rounded-sm"/> */}
            <input
            className="border-2 border-black rounded-sm"
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            // type={controlItem.type}
            value={controlItem.value}
            onChange={(e)=>setFormData({...formData, [controlItem.name]: e.target.value})}
            />
          </div>
        ))}
        <button>Submit</button>

            </div>
            {/* <Button type='submit' className="mt-2 w-full">{buttonText ||'Submit'}</Button> */}

        </form>
      
                {/* <form onSubmit={handleSubmit}>
                    
                <div id='register'>
                <input 
                onChange={(e)=>setFormData({...formData, [formData.userName]: e.target.value})}

                placeholder='userName'/>
                <input 
                onChange={(e)=>setFormData({...formData, [formData.email]: e.target.value})}
                placeholder="email"/>
                <input 
                onChange={(e)=>setFormData({...formData, [formData.password]: e.target.value})}
                placeholder="password"/>
                                <button>Submit</button>

                </div>
                </form> */}
                <Link to='../auth/login'><p>Return to login</p></Link>
            </div>
        </div>
    )
}

export default Register