import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import receipe from '../Assets/receiep.png'; // Update with the correct path to your image

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={receipe} alt="Logo" className="h-8 w-10 mr-2" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4">
            <li className="text-gray-800">
              <NavLink to="/" className="block px-2 py-1 rounded hover:bg-gray-200">
                Home
              </NavLink>
            </li>
            <li className="text-gray-800">
              <NavLink to= "/ReceipeCard" className="block px-2 py-1 rounded hover:bg-gray-200">
                ReceipeIndex
              </NavLink>
            </li>
            <li className="text-gray-800">
              <NavLink to="/pricing" className="block px-2 py-1 rounded hover:bg-gray-200">
                AboutMe
              </NavLink>
            </li>
            <li className="text-gray-800">
              <NavLink to="#" className="block px-2 py-1 rounded hover:bg-gray-200">
                Media
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
