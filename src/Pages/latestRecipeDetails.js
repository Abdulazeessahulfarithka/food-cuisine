import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../API/api';

function LatestRecipeDetails() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${API}/api/latest/recipes`);
        console.log(response.data.recipes);
        setRecipes(response.data.recipes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            {/* Add more fields as needed */}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default LatestRecipeDetails;
