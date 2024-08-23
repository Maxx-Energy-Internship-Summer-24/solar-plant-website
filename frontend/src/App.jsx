import React, { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App