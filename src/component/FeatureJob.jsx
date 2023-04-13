import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';


const FeatureJob = ({product}) => {

    const {id, company_logo, company_name, job_title, remote_or_onsite, fulltime_or_parttime, location, salary} = product

  return (
    
      <div className='bg-white shadow-2xl rounded-md p-8'>
            <div className=''>
              <img src={company_logo} className='w-40' alt={company_name} />
              <h3 className='text-3xl mt-2'>{job_title}</h3>
              <h3 className='text-lg font-semibold text-slate-500'>{company_name}</h3>
            </div>
            <div className='flex gap-4 mt-3'>
              <div className='outline outline-pink-500 p-2 rounded-md'>
                <h2 className='text-xl text-pink-600'>{remote_or_onsite}</h2>
              </div>
              <div className='outline outline-pink-500 p-2 rounded-md'>
                <h2 className='text-xl text-pink-600'>{fulltime_or_parttime}</h2>
              </div>
              </div>
            <div className='flex md:flex-row flex-col gap-3 mt-3'>
              <div className=''>
                <h2 className='text-xl'>
                  <FontAwesomeIcon icon={faLocationDot} /> {location}
                </h2>
              </div>
              <div className=''>
                <h2 className='text-xl'>
                  <FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}
                </h2>
              </div>
            </div>
            <div className="mt-4">
          <Link to={`/product/${id}`} className=" hover:bg-pink-400 text-white text-xl font-semibold p-2 rounded-lg bg-pink-500">Show Details</Link>
        </div>
        </div>
  );
};

export default FeatureJob;
