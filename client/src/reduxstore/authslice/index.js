import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import formData from '../../pages/auth/register'
const initialState={
    isAuthenticate:false,
    isLoading:false,
    use:null
}

const registerUser= createAsyncThunk('/auth/register', async(formDate)=>{
    const response= await axios.post('http://localhost:5000/api/auth/register', formData, {
        withCredentials:true
    })
    return response.data
})
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state, action)=>{

        },
        extraReducers:(builder)=>{
            builder.addCase(registerUser.pending, (state)=>{
                state.isLoasding=true
            }).addCase(registerUser.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.user=action.payload
                state.isAuthenticated=false
            })
            .addCase(registerUser.rejected, (state, action)=>{
                state.isLoading=false;
                state.user=null;
                state.isAuthenticated=false
            })
            
        }
    }
})

export const {setUser }= authSlice.actions
export default authSlice.reducer

