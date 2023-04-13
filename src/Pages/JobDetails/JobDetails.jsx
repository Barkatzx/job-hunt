import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const product = useLoaderData();
  console.log(product)
  const { id, job_description, job_responsibility } = product;

  const handleOrder = () => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
        localStorage.setItem("orders",JSON.stringify([...storedData,product]))
    }else{
        localStorage.setItem("orders",JSON.stringify([product]))
    }
console.log(storedData)
  }

  return (
    <div>
{/* <Banner bannerTitle={name}/> */}

      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2 h-[400px]">
          <img className="h-full w-full" src='' alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           gggg
            <div className="badge badge-secondary">ggg</div>
          </h2>
          <p className="text-md">Price:</p>
          <p className="text-md">Rating: {job_responsibility}</p>
          <p>{job_description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleOrder} className="hover:bg-pink-400 text-white text-xl font-semibold p-2 rounded-lg bg-pink-500">Order This Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
