import React, { useEffect } from 'react';
import './App.css';
import AdminOrders from './pages/admin/orders';
import { Route, Routes } from 'react-router-dom';
import Browse from './pages/shop/browse';
import Home from './pages/shop/home'
import About from './pages/shop/about';
import Login from './pages/auth/login'
import Register from './pages/auth/register';
import Cart from './pages/shop/cart';
import AdminLayout from './components/admin/layout';
// import Context from './context-reducer/context';
// import  {Provider} from 'react-redux '
// import Provider  from 'react-redux'
import AdminDashboard from './pages/admin/dashboard'
import CheckAuth from './components/common/check-auth';
import AuthLayout from './components/auth/layout';
import ShopLayout from './components/shop/layout';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './reduxstore/authslice';
import Products from './pages/admin/products';
import AdminProducts from './pages/admin/products';
function App() {
  // const isAuthenticated=false
  // const user={
  //   name:'mike',
  //   role:'user'
  // }




  const {user, isAuthenticated}=useSelector(state=>state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])
// if(isLoading) return<div>Loading<.../div>

  return (
    <div>
{/* <Provider store={store}> */}
  <Routes>
  <Route path='/auth/register' element={<Register/>}/>

  <Route path='/auth' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </CheckAuth>
        }>
        <Route path='login' element={<Login/>}/>
        
        <Route path='register' element={<Register/>}/>
      
    </Route>


    <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          {/* <Route path="features" element={<AdminFeatures />} /> */}
        </Route>



    <Route path='/shop' element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <ShopLayout/>
   </CheckAuth>
  }>

    <Route path='home' element={<Home/>}/>
    <Route path='browse' element={<Browse/>}/>
    <Route path='about' element={<About/>}/>
     <Route path='cart' element={<Cart/>}/>
        
   
      </Route> 
    {/* <Route path='/' element={<Home/>}/>
    <Route path='/browse' element={<Browse/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path="/register" element={<Register/>}/> 
     <Route path='/cart' element={<Cart/>}/> */}
  </Routes>
 
</div>
  );
}

export default App;
