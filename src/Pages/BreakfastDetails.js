import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../API/api.js';
import "../Pages/BreakfastDetails.css"

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/api/category/allreceipe`);
        // console.log("API Response:", response.data.recipes);
        const fetchedRecipe = response.data.recipes.find(r => r._id === id); 
        // console.log("API", fetchedRecipe)
        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        } else {
          // console.log(`Recipe with id ${id} not found`);
          setError('Recipe not found');
        }
      } catch (error) {
        console.error('Failed to fetch recipe:', error);
        setError('Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    recipe && (
      <div className="containers">
       <h1>{recipe.description}</h1>
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
            recipe.instructions.split('.').map((instruction, index) => (
              <li key={index}>{instruction.trim()}</li>
            ))
          )}
        </ol>
       </div>
        {recipe.photo1 && (
          <img src={recipe.photo1} alt={`${recipe.name} additional`} className="img-fluid" />
        )}
       <div>
       <h3>Benefits</h3>
       <p>{recipe.benefits}</p>
       </div>
      </div>
    )
  );
}

export default RecipeDetails;
