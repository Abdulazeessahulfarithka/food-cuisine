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
      setUserList(response.data.recipe);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container'>
      <div className='col-lg-12 mt-3'>
        {userList.length > 0 ? (
          userList.map((item, index) => (
            <BreakfastList key={index} user={item} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Breakfast;
