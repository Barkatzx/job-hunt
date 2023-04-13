import React from 'react';

const Banner = () => {
  return (
    <div className="bg-pink-50">
      <div className="container mx-auto">
        <div className="md:flex md:flex-row md:justify-between md:items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              One Step <br /> Closer To Your<br />
              <span className="text-pink-600">Dream Job</span>
            </h1>
            <p className="mt-3 text-lg md:text-xl leading-relaxed"> Explore thousands of job opportunities with all <br />  the information you need. It's your future. Come find it.<br />  Manage all your job applications from start to finish.
            </p>
            <button className="mt-6 hover:bg-pink-400 text-white text-xl font-semibold p-2 rounded-lg bg-pink-500">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/public/assets/img/P3OLGJ1 copy 1.png"
              alt="Image"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
