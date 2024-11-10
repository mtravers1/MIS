import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { Route, Router, Routes } from 'react-router-dom';
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
import Dashboard from './pages/admin/dashboard'
import store from './reduxstore/store'
import CheckAuth from './components/common/check-auth';
import AuthLayout from './components/auth/layout';
import ShopLayout from './components/shop/layout';
function App() {
  const isAuthenticated=false
  const user={
    name:'mike',
    role:'admin'
  }
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
        {/* <Route path='register' element={<Register/>}/> */}
      
    </Route>


    <Route path='/admin' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>
        }>


        <Route path='dashboard' element={<Dashboard/>}/>
        
      
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
