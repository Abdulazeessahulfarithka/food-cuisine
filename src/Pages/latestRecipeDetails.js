import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../API/api';
import { useParams } from 'react-router-dom';

function LatestRecipeDetails() {
  const { id } = useParams();
  const [recipes, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/api/latest/recipes`);
        console.log("Fetched recipes:", response.data.recipes);
        const fetchedRecipe = response.data.recipes.find(r => r.id === id); 
        console.log("API",fetchedRecipe)          
        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        } else {
          setError('Recipe not found');
        }
      } catch (error) {

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {recipes ? (
        <div>
          <h2>{recipes.title}</h2>
          <p>{recipes.description}</p>
        </div>
      ) : (
        <p>No recipe found.</p>
      )}
    </div>
  );
}

export default LatestRecipeDetails;
