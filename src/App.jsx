import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Posts from "./components/posts";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout"
import Home from './components/home'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div> 
        <Navbar/>
          <Routes>
            <Route path="/" element ={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="logout" element={<Logout/>}/>
          </Routes>
        <Posts/>
      </div>
    </>
  )
}

export default App
