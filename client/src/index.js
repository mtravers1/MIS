// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import { BrowserRouter } from 'react-router-dom';
// // import reportWebVitals from './reportWebVitals';
// // import Context from './context-reducer/context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Context> */}
//     {/* <BrowserRouter>  */}
//     <App />

//      {/* </BrowserRouter> */}
//     {/* // </Context>  */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import { Provider } from 'react-redux'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import Context from './context-reducer/context';
import { Provider } from 'react-redux'
import store from './reduxstore/store.js'
createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <Provider store={store}>
  <Context>
      <BrowserRouter>
    <App />

  </BrowserRouter>

  </Context>

   </Provider>
)
