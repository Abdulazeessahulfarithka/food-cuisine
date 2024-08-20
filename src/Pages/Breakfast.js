import './Breakfast.css';
import { API } from "../API/api.js";
import { useEffect, useState } from 'react';
import axios from 'axios';
import BreakfastList from './BreakfastList.js';

function Breakfast() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/api/category/allreceipe`);
        // console.log('API response:', response.data);

        // Safeguard to ensure we are handling the response correctly
        if (response.data && Array.isArray(response.data.recipes)) {
          setUserList(response.data.recipes);
        } else {
          console.error('API response does not contain a recipes array.');
          setUserList([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
        setUserList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='container'>
      <div className='row mt-3'>
        {userList.length > 0 ? (
          userList.map((recipe, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <BreakfastList user={recipe} />
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Breakfast;
