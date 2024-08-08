import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ReceipeCard from "./Pages/ReceipeCard";
import Breakfast from './Pages/Breakfast';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/ReceipeCard" element={<ReceipeCard />} />
          <Route path="/breakfast" element={<Breakfast />} />
        </Routes>
     
    </div>
  );
}

export default App;
