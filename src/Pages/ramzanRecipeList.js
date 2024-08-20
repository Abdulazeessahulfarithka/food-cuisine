import React from 'react';

const cardStyle = {
  border: "2px dotted #ddd",
  borderRadius: "8px",
  overflow: "hidden", 
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "30px",
  width: "100%", 
  maxWidth: "180px", 
  backgroundColor: "white",
};

const titleStyle = {
  fontSize: "1.5em",
  marginBottom: "10px",
  color: "#333",
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
      <h2 style={titleStyle}>{recipe.name}</h2>
    </li>
  );
}

export default Ramzanrecipelist;
