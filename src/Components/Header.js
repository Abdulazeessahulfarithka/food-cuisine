import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import recipe from '../Assets/receiep.png'; 
import LatestRecipe from '../Pages/latestRecipe.js';
import Home from './Home';
import RamzanRecipe from '../Pages/ramzanRecipe.js';
import "./Header.css"


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      navigate(`/lunch?search=${encodeURIComponent(searchTerm.trim())}`); // Redirect with search term as query parameter
    }

  };

  return (
    <>
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={recipe} alt="Logo" className="h-8 w-10 mr-2" />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
          >
            <ul className="md:flex md:space-x-4">
              <li className="text-gray-800">
                <NavLink to="/" className="block px-2 py-1 rounded hover:bg-gray-200">
                  Home
                </NavLink>
              </li>
              <li className="text-gray-800">
                <NavLink to="/Recipecard" className="block px-2 py-1 rounded hover:bg-gray-200">
                  Recipe Index
                </NavLink>
              </li>
              <li className="text-gray-800">
                <NavLink to="/about" className="block px-2 py-1 rounded hover:bg-gray-200">
                  About Me
                </NavLink>
              </li>
              <li className="text-gray-800">
                <NavLink to="#" className="block px-2 py-1 rounded hover:bg-gray-200">
                  Media
                </NavLink>
              </li>
              <li>
             <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
  <input
                type="search"
                id="form1"
                className="form-control"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <label className="form-label" htmlFor="form1">Search</label>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
              onClick={handleSearchSubmit}
            >
    <i class="fas fa-search"></i>
  </button>
</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto my-4">
        <Home />
      </div>
      <div className="container mx-auto my-4">
        <LatestRecipe />
      </div>
      <div className="container">
        <RamzanRecipe />
      </div>
    </>
  );
}

export default Header;
