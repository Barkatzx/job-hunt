import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-pink-50 p-6'>
      <nav className="flex items-center justify-between flex-wrap container mx-auto">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link to="/">
          <span className="font-semibold text-5xl tracking-tight">JobHunt</span> </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleMenuClick}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-900 hover:border-gray-900"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow text-left md:text-center">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl active"
            >
              Home
            </Link>
            <Link
              to="/statics"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl"
            >
              Statics
            </Link>
            <Link
              to="/applied"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl"
            >
              Applied Job
            </Link>
            <Link
              to="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 text-xl"
            >
              Blog
            </Link>
          </div>
          <div>
            <button className=" hover:bg-pink-300 text-white text-xl font-semibold p-2 rounded-lg bg-pink-500">
              Start Applying
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
