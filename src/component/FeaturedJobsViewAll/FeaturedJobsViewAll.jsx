import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './FeaturedJobsViewAll.css'

const FeaturedJobsViewAll = () => {
    const {id} = useParams();

    const jobDetails = useLoaderData();
    const [job, setJob] = useState({});

    useEffect(() =>{
        if(jobDetails){
            const checkData = jobDetails.
            find(jobItem => jobItem.id == id)
            setJob(checkData)
        }
    },[]);
    console.log(job)
    
    return (
        <Link to="/id">
            <div className='text-center font-bold my-8'>
             <h3>Job Details: {job.company}</h3>
            </div>
            {/* <div className="grid grid-cols-3fr-1fr"> */}
            <div className='grid-container gap-5 p-4'>
                {/* Job Description  */}
                <div className='shadow-md'>
                    <h3 className='font-bold'>Job Description: </h3>
                    <p className='text-justify mb-6'>{job.description}</p>
                    <h3 className='font-bold'>Job Responsibility: </h3>
                    <p className='text-justify mb-6'>{job.jobResponsibility}</p>
                    <h3 className='font-bold'>Educational Requarements: </h3>
                    <p className='text-justify mb-6'>{job.eduQualification}</p>
                    <h3 className='font-bold'>Experiences: </h3>
                    <p className='text-justify mb-6'>{job.experience}</p>
                    <h3 className='font-bold'>Salary: </h3>
                    <p className='text-justify mb-6'>{job.salary}</p>
                </div>
                {/* Job Details  */}
                <div className='bg-violet-100 p-5 shadow-md'>
                    <>
                    <h3 className='font-bold mt-3 mb-7'>Job Details</h3>
                    <hr className='bg-violet-300' />
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-700 mr-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <small className='font-medium'></small>{job.salary}</p>

                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-700 mr-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <small className='font-medium'></small>{job.title}</p>

                    <h3 className='font-bold mt-5 mb-7'>Contact Information</h3>
                    <hr className='bg-violet-300' />

                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-violet-700 mr-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <small className='font-medium'>Phone: </small>{job.phone}</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-violet-700 mr-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                    </svg>
                    <small className='font-medium'>Email: </small>{job.email}</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-violet-700 mr-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <small className='font-medium'>Address: </small>{job.address}</p>
                    </>
                    <div className='text-center my-6'>
                    <button className='btn mb-2 btn'><Link to={`/${job.id}`} className='btn mb-2 btn w-full '> Apply Now </Link>
                    </button>
                    </div>
                </div>
                
            </div>
        </Link>
    );
};


export default FeaturedJobsViewAll;