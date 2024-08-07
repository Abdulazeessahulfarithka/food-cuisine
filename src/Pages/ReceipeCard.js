import React from 'react';
import { Link } from 'react-router-dom';
import "./ReceipeCard.css";
import breakfastImage from "../Assets/Breakfastimage.png";
import lunchimage from "../Assets/lunchimage.jpeg";
import dinnerimage from "../Assets/dinnerImage.jpg";

// Component for individual recipe cards
function RecipeCard({ imageSrc, buttonText, link }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={buttonText} />
        <div className="card-body">
          <Link to={link} className="btn btn-primary">{buttonText}</Link>
        </div>
      </div>
    </div>
  );
}

// Main component to render the list of recipe cards
function RecipeCardContainer() {
  const cardsData = [
    { imageSrc: breakfastImage, buttonText: "Breakfast", link: "/breakfast" },
    { imageSrc: lunchimage, buttonText: "Lunch", link: "/lunch" },
    { imageSrc: dinnerimage, buttonText: "Dinner", link: "/dinner" },
    
  ];

  return (
    <>
      <h1 className="amatic-sc-bold text-center mt-5">Choose Your Meal</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {cardsData.map((card, index) => (
            <RecipeCard
              key={index}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipeCardContainer;
