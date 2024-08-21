import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  border: "1px solid",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  width: "300px",
  height: "250px", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const imgStyle = {
  width: "100%",
  height: "180px", 
  objectFit: "cover", 
};

const bodyStyle = {
  padding: "10px",
  textAlign: "center",
};

function BreakfastList({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/receipe/${user._id}`); // Corrected the URL
  };

  return (
    <div style={cardStyle}>
    <img src={user.photo} alt={user.name} style={imgStyle} />
    <div style={bodyStyle}>
        <Button variant="outlined" onClick={handleClick}>
          {user.name}
        </Button>
      </div>
    </div>
  );
}

export default BreakfastList;




