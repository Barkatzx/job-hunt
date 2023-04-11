import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Jobs = () => {
  const location = useLocation();
  const jobId = new URLSearchParams(location.search).get('jobs.id');

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    fetch(`/public/data/${jobId}.json`)
      .then(res => res.json())
      .then(data => setJobDetails(data))
      .catch(error => console.log(error));
  }, [jobId]);

  return (
    
    <div>
        <div className='flex justify-between bg-pink-50'>
                <div>
            <img src="/public/assets/img/Vector.png" className="" alt="Left Image" /></div>
            <div className='text-center text-5xl font-semibold pt-10'>
            Job Details</div>
            <div>
            <img src="/public/assets/img/Vector-1.png" className="" alt="Right Image" /></div>
            </div>
      <h2>{jobDetails.job_title}</h2>
      <p>{jobDetails.company_name}</p>
      <p>{jobDetails.location}</p>
    <p>{jobDetails.salary}</p>
      Bangladesh
    </div>
  );
};

export default Jobs;

