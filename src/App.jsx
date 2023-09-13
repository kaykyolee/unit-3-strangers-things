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
  const [token,setToken]=useState(null);
  return (
    <>
      <div> 
        <Navbar/>
          <Routes>
            <Route path="/" element ={<Login setToken={setToken}/>}/>
            <Route path="/register" element={<Register setToken={setToken}/>}/>
            <Route path="/home" element={<Home token={token}/>}/>
            <Route path="logout" element={<Logout/>}/>
          </Routes>
        <Posts/>
      </div>
    </>
  )
}

export default App
