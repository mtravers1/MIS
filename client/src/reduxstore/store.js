import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authslice"
import adminProductSlice from '../reduxstore/admin/products-slice'
import shoppingProductSlice from './shop/product-slice'
const store = configureStore({
    reducer:{
        auth:authReducer,
        adminProducts:adminProductSlice,
        shopProducts: shoppingProductSlice
    }
})

export default store