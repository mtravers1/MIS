import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authslice"
import adminProductSlice from '../reduxstore/admin/products-slice'
const store = configureStore({
    reducer:{
        auth:authReducer,
        adminProducts:adminProductSlice
    }
})

export default store