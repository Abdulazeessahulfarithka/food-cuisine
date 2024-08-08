import axios from 'axios';
import React, { useState, useEffect } from 'react';
import API from '../API/api';
import LatestRecipeList from './latestRecipeList';

function LatestRecipe() {
  const [loading, setLoading] = useState([]); // Initialize as an empty array

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/api/latest/recipes`);
        console.log(response.data);
        setLoading(response.data.recipes || []); // Ensure `recipes` is set to an empty array if not available
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading([]); // Fallback to an empty array in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Latest Recipes</div>
    
      <div>
        {loading.length > 0 ? (
          loading.map((recipe, index) => (
            <div key={index}>
            <LatestRecipeList recipe={recipe}/></div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </>
  );
}

export default LatestRecipe;
