import React from "react";
import '../styles/login.css'
import { Link } from "react-router-dom";

const Login = ()=>{
    return(
        <div>
            
            <nav>
                <Link to="/">Shop</Link>
            </nav>
          

            <div id='signup'>
            <div>
                <span >
                    <p id='title'>Move In Silence</p>
                </span>

            </div>
            <p>Sign Up For New Drop Info</p>

                <div id='log'>
                    <div id='name'>
                        <input placeholder="Name"/>
                    </div>
                    <div id='password' >
                    <input placeholder="Password"/>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login