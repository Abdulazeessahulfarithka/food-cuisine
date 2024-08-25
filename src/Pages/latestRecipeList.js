import React from 'react';
import './latestRecipeList.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



function LatestRecipeList({ user }) {
const navigate =useNavigate()

  const handleClick=()=>[
   navigate(`/latestrecipe/${user._id}`)
  ]
  return (
   <>
   <div className='container'>
   <div className="cardt">
      <div className="card-img-wrapper">
        <img className="card-img" src={user.photo} alt={user.name} />
      </div>
      <div className="card-body">
        <Button className="cardp"  onClick={handleClick}>{user.name}</Button>
      </div>
    </div>
   </div>
   </>
  );
}

export default LatestRecipeList;
