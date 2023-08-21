import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Posts from "./components/posts";
import Register from "./components/register";
import Login from "./components/login";
import UserProfile from './components/userprofile'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div> 
        <Navbar/>
          <Routes>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/user-profile" element={<UserProfile/>}/>
          </Routes>
        <Posts/>
      </div>
    </>
  )
}

export default App
