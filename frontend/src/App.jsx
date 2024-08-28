import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Data from "./pages/Data";
import Login from "./pages/Login";

import "./styles/global.css";

const App = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
