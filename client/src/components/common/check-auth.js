import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
const CheckAuth=({isAuthenticated, user, children})=>{
    const location= useLocation()
    if(!isAuthenticated && !(location.pathname.includes('/login'))|| (location.pathname.includes('./register'))){
        return <Navigate to='/auth/login'/>

    }

    if(isAuthenticated && (location.pathname.includes('/login'))|| (location.pathname.includes('register'))){
        if(user?.role === 'admin'){
            
            return <Navigate to='/admin/dashboard'/>
        }
        else{
            return <Navigate to='/shop/home'/>

        }

    }
    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('admin')){
        return <Navigate to=''/>

    }
    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('admin')){
        return <Navigate to='/admin/dashboard'/>

    }

    return(
        <div>
            {children}

        </div>
    )
}

export default CheckAuth