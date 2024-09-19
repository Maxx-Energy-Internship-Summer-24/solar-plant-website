import React, { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Data from './pages/Data'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserProfile from './pages/UserProfile'
import ProtectedRoute from './components/ProtectedRoute'
import "./styles/global.css";


const App = () => {
  const [contacts, setContacts] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/data" element={<Data />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo}/>} />
          {/* Add route for UserProfile */}
          <Route 
            path="/UserProfile" 
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <UserProfile isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />
              </ProtectedRoute>
            } 
          />
        </Routes>
          
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
