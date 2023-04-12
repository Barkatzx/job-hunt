import React, { useEffect, useState } from 'react';
import FeaturedJobsDetails from '../FeaturedJobsDetails/FeaturedJobsDetails';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () =>{
        setShowAll(true);
    }

    useEffect( () =>{
        fetch('/public/featuredJobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])



    // console.log(data)
    // const jobData = useLoaderData();
    // console.log(jobData)
    return (
        <div>
            <h1 class="text-4xl mt-10 text-center sm:text-5xl md:text-6xl lg:text-7xl">Featured Jobs</h1>
            <p className='text-center my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-4'>
            {
                jobs.slice(0, showAll ? 6 : 4).map(job => <FeaturedJobsDetails
                    key={job.id}
                    job={job}
                ></FeaturedJobsDetails>)
            }
            </div>
            <div className='text-center'>
                {
                    !showAll && (
                        <button onClick={handleShowAll} className='btn my-8 btn mx-auto'>View All</button>
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;