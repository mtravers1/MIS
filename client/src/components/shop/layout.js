import React from "react";
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { Outlet } from "react-router-dom";
const ShopLayout=()=>{
    return(
        <div>
            {/* <Nav/> */}
            <Outlet/>

            {/* <Footer/> */}
        </div>
    )
}
export default ShopLayout

