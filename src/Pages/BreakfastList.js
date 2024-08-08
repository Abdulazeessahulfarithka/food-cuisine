import React from 'react';

function BreakfastList({ user }) {
  return (
    <div className="card">
      <img src={user.photo} alt={user.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.description}</p>
        <p className="card-text"><strong>Ingredients:</strong> {user.ingredients}</p>
        {user.photo1 && <img src={user.photo1} alt={`${user.name} step`} className="card-img-top" />}
        <p className="card-text"><strong>Benefits:</strong> {user.benefits}</p>
        <button className="btn btn-primary">View Recipe</button>
      </div>
    </div>
  );
}

export default BreakfastList;
