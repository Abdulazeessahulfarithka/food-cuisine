import React from 'react';
import './latestRecipeList.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function LatestRecipeList({ recipe }) {
const navigate =useNavigate()

  const handleClick=()=>[
   navigate("/latestrecipedetails")
  ]
  return (
   <>
    <div className='container'>
    <div className="cardt">
      <div className="card-img-wrapper">
        <img className="card-img" src={recipe.photo} alt={recipe.name} />
      </div>
      <div className="card-body">
        <Button   className="card-title" onClick={handleClick}>{recipe.name}</Button>
      </div>
    </div>
    </div>
   </>
  );
}

export default LatestRecipeList;
