import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../API/api';
import Ramzanrecipelist from "../Pages/ramzanRecipeList.js";

function RamzanRecipe() {
  const [list, setList] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/api/ramdan/allreceipe`);
        console.log('Full API response:', response.data);
        
        // Adjust this part based on your actual API response structure
        if (response.data && Array.isArray(response.data.recipe)) {
          setList(response.data.recipe); // Assuming `recipe` is the correct key
        } else if (response.data && Array.isArray(response.data.recipes)) {
          setList(response.data.recipes); // In case the key is `recipes`
        } else if (response.data && Array.isArray(response.data)) {
          setList(response.data); // If the list is directly in the root of the response
        } else {
          console.log('Unexpected API response structure:', response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <>
      <h1>Ramzan Recipes</h1>
    <div className='container'>
    <div className='row'>
  
      {list.length > 0 ? (
        list.map((recipe, index) => (
          <Ramzanrecipelist key={index} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
    </div>
    </>
      
  );
}

export default RamzanRecipe;
