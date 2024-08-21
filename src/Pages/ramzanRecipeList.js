import { Button } from '@mui/material';
import React from 'react';

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden", 
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "30px",
  width: "100%", 
  height:"250px",
  maxWidth:"200px",
  backgroundColor: "white",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};

function Ramzanrecipelist({ recipe }) {
  return (
    <li style={cardStyle}>
      <img src={recipe.photo} alt={recipe.name} style={imageStyle} />
      <Button>{recipe.name}</Button>
    </li>
  );
}

export default Ramzanrecipelist;
