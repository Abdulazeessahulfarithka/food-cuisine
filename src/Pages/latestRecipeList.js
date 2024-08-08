import React from 'react';
import './latestRecipeList.css'; // Import the CSS file for styling

function LatestRecipeList({ recipe }) {
  return (
    <>
      <div className="card">
      <img className="card-img" src={recipe.photo} alt={recipe.name} />
      <div className="card-body">
        <h2 className="card-title">{recipe.name}</h2>
        <p className="card-description">{recipe.description}</p>
      </div>
    </div>
    </>
  );
}

export default LatestRecipeList;
