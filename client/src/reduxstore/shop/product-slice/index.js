import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isLoading:false,
    productList:[]
}
export const getAllFilteredProducts = createAsyncThunk('/products/getAllProducts', async()=>{
    try{
        const result=await axios.get('http://localhost:5000/api/shop/products/get')
        return result?.data
    }
    catch(e){
        console.log(e)
    }
  
} )
const shoppingProductSlice=createSlice({
    name:'shoppingProducts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllFilteredProducts.pending,(state, action)=>{
            state.isLoading=true
        })
        .addCase(getAllFilteredProducts.fulfilled,(state, action)=>{
            console.log("this is the actionfilter",action.payload)
            state.isLoading=false
            state.productList=action.payload
        })
        .addCase(getAllFilteredProducts.rejected,(state, action)=>{
            state.isLoading=false
            state.productList=[]
        })
    }   
})
export default shoppingProductSlice.reducer