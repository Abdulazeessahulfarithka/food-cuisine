import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../API/api.js';

function RecipeDetails() {
  const { id } = useParams(); // This is the MongoDB ObjectID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/api/category/allreceipe`);
        console.log("API Response:", response.data.recipes);
        const fetchedRecipe = response.data.recipes.find(r => r._id === id); 
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
        <h1>{recipe.name}</h1>
        <img src={recipe.photo} alt={recipe.name} className="img-fluid" />
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Directions</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        {recipe.photos && recipe.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`${recipe.name} step ${index + 1}`} className="img-fluid" />
        ))}
        <h3>Benefits</h3>
        <p>{recipe.benefits}</p>
      </div>
    )
  );
}

export default RecipeDetails;
