// import { CurrencyDollarIcon, MapIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobsDetails = ({job}) => {
    console.log(job.id)
    const {company, description, experience, jobResponsibility, id, img,  salary, title} = job;
    // console.log(job)
    return (
        <div className="bg-white overflow-hidden rounded-lg shadow-md relative">
        {/* <img className="h-64 w-full object-cover" src={img} alt /> */}
            <div className="p-4 ">
                {/* <img className='object-cover' src={img} alt="" /> */}
                <img className='h-1/4 w-40 object-cover' src={img} alt="" />
                <h5 className="text-lg font-medium text-gray-900">{title}</h5>
                <h6 className='dark'>{company}</h6>
                <div className='flex my-4'>
                    <button className='inline-flex items-center h-12 px-6 mb-3 font-medium text-indigo-500 transition duration-200 rounded shadow-md  md:mb-0 bg-white hover:bg-indigo-700 hover:text-white'>Remote</button>
                    <button className='inline-flex items-center h-12 px-6 mb-3 font-medium text-indigo-500 transition duration-200 rounded shadow-md  md:mb-0 bg-white hover:bg-indigo-700 hover:text-white'>Full Time</button>
                </div>
                <div className='flex mt-4 mb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className='mr-2'> New Yourk, USA</p>
                {/* <CurrencyDollarIcon></CurrencyDollarIcon> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                
                <p>Salary: {salary}</p>
                </div>
                <button className='btn mb-2 btn'><Link to={`/${job.id}`} className='btn mb-2 btn'>View All</Link>
                </button>
                
            </div> 
        </div>
        
    );
};

export default FeaturedJobsDetails;