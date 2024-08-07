import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ReceipeCard from "./Pages/ReceipeCard";
import Breakfast from './Pages/Breakfast';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/ReceipeCard" element={<ReceipeCard />} />
          <Route path="/breakfast" element={<Breakfast />} />
        </Routes>
     
    </div>
  );
}

export default App;
