import React from "react";
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./shoppingheader";
const ShopLayout=()=>{
    return(
        <div className="flex-col bg-white overflow-hidden">
            {/* <Nav/> */}
            <ShoppingHeader/>
            <main className="flex flex-col w-full">
            <Outlet/>

            </main>

            {/* <Footer/> */}
        </div>
    )
}
export default ShopLayout

