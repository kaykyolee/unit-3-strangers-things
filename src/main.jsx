import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux';
import accountReducer from './redux/authenticate'
import './App.css';
import './index.css'
import { configureStore } from '@reduxjs/toolkit';

const store=configureStore({
  reducer:{
    account:accountReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>  
  </React.StrictMode>
  </Provider>,
)
