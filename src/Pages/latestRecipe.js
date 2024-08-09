import axios from 'axios';
import React, { useState, useEffect } from 'react';
import API from '../API/api';
import LatestRecipeList from './latestRecipeList.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function LatestRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/api/latest/recipes`);
        console.log(response.data); // For debugging
        setRecipes(response.data.recipes || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRecipes([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className='text-center my-4'>Latest Recipes</h2>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center mb-4">
                <LatestRecipeList recipe={recipe} />
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No recipes found.</p>
            </div>
          )}
        </div>
        <div className="text-end my-4">
          <button onClick={()=>{
           alert("/morerecipes")
          }}>See More Recipes</button>
        </div>
      </div>
    </>
  );
}

export default LatestRecipe;
