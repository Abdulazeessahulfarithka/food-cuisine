import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ReceipeCard from "./Pages/ReceipeCard";
import Breakfast from './Pages/Breakfast';
import Home from './Components/Home';
import RecipeDetails from './Pages/BreakfastDetails';
import LatestRecipeDetails from './Pages/latestRecipeDetails';

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipecard" element={<ReceipeCard />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/receipe/:id" element={<RecipeDetails />} />
        <Route path="latestrecipedetails" element={<LatestRecipeDetails/>}/>
      </Routes>
  );
}

export default App;
