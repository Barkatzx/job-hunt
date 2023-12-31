import React, { useEffect, useState } from 'react';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='container mx-auto'>
  <h2 className='text-5xl font-semibold text-center m-8'>Job Category List</h2>
  <h2 className='text-xl text-center m-3'>Explore thousands of job opportunities with all the information you need. Its your future</h2>
  <div className='flex gap-5 md:flex-row flex-col justify-center m-5'>
    {category.map(cat => (
      <div key={cat.id} className='bg-pink-50 flex flex-col justify-center p-8 rounded-2xl'>
        <img src={cat.img} alt={cat.title}
        className='w-12 h-12 bg-pink-100 p-3 rounded-lg' />
        <h3 className='text-2xl font-semibold mt-6'>{cat.title}</h3>
        <p className='text-md font-medium text-gray-500'>{cat.description} Jobs Available</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Category;
