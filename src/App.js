import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
   return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
