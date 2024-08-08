import './Breakfast.css';
import { API } from "../API/api.js";
import { useEffect, useState } from 'react';
import axios from 'axios';
import BreakfastList from './BreakfastList.js';

function Breakfast() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/api/category/allreceipe`);
      console.log(response.data);
      
      // Check if the API response has the `allreceipe` array and set it to `userList`
      if (Array.isArray(response.data.allreceipe)) {
        setUserList(response.data.allreceipe);
      } else {
        console.error('API response does not contain an allreceipe array.');
        setUserList([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserList([]); // Fallback to an empty array in case of error
    }
  };

  return (
    <div className='container'>
      <div className='col-lg-12 mt-3'>
        {userList.length > 0 ? (
          userList.map((recipe, index) => (
           <h1>{recipe.name}</h1>
          ))
        ) : (
          <p>No recipes found.</p> // Fallback message if no recipes are available
        )}
      </div>
    </div>
  );
}

export default Breakfast;
