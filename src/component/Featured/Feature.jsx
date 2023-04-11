import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
  const [feature, setFeature] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setFeature(data))
      .catch(error => console.log(error));
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-5xl font-semibold text-center mt-8'>Featured Jobs</h2>
      <h2 className='text-xl text-center mt-3'>
        Explore thousands of job opportunities with all the information you need. It's your future
      </h2>
      <div className='container mx-auto grid md:grid-cols-2 gap-4 mt-8 grid-rows-1'>
        {feature.slice(0, showAll ? feature.length : 4).map(job => (
          <div key={job.id} className='bg-white shadow-md rounded-md p-8'>
            <div className=''>
              <img src={job.company_logo} className='w-40' alt={job.company_name} />
              <h3 className='text-3xl font-semibold mt-2'>{job.job_title}</h3>
              <h3 className='text-lg font-semibold text-slate-500'>{job.company_name}</h3>
            </div>
            <div className='flex gap-4 mt-3'>
              <div className='outline outline-purple-600 p-2 rounded-md'>
                <h2 className='text-xl text-purple-600'>{job.remote_or_onsite}</h2>
              </div>
              <div className='outline outline-purple-600 p-2 rounded-md'>
                <h2 className='text-xl text-purple-600'>{job.fulltime_or_parttime}</h2>
              </div>
            </div>
            <div className='flex md:flex-row flex-col gap-3 mt-3'>
              <div className=''>
                <h2 className='text-xl'>
                  <FontAwesomeIcon icon={faLocationDot} /> {job.location}
                </h2>
              </div>
              <div className=''>
                <h2 className='text-xl'>
                  <FontAwesomeIcon icon={faDollarSign} /> Salary: {job.salary}
                </h2>
              </div>
            </div>
            <Link to={`/jobs?id=${job.id}`}>
  <button
    className='mt-3 hover:bg-purple-300 text-white text-2xl font-bold p-3 rounded bg-gradient-to-r from-fuchsia-600 to-purple-600'
    onClick={() => setSelectedJobId(job.id)}
  >
    View Details
  </button>
</Link>

          </div>
        ))}
      </div>
      {!showAll && (
        <div className='flex justify-center mt-8'>
          <button
            className=' hover:bg-purple-300 text-white text-2xl font-bold p-3 rounded bg-gradient-to-r from-fuchsia-600 to-purple-600'
            onClick={toggleShowAll}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Feature;
