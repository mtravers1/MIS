import { Outlet } from "react-router-dom";
import { HousePlug, LogOut, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, DropdownMenu} from "../../ui/sheet";
import { Button } from "../../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "../../config";
import { ShoppingCart } from 'lucide-react';
import React from "react";
import {useState} from "react"
import { User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../reduxstore/authslice";
function MenuItems(){
    
    return(
    <nav className="flex flex-col lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map((menuItems)=>(
                <Link className="text-sm font-medium" key={menuItems.id} to={menuItems.path}>{menuItems.label}</Link>

            ))
        }
    </nav>)
}

const HeaderRightContent = ()=>{
    const navigate=useNavigate()
    const {user}=useSelector(state=>state.auth)
    console.log('this is the user', user.userName)
    const [dropdownMenu, setDropdownMenu]=useState(false)
    const dispatch=useDispatch()
    const drop = ()=>{
        setDropdownMenu(!dropdownMenu)
    }
    const handleLogOut = ()=>{
        dispatch(logoutUser)
    }
    return <div className="flex lg:item-center lg:flex-row flex-col  gap-4 over">
        {/* <Button onClick={()=>drop()} variant="outline" size="icon"> */}
        
        {/* </Button> */}
        <div>
        <Button onClick={()=>drop()} className=" bg-black rounded-3xl flex justify-center items-center w-14 absolute right-0 top-0">
                <p>{user?.userName}</p>
                
            </Button>

        
        {dropdownMenu ?(
            <div className="bg-black" >
                <p>logged in as {user?.userName}</p>
                <button className="flex border-none bg-none" onClick={()=>navigate("/shop/account")}><User/> <p>Account</p></button>
                <LogOut onClick={handleLogOut}/>Logout
                
            </div>
        ):(
            null
        )

        

        }
    </div>
        {/* <button onClick={()=>drop()}>Drop</button> */}
      
        


    </div>


    
}
const ShoppingHeader = ()=>{
    const {isAuthenticated, user}=useSelector(state=>state.auth)
    console.log(user, 'user')
    return(
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to='/shop/home' className="flex items-center gap-2">
                <HousePlug className="h-6 w-6"/>
                <span className="font-bold text-md text-center">MIS</span>
                
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6"/>
                        <span className="sr-only">Toggle header menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs">
                        <MenuItems/>
                 
                    </SheetContent>
                  
                    
                    
                </Sheet>
                <div className="hidden lg:block">
                        <MenuItems/>
                    </div>
                    <ShoppingCart className="w-6 h-6"/>
        <span className="sr-only">User Cart</span>
        <div className="hidde lg:block">
        {isAuthenticated ?<div className="flex"><HeaderRightContent/></div>:null}

        </div>
                    {/* <HeaderRightContent/> */}
                   
            </div>

        </header>
    )
}
export default ShoppingHeader