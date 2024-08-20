import React from 'react';
import './latestRecipeList.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function LatestRecipeList({ recipe }) {
const navigate =useNavigate()

  const handleClick=()=>[
   navigate("/latestrecipedetails")
  ]
  return (
   <>
    <div className='container'>
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={recipe.photo} alt={recipe.name} />
      </div>
      <div className="card-body">
        <button className="card-title btn btn-primary" onClick={handleClick}>{recipe.name}</button>
      </div>
    </div>
    </div>
   </>
  );
}

export default LatestRecipeList;
