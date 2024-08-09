import React from 'react';
import './latestRecipeList.css'; // Import the CSS file for styling

function LatestRecipeList({ recipe }) {
  return (
   <>
    <div className='container'>
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={recipe.photo} alt={recipe.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
      </div>
    </div>
    </div>
   </>
  );
}

export default LatestRecipeList;
