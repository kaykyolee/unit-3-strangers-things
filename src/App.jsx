import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home';
import Posts from "./components/posts";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div> 
        <Navbar/>
          <Routes>
            <Route path="/home" element ={<Home/>}/>
          </Routes>
        <Posts/>
      </div>
    </>
  )
}

export default App
