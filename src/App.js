import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { Route, Router, Routes } from 'react-router-dom';
import Browse from './pages/browse';
import Home from './pages/home'

function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/browse' element={<Browse/>}/>

  </Routes>
  );
}

export default App;
