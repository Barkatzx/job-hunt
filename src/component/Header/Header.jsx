import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-pink-50 p-6'>
        <nav className="flex items-center justify-between flex-wrap container mx-auto">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-5xl tracking-tight">JobHunt</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-center">
          <Link to="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl active"
          >
            Home
          </Link>
          <Link to="/statics"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl"
          >
            Statics
          </Link>
          <Link to="/applied"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 text-xl"
          >
            Applied Job
          </Link>
          <Link to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 text-xl"
          >
            Blog
          </Link>
        </div>
        <div>
          <button className=" hover:bg-purple-300 text-white text-2xl font-bold p-3 rounded bg-gradient-to-r from-fuchsia-600 to-purple-600">
            Start Applying
          </button>
        </div>
      </div>
    </nav>
    

    </div>
    );
};

export default Header;