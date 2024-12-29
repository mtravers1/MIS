import React, { useState,useEffect } from "react";
import Filter from "../../components/shop/filter";
import { Button } from "../../ui/button";
import { ArrowUpDown } from 'lucide-react';
import { sortOptions } from "../../config";
import { useDispatch } from "react-redux";
import {deleteProducts, getAllProducts} from '../../reduxstore/admin/products-slice'
import { getAllFilteredProducts } from "../../reduxstore/shop/product-slice";
import { useSelector } from "react-redux";
import Productcard from "../../components/shop/productcard";
const Listing = ()=>{
    const [drop, setDrop]=useState(false)
    const dropdown=()=>{
        setDrop(!drop)
    }
    const dispatch=useDispatch()
    const {productList}=useSelector(state=>state.shopProducts)
    useEffect(()=>{
        dispatch(getAllFilteredProducts())
       
    },[dispatch])
    console.log("this is the productlist",productList.data)
    let productlists=productList.data
    console.log(productlists)
    return(
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">

            <Filter/>
            <div className="bg-background w-full rounded-lg shadow-sm">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-extrabold">All Products</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">10 Products</span>
                        {/* <div> */}
                        <div>
                            <Button onClick={dropdown} variant="outline" size="sm" className="w-max flex items-center">                  
                              Sort By<ArrowUpDown className="h-4 w-4"/>
                            </Button>
                        {/* </div> */}
                        {drop&&(
                                <div>
                                    {
                                        sortOptions.map((sort)=>(
                                            <div>
                                                <label>{sort.label}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                    </div>
                    </div>
                   
                </div>
             
                  {
                    productList.data.map((product)=>(
                        <div className="flex">
                       <Productcard product={product}/>
                        </div>
                    ))
                  }

            </div>
        </div>
    )
}
export default Listing