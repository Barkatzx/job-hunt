import React from 'react';

const Banner = () => {
    return (
        <div className='bg-pink-50'>
            <div className='container mx-auto'>
    <div className="bg-pink-50 flex md:flex-row flex-col justify-between items-center">
        <div className='p-4'>
  <h1 className="text-6xl font-bold">One Step <br/> Closer To Your <br/> Dream Job</h1>
  <p className='mt-3 text-xl'>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all <br/> your job application from start to finish.</p>
  <button className=" mt-3 hover:bg-purple-300 text-white text-2xl font-bold p-3 rounded bg-gradient-to-r from-fuchsia-600 to-purple-600">
            Get Started
          </button>
  </div>
  <img src="/public/assets/img/P3OLGJ1 copy 1.png" alt="Image" className=''/>
</div></div>
        </div>
    );
};

export default Banner;