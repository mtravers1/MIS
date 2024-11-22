import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
const initialState={
    isLoading:false,
    productList:[]
}

export const addNewProduct = createAsyncThunk('/products/addnewproduct', async(formData)=>{
    const result=await axios.post('http://localhost:5000/api/admin/products/add', formData,{
        headers:{
            'Content-Type':'application/json'
        }
    })
     return result?.data
} )
export const getAllProducts = createAsyncThunk('/products/getAllProducts', async()=>{
    try{
        const result=await axios.get('http://localhost:5000/api/admin/products/get')
        return result?.data
    }
    catch(e){
        console.log(e)
    }
  
} )
const editProducts = createAsyncThunk('/products/editproduct', async(id,formData)=>{
    const result=await axios.put(`http://localhost:5000/api/admin/products/edit/${id}`, formData,{
        headers:{
            'Content-Type':'application/json'
        }
    })
     return result?.data
} )
const deleteProducts = createAsyncThunk('/products/deleteproduct', async(id)=>{
    const result=await axios.delete(`http://localhost:5000/api/admin/products/delete/${id}`)
     return result?.data
} )
const adminProductSlice = createSlice({
    name:'adminProducts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending, (state)=>{
            state.isLoading=true
            
        })
       .addCase(getAllProducts.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.productList=action.payload.data

            
        })
        .addCase(getAllProducts.rejected, (state,action)=>{
            state.isLoading=false;
            state.productList=[]

            
        })
    }
})

export default adminProductSlice.reducer