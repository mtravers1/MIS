import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
        withCredentials: true,
      });
      return response.data;
    } 
    catch (error) {
      console.error("Registration failed:", error); // Log the error
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",
  async (  ) => {
   
      const response = await axios.get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true,
        headers:{
          'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate', 
          // Expires:'0'
          
        }
      });
      return response.data;
    
  }
);
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        withCredentials: true,
      });
      return response.data;
    } 
    catch (error) {
      console.error("Registration failed:", error); // Log the error
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
      setUser: (state, action) => {},
    },
    // (alias) registerUser(state: {
    //     isAuthenticated: boolean;
    //     isLoading: boolean;
    //     user: null;
    // } | undefined, action: UnknownAction): {
    //     isAuthenticated: boolean;
    //     isLoading: boolean;
    //     user: null;
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.user = null;
          state.isAuthenticated = false;
        }) 


        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          console.log(action)
          state.isLoading = false;
          state.user = action.payload.success ?  action.payload.user: null;
          state.isAuthenticated = action.payload.success ;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.user = null;
          state.isAuthenticated = false;
        })

        .addCase(checkAuth.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
          // console.log(action)
          state.isLoading = false;
          state.user = action.payload.success ?  action.payload.user: null;
          state.isAuthenticated = action.payload.success ;
        })
        .addCase(checkAuth.rejected, (state, action) => {
          state.isLoading = false;
          state.user = null;
          state.isAuthenticated = false;
        })
            
        }
    
})

export const {setUser }= authSlice.actions
export default authSlice.reducer

