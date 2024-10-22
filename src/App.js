import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { Route, Router, Routes } from 'react-router-dom';
import Browse from './pages/browse';
import Home from './pages/home'
import About from './pages/about';
import Login from './pages/login'
import Register from './pages/register';
import Cart from './data/cart';
import Context from './context-reducer/context';
function App() {
  return (
    
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/browse' element={<Browse/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
 

  );
}

export default App;
