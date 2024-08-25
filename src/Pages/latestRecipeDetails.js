import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../API/api';
import { useParams } from 'react-router-dom';
import "../Pages/BreakfastDetails.css";

function LatestRecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/api/latest/recipes`);
        console.log("Fetched recipes array:", response.data.recipes);
        console.log("ID from useParams:", id);

        const fetchedRecipe = response.data.recipes.find(r => r._id === id);
        console.log("Fetched recipe:", fetchedRecipe);

        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        } else {
          setError('Recipe not found');
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError('Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    recipe && (
      <div className="container">
        <h1>{recipe.name}</h1>
        <img src={recipe.photo} alt={recipe.name} className="img-fluid" />
        <p>{recipe.description}</p>
        <div>
          <h3>Ingredients</h3>
          <ul>
            {Array.isArray(recipe.ingredients) ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>{recipe.ingredients}</li>
            )}
          </ul>
        </div>
        <div>
          <h3>Directions</h3>
          <ol>
            {Array.isArray(recipe.instructions) ? (
              recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))
            ) : (
              recipe.instructions ? (
                recipe.instructions.split('.').filter(Boolean).map((instruction, index) => (
                  <li key={index}>{instruction.trim()}</li>
                ))
              ) : (
                <li>No directions provided.</li>
              )
            )}
          </ol>
        </div>
        {recipe.photo1 && (
          <img src={recipe.photo1} alt={`${recipe.name} additional`} className="img-fluid" />
        )}
        <div>
          <h3>Benefits</h3>
          <p>{recipe.benefits || 'No benefits listed.'}</p>
        </div>
      </div>
    )
  );
}

export default LatestRecipeDetails;
