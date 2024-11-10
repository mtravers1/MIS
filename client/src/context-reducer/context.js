// import { createContext } from "react";

// export const CartContext=createContext()

// export const CartContextProvider=(props)=>{
//     const [cartItems, setCartItems]=useState() 
//     return <CartContext.Provider>{props.children}</CartContext.Provider>
// }

// import product from "../data/data";
// import { createContext, useContext, useReducer } from "react";
// import { useState } from "react";
// export const CartContext=createContext()
// const [cart, setCart]=useState(defaultCart())
// const defaultCart=()=>{
//     let cart={}
//     for(let i=0; i<product.length; i++){
//         cart[i]=0
//     }
//     return cart;
// }


// export const CartContextProvider=(props)=>{
//     return <CartContext.Provider>{props.children}</CartContext.Provider>
// }

// export const CartContext= createContext()

// export const CartContextProvider=(props)=>{
// return <CartContextProvider>

// {props.children}
// </CartContextProvider>
// }

// import { createContext } from "react";
// import useState from 'react'
// import product from "../data/data";

// const [cart, SetCart]=useState()
// export const CartContext= createContext()


// const defaultCart=()=>{
//     let cart={}
//     for(let i=0; i<product.length; i++){
//         cart[i]=0;

//     }
//     return
// }
// export const CartContextProvider = (props)=>{
//     <CartContextProvider>{props.children}</CartContextProvider>
// }

// import React from "react";
// import { createContext } from "react";
// import { useState } from "react";
// const [cart, SetCart]=useState(defaultCart())
// export const Cart= createContext()



// const Context = ({children})=>{
//     const [state, dispatch]=useReducer(cartReducer, {
//         products:product,
//         cart:[]
//     })
//     return(
//         <Cart.Provider value={{state, dispatch}}>
//             {children}
//         </Cart.Provider>
//     )
// }

// export const CartState = ()=>{
//     return useContext(Cart)
// }

// export default Context


import {  useContext, useReducer } from "react";
import { createContext } from "react";
import product from "../data/data";
import { cartReducer } from "./reducer";
const Cart = createContext();

const Context = ({ children }) => {
//   const product = [...Array(20)].map(() => ({
//     id: products.id,
//     name: products.name,
//     price: products.price,
    
//     // fastDelivery: faker.datatype.boolean(),
//   }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

//   const [productState, productDispatch] = useReducer(productReducer, {
//     byStock: false,
//     byFastDelivery: false,
//     byRating: 0,
//     searchQuery: "",
//   });

//   console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;