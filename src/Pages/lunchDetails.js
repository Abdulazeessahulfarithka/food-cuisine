import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../API/api.js';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/api/lunch/allrecipes`);
        console.log("API Response:", response.data);
        const fetchedRecipe = response.data.recipes.find(m => m._id === id); 
        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        } else {
          console.log(`Recipe with id ${id} not found`);
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
      <div className="container">
      <h1>{recipe.description}</h1>
        <h1>{recipe.name}</h1>
        <img src={recipe.photo} alt={recipe.name} className="img-fluid" />
        <div>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        </div>

      <div>
      <h3>Directions</h3>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

        {recipe.photos && recipe.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`${recipe.name} step ${index + 1}`} className="img-fluid" />
        ))}

       <div>
       <h3>Benefits</h3>
       <p>{recipe.benefits}</p>
       </div>
      </div>
    )
  );
}

export default RecipeDetails;
